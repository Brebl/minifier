#include "header.h"
#include <algorithm>

void obfuscate(std::ifstream& in, BYTE b)
{
    static std::vector<std::pair<std::string, std::string>> lib;
    static bool add_to_lib{ false };
    std::string bytes;
    std::string letters{"qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"};
    static size_t counter{0};
    std::string counterToChars;

    if(!ispunct(b) && !isspace(b)) {
        bytes += b;
        while (!ispunct(in.peek()) && !isspace(in.peek())) {
            bytes += in.get();
        }
    }
    else {
        std::cout << b;
        return;
    }
    if (add_to_lib) {
        //check if allready found
        auto it = find_if(lib.begin(), lib.end(),
            [&](const std::pair<std::string, std::string>& val) -> bool {
                return val.first == bytes;
            });
        //if found, use that
        if(it != lib.end()) {
            std::cout << it->second;
        }
        //if not found, add to lib
        else {
            size_t temp{counter};
            do {
                counterToChars += letters[temp%letters.size()];
                temp /= letters.size();
            } while(temp != 0);
            lib.emplace_back(std::make_pair(bytes, counterToChars));
            std::cout << lib.back().second;
            counter++;
        }
        add_to_lib = false;
    }
    else if (bytes == "const" || bytes == "var" || bytes == "let") {
        add_to_lib = true;
        std::cout << bytes;
    }
    else {
        auto it = find_if(lib.begin(), lib.end(),
            [&](const std::pair<std::string, std::string>& val) -> bool {
                return val.first == bytes;
            });
        if(it != lib.end()) {
            std::cout << it->second;
        }
        else {
            std::cout << bytes;
        }
    }
}