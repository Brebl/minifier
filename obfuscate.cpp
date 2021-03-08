#include "header.h"

void obfuscate(std::ifstream& in, BYTE b)
{
    static std::vector<std::pair<std::string, std::string>> lib;
    static bool add_to_lib{ false };
    std::string bytes;

    if(!ispunct(b) && !isspace(b)) {
        while (!ispunct(b) && !isspace(b)) {
            bytes += b;
            in.get(b);
        }
    }
    else {
        std::cout << b;
        return;
    }
    if (add_to_lib) {
        lib.emplace_back(std::make_pair(bytes, "a"));
        add_to_lib = false;
        std::cout << lib[0].second;
    }
    else if (bytes == "const" || bytes == "var" || bytes == "let") {
        add_to_lib = true;
        std::cout << bytes;
        obfuscate(in, b);
    }
    else {
        std::cout << bytes << b;
    }

}