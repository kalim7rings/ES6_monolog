let mix = require('laravel-mix');

mix.js([
    //'resources/assets/web/common.js',    
    'src/pages/index.js',
], 'dest/js/index.js');