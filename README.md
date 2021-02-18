# Minifier  
This cli program is a file minifier written in c++. You can minify all sorts of file types.  
Eg. html, css, js, xml...  
  
## Compile and setup 
g++ main.cpp -o minifier  
sudo ln -s \`pwd\`/minifier /usr/local/bin/minifier  
  
## Example usage  
### Arguments  
Give this program as an argument the filename you want to minify.  
Second argument is optional, it's the name of the output file.  
If it's not specified, output will be printed to stdout.  
So you can also pipe output to other programs, cgicc for example.  
  
### Options
-h  Help  
-v  Version info  
-i  Input filename  
-o  Output filename, or if ommitted then output will be printed to stdout.  
-w  Change output file acces mode to overwrite. Default mode is append.  
-t  Timer log after minify.  
  
### Usage  
minifier -i bigAssFile.js -wto bigAssFile.min.js  
  
### Benchmark  
500kB benchmark.js minification took 38ms
