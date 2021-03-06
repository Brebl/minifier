# Minifier  
This tool is a file minifier/bundler/obfuscator written in c++. You can minify all sorts of file types.  
Eg. html, css, js, xml...  
UTF-8 compatible  
  
## Compile and setup 
Linux:  
* sudo apt update && sudo apt install build-essential
* cd [path-to-minifier]
* g++ main.cpp obfuscate.cpp -std=gnu++17 -lstdc++fs -Wall -Ofast -o minifier  
* sudo ln -s \`pwd\`/minifier /usr/local/bin/minifier  
  
Windows:  
* Download and install MinGW  
* Type into windows search-box "run terminal"  
* cd [path-to-minifier]  
* g++ main.cpp obfuscate.cpp -std=gnu++17 -lstdc++fs -Wall -Ofast -o minifier  
* path=%cd%;%path%  
  
## Usage  
### Arguments  
Give this program as an argument the filename/-names you want to minify.  
If you have multiple files, they'll be bundled into single one.  
Output filename is optional. If it's not specified, output will be printed to stdout.  
  
### Options  
-h  Help  
-v  Version info  
-i  Input filename  
-o  Output filename  
-w  Change output file acces mode to overwrite. Default mode is append.  
-t  Log results after minify. (time & compression)  
-f  Obfuscate javascript variables  
  
### Example  
minifier -i bigAssFile.js -wtf -o bigAssFile.min.js  
  
### Benchmark  
+500kB bigAssFile.js minification took 33ms  
@Intel® Core™ i5 CPU M 520 @ 2.40GHz × 4, Debian GNU/Linux10 64-bit
  
### Notes  
By minify, it means that it properly removes whitespaces, tabs, etc. and also comments.  
After minify, javaScript parsers automatic semicolon insertion won't work anymore.  
