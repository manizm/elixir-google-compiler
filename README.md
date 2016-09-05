# Elixir Closure Compiler

This is an extension for Laravel Elixir, integrating Google's Closure Compiler.

## Installation

`npm install --save elixir-google-compiler`

## Usage

``` javascript
var elixir = require('laravel-elixir');
require('elixir-google-compiler');  
    
elixir(function(mix) {
    mix.compile('path/to/file.js', 'dest/folder', {
        compilationLevel: 'SIMPLE',
        warningLevel: 'VERBOSE',
        jsOutputFile: 'output.min.js'
        // Even more options
    });
});
```

## Options

The options that can be supplied to the compiler are the same as [Google's Compiler](https://github.com/google/closure-compiler-js#flags).