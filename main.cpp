// Copyright (C) 2021 Antti Helminen
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

//-----------------------------------------------------------------------------

#include "header.h"
#define MAJOR_VERSION 2
#define MINOR_VERSION 5
#define PATCH_VERSION 0

int main(int argc, char **argv)
{
    const std::chrono::steady_clock::time_point start{std::chrono::steady_clock::now()};
    std::vector<char*>input;
    char* output{nullptr};
    const char* mode{"a"};
    bool log{false};
    bool obfuscation{false};
    std::string bytes;
    std::filesystem::path filePath{std::filesystem::current_path()};
    uintmax_t inputSize{0}, outputSize{0}, reducedSize{0};
// ------------------------------------------------------------
// handle arguments
// ------------------------------------------------------------
#ifdef __GNUC__
    int opt = 0;
    while ((opt = getopt(argc, argv, "hvi:o:wtf")) != -1) {
        switch (opt) {
        //help
        case 'h':
            std::cout
                << "-- Minifier --\n"
                << "You can minify all sorts of file types\n"
                << "html, css, js, xml... etc etc.\n"
                << "\n"
                << "Options:\n"
                << "-v  Version info\n"
                << "-i  Input filename\n"
                << "-o  Output filename, or if ommitted then output will be printed to stdout.\n"
                << "-w  Change output file acces mode to overwrite. Default mode is append.\n"
                << "-t  Log results after minify. (time & compression)\n"
                << "-f  Obfuscate javascript variables\n"
                << "\n"
                << "Feedback:\n"
                << "https://github.com/Brebl/minifier\n";
            exit(0);
            break;
        //version
        case 'v':
            std::cout << "Minifier version: " << MAJOR_VERSION << "." << MINOR_VERSION << "." << PATCH_VERSION << "\n";
            exit(0);
            break;
        //input filename
        case 'i':
            input.emplace_back(optarg);
            filePath = optarg;
            inputSize += std::filesystem::file_size(filePath);
            break;
        //output filename
        case 'o':
            output = optarg;
            if(!output) {
                throw std::runtime_error("output file error\n");
            }
            break;
        //overwrite file access mode
        case 'w':
            mode = "w";
            break;
        //get timer output
        case 't':
            log = true;
            break;
        //obfuscate
        case 'f':
            obfuscation = true;
            break;
        default:
            abort();
        }
    }
#elif
#error Need GNU compiler
#endif
// ------------------------------------------------------------
// do stuff with those arguments
// ------------------------------------------------------------
    if (argc < 2) {
        std::cout
            << "This is Minifier\n"
            << "You can minify all sorts of file types...\n"
            << "Eg. html, css, js, xml... etc etc.\n"
            << "\n"
            << "minifier -h for more help\n";
        exit(0);
    }
    if (output) {
#ifdef __linux__
        FILE* stream = nullptr;
        stream = freopen(output, mode, stdout);
        if(!stream) {
            throw std::runtime_error("error on freopen");
        }
#endif
#ifdef _WIN32
        errno_t err;
        FILE* stream = nullptr;
        err = freopen_s(&stream, output, mode, stdout);
        if( err != 0 ) {
            std::stringstream ss;
            ss << err;
            throw std::runtime_error("error on freopen_s: " + ss.str());
        }
#endif
    }
    std::ifstream in;
    for(auto i: input) {
        in.open(i);
        if (!in) {
            throw std::runtime_error("input file opening error\n");
        }
        BYTE b;
        while (in.get(b)) {
            //inside quotes, do nothing
            if(b == '\'') {
                do {
                    std::cout << b;
                    in.get(b);
                    if(b == '\\') {
                        std::cout << b;
                        in.get(b);
                        std::cout << b;
                        in.get(b);
                    }
                } while (b != '\'');
            }
            if(b == '\"') {
                do {
                    std::cout << b;
                    in.get(b);
                    if(b == '\\') {
                        std::cout << b;
                        in.get(b);
                        std::cout << b;
                        in.get(b);
                    }
                } while (b != '\"');
            }
            //after punct, discard all spaces until graph
            //punct means: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
            if (ispunct(b)) { 
                while (isspace(in.peek())) {
                    in.ignore();
                }
            }
            //after space, discard all spaces until graph
            //space means: space, tab and white-space control codes
            if (isspace(b) && isspace(in.peek())) { 
                while (isspace(in.peek())) {
                    in.ignore();
                }
                continue;
            }
            //discard space, if next is punct
            if (isspace(b) && ispunct(in.peek())) { 
                continue;
            }
            //comments
            if (b == '/') {
                //discard line comments
                if (in.peek() == '/') {
                    in.ignore(MAX, '\n');
                    continue;
                }
                //discard block comments
                if (in.peek() == '*') { 
                    while (in.ignore(MAX, '*')) {
                        if (in.peek() == '/') {
                            in.ignore();
                            break;
                        }
                    }
                    continue;
                }
            }
            //obfuscate
            if(obfuscation) {
                obfuscate(in, b);
            }
            else {
                std::cout << b;
            }
        }
        in.close();
    }
    std::chrono::steady_clock::time_point finish{std::chrono::steady_clock::now()};
    std::chrono::milliseconds ms = std::chrono::duration_cast<std::chrono::milliseconds>(finish - start);
    if(log) {
        std::clog << "Minify took: " << ms.count() << "ms\n";
        if(output) {
            filePath = output;
            outputSize = std::filesystem::file_size(filePath);
            reducedSize = inputSize - outputSize;
            std::clog << "Filesize reduced by " << reducedSize << " bytes (";
            reducedSize *= 100;
            reducedSize /= inputSize;
            std::clog << reducedSize << "%)\n";
        }
    }
}
