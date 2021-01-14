# Minifier  
This cli program is a file minifier written in c++. You can minify all sorts of file types.  
Eg. html, css, js, xml...  
  
## Compile and setup 
g++ main.cpp -o minifier  
sudo ln -s [path_to_your_dir]/minifier /usr/local/bin/minifier  
  
## Arguments  
Give this program as an argument the filename you want to minify.  
Second argument is optional, it's the name of the output file.  
If it's not specified, output will be printed to stdout.  
So you can also pipe output to other programs, cgi for example.  
  
## Example usage  
minifier bigAssFile.js bigAssFile.min.js  

## Benchmark  
500kB benchmark.js minification took 45ms
