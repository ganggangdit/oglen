module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ['dist/*'],

        copy: {
            main: {
                files: [
                    // index
                    {src: 'client/index.html', dest: 'dist/index.html'},
                    {src: 'client/404.html', dest: 'dist/404.html'},
                    {src: 'client/robots.txt', dest: 'dist/robots.txt'},
                    {src: 'client/lib/html5shiv/dist/html5shiv.min.js', dest: 'dist/lib/html5shiv/dist/html5shiv.min.js'},
                    {src: 'client/lib/respond/dest/respond.min.js', dest: 'dist/lib/respond/dest/respond.min.js'},
                    // writer
                    {src: 'client/writer/index.html', dest: 'dist/writer/index.html'},
                    {src: 'client/writer/config.js', dest: 'dist/writer/config.js'},
                    {src: 'client/writer/css/all.css', dest: 'dist/writer/css/all.css'},
                    {expand: true, flatten: true, src: ['client/writer/app/views/*'], dest: 'dist/writer/app/views/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['client/writer/app/templates/*'], dest: 'dist/writer/app/templates/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['client/writer/images/*'], dest: 'dist/writer/images/*', filter: 'isFile'},
                    // blog
                    {src: 'client/blog/index.html', dest: 'dist/blog/index.html'},
                    {src: 'client/blog/config.js', dest: 'dist/blog/config.js'},
                    {src: 'client/blog/css/all.css', dest: 'dist/blog/css/all.css'},
                    {expand: true, flatten: true, src: ['client/blog/app/views/*'], dest: 'dist/blog/app/views/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['client/blog/app/templates/*'], dest: 'dist/blog/app/templates/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['client/blog/images/*'], dest: 'dist/blog/images/*', filter: 'isFile'}
                ]
            }
        },

        cssmin: {
            combine: {
                files: {
                    'dist/writer/css/main.css': ['client/writer/css/main.css'],
                    'dist/blog/css/main.css': ['client/blog/css/main.css']
                }
            }
        },

        jshint: {
            files: ['*.js', 'server/**/*.js', 'client/writer/*.js', 'client/writer/app/**/*.js'],
            options: {
                force: false,
                reporter: './test/jshint_reporter.js',
                asi: false,
//                bitwise: false, //如果为真，JSHint会禁用位运算符 Javascript允许位运算，但是他却没有整型，位运算符要把参与运算的数字从浮点数变为整数，并在运算后再转换回来。这样他们的效率就不如在别的语言中那么高。
//                boss: false, //如果为真，那么JSHint会允许在if，for，while里面编写赋值语句。 一般来说，我们会在循环、判断等语句中加入值的比较来做语句的运行条件，有时候会把==错写成赋值的=，通常，JSHint会把这个认定为一个错误，但是开启这个选项的化，JSHint就不会检查判断条件中的赋值 ，你是boss，你说的算。
//                curly: false, //如果为真，JSHint会要求你在使用if和while等结构语句时加上{}来明确代码块。 Javascript允许在if等结构语句体只有一句的情况下不加括号。不过这样做可能会让你的代码读起来有些晦涩。
//                debug: false, //如果为真，JSHint会允许代码中出现debugger的语句。不过建议你最好在检测代码前去掉debug的语句。
                eqeqeq: true, //如果为真，JSHint会看你在代码中是否都用了===或者是!==，而不是使用==和!=。 我们建议你在比较0，''(空字符)，undefined，null，false和true的时候使用===和!===。
//                eqnull: true, //如果为真，JSHint会允许使用'== null'作比较。 == null 通常用来判断一个变量是undefined或者是null（当时用==，null和undefined都会转化为false）。
//                evil: false, //如果为真，JSHint会允许使用eval eval提供了访问Javascript编译器的途径，这有时很有用，但是同时也对你的代码形成了注入攻击的危险，并且会对debug造成一些困难。 记住，Function构造函数也是另一个‘eval’，另外，当传入的参数是字符串的时候，setTimeout和setInterval也会类似于eval。
//                forin: true, //如果为真，那么，JSHint允许在for in 循环里面不出现hasOwnProperty， for in循环一般用来遍历一个对象的属性，这其中也包括他继承自原型链的属性，而hasOwnProperty可以来判断一个属性是否是对象本身的属性而不是继承得来的。
//                immed: true, //如果为真，JSHint要求匿名函数的调用如下：(function(){ // }());而不是(function(){ //bla bla })();
//                laxbreak: false, //如果为真，JSHint则不会检查换行。 Javascript会通过自动补充分号来修正一些错误，因此这个选项可以检查一些潜在的问题。
//                newcap: true, //如果为真，JSHint会要求每一个构造函数名都要大写字母开头。 构造器是一种使用new运算符来创建对象的一种函数，new操作符会创建新的对象，并建立这个对象自己的this，一个构造函数如果不用new运算符来运行，那么他的this会指向全局对象而导致一些问题的发生。
//                noarg: true, //如果为真，JSHint会禁止arguments.caller和arguments.callee的使用 arguments对象是一个类数组的对象，它具有一个索引值。arguments.callee指向当前执行的函数（这个在ES5的严格模式中被禁用了），而arguments.caller指向调用当前函数的函数（如果有的话），并且，他并不是在所有的Javascript实现里面都有。
//                noempty: false, //如果为真，JSHint会禁止出现空的代码块（没有语句的代码块）。
//                nomen: false, //如果为真，JSHint会禁用下划线的变量名。 很多人使用_name的方式来命名他们的变量，以说明这是一个私有变量，但实际上，并不是，下划线只是做了一个标识。 如果要使用私有变量，可以使用闭包来实现。
//                onevar: false, //如果为真，JSHint期望函数只被var的形式声明一遍。
//                passfail: false, //如果为真，JSHint会在发现首个错误后停止检查。
//                plusplus: false, //如果为真，JSHint会禁用自增运算和自减运算 ++和--可能会带来一些代码的阅读上的困惑。
//                regexp: true, //如果为真，JSHint会不允许使用.和[^...]的正则， 因为这样的正则往往会匹配到你不期望的内容，并可能会应用造成一些危害。
//                undef: false, //如果为真，JSHint会要求所有的非全局变量，在使用前都被声明。 如果你不在一个本地作用域内使用var的方式来声明变量，Javascript会把它放到全局作用域下面。这样会很容易引起错误。
//                sub: true, //如果为真，JSHint会允许各种形式的下标来访问对象。 通常，JSHint希望你只是用点运算符来读取对象的属性（除非这个属性名是一个保留字），如果你不希望这样可以关闭这个选项。
                strict: true //如果为真，JSHint会要求你使用use strict;语法。 Strict 模式是ES5里面的一个新特性，他允许你把一个程序或者函数放在一个“严格”的作用域中。
//                camelcase: true, //此选项允许你强制所有变量名以使用驼峰风格或UPPER_CASE用下划线。
//                freeze: true, //此选项禁止覆盖如数组，日期等原生对象的原型 。
//                indent: false, //此选项强制执行特定的标签宽度为您的代码。
//                quotmark: 'single', //It accepts three values: true if you don't want to enforce one particular style but want some consistency, 'single' if you want to allow only single quotes and 'double' if you want to allow only double quotes.
//                unused: true, //This option warns when you define and never use your variables.
//                white: true //如果为true，JSHint会依据严格的空白规范检查你的代码。
            }
        },

        less: {
            development: {
                files: {
                    'client/writer/css/writer.css': 'client/writer/less/writer.less',
                    'client/blog/css/blog.css': 'client/blog/less/blog.less'
                }
            }
        },

        uglify: {
            build: {
                files: {
                    'dist/lib/requirejs/require.js': ['client/lib/requirejs/require.js']
                }
            },
            options: {
                preserveComments: false // false 'all' 'some'
            }
        },

        requirejs: {
            writer: {
                options: {
                    baseUrl: 'client/',
                    name: 'writer/init',
                    mainConfigFile: 'client/writer/build.js',
                    out: 'dist/writer/init.js'
                }
            },
            blog: {
                options: {
                    baseUrl: 'client/',
                    name: 'blog/init',
                    mainConfigFile: 'client/blog/build.js',
                    out: 'dist/blog/init.js'
                }
            },
            options: {
                findNestedDependencies: true,
                preserveLicenseComments: true,
                optimize: 'uglify2'
            }
        },

        watch: {
            less: {
                files: ['client/writer/less/*.less'],
                tasks: ['less']
            }
        },

        githooks: {
        },

        karma: {},

        shell: {
        },

        bower: {
            install: {
            }
        }
    });

    // Load npm tasks
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-githooks');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-shell');

    // Register grunt tasks
    grunt.registerTask('watching', ['watch:less']);
    grunt.registerTask('build', ['bower', 'clean', 'less', 'uglify', 'copy', 'cssmin', 'requirejs:writer', 'requirejs:blog']);
};