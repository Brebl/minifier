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

#include <iostream>
#include <fstream>
#include <cctype>
#include <limits>
#include <chrono>
#if __GNUC__ < 8
#warning Please use gnu-compiler from this millenium!
#endif
#ifdef __GNUC__
#include <unistd.h> //getopt
#endif
#define MAX std::numeric_limits<std::streamsize>::max()
#define MAJOR_VERSION 2
#define MINOR_VERSION 0
#define PATCH_VERSION 0

int main(int argc, char **argv)
{
    const std::chrono::steady_clock::time_point start{std::chrono::steady_clock::now()};
    char *input = nullptr;
    char *output = nullptr;
    char mode = 'a';
    bool timer = false;
// ------------------------------------------------------------
// handle arguments
// ------------------------------------------------------------
#ifdef __GNUC__
    int opt = 0;
    while ((opt = getopt(argc, argv, "hvi:o:wt")) != -1) {
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
                << "-t  Timer log after minify.\n"
                << "\n"
                << "Feedback:\n"
                << "github.com/Brebl\n";
            exit(0);
            break;
        //version
        case 'v':
            std::cout << "Minifier version: " << MAJOR_VERSION << "." << MINOR_VERSION << "." << PATCH_VERSION << "\n";
            exit(0);
            break;
        //input filename
        case 'i':
            input = optarg;
            break;
        //output filename
        case 'o':
            output = optarg;
            break;
        //overwrite file access mode
        case 'w':
            mode = 'w';
            break;
        //get timer output
        case 't':
            timer = true;
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
        freopen(output, &mode, stdout);
#endif
#ifdef _WIN32
        errno_t err;
        FILE *stream = nullptr;
        err = freopen_s(&stream, output, &mode, stdout);
#endif
    }

    std::ifstream in;
    in.open(input);
    if (!in) {
        throw std::runtime_error("input file opening error");
    }
    char c;
    while (in.get(c)) {
        if (ispunct(c)) { //after punct, discard all spaces until graph
            while (isspace(in.peek())) {
                in.ignore();
            }
        }
        if (isspace(c) && isspace(in.peek())) { //after space, discard all spaces until graph
            while (isspace(in.peek())) {
                in.ignore();
            }
            continue;
        }
        if (isspace(c) && ispunct(in.peek())) { //discard space, if next is punct
            continue;
        }
        if (c == '/') {
            if (in.peek() == '/') { //after comment, discard all until '\n'
                in.ignore(MAX, '\n');
                continue;
            }
            if (in.peek() == '*') { //discard block comments
                while (in.ignore(MAX, '*')) {
                    if (in.peek() == '/') {
                        in.ignore();
                        break;
                    }
                }
                continue;
            }
        }
        std::cout << c;
    }
    std::chrono::steady_clock::time_point finish{std::chrono::steady_clock::now()};
    std::chrono::milliseconds ns = std::chrono::duration_cast<std::chrono::milliseconds>(finish - start);
    if(timer) {
        std::clog << "Minify took: " << ns.count() << "ms\n";
    }
}
