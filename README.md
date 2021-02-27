# Minifier  
This cli program is a file minifier written in c++. You can minify all sorts of file types.  
Eg. html, css, js, xml...  
  
## Compile and setup 
Linux:  
* sudo apt update && sudo apt install build-essential
* cd [path-to-minifier]
* g++ main.cpp -std=gnu++17 -lstdc++fs -Wall -Ofast -o minifier  
* sudo ln -s \`pwd\`/minifier /usr/local/bin/minifier  
  
Windows:  
* Download and install MinGW  
* Type into windows search-box "run terminal"  
* cd [path-to-minifier]  
* g++ main.cpp -std=gnu++17 -lstdc++fs -Wall -Ofast -o minifier.exe
* path=%cd%;%path%
  
## Usage  
### Arguments  
Give this program as an argument the filename you want to minify.  
Output filename is optional. If it's not specified, output will be printed to stdout.  
So you can also pipe output to other programs, cgicc for example.  
  
### Options  
-h  Help  
-v  Version info  
-i  Input filename  
-o  Output filename  
-w  Change output file acces mode to overwrite. Default mode is append.  
-t  Log results after minify. (time & compression)  
  
### Example  
minifier -i bigAssFile.js -to bigAssFile.min.js  
  
### Benchmark  
+500kB bigAssFile.js minification took 33ms  
  
### Notes  
By minify, it means that it properly removes whitespaces, tabs, etc. and also comments.  
After minify, javaScript parsers automatic semicolon insertion won't work anymore.  
