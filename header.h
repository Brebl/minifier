#include <iostream>
#include <fstream>
#include <sstream>
#include <cctype>
#include <limits>
#include <chrono>
#include <vector>
#include <filesystem>
#include <string>
#if __GNUC__ < 8
#warning Your compiler seems a bit outdated
#endif
#ifdef __GNUC__
#include <unistd.h> //getopt
#endif
#define MAX std::numeric_limits<std::streamsize>::max()

using BYTE = char;

void obfuscate(std::ifstream&, BYTE b);