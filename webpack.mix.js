const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   // Generic
   .sass('resources/sass/app.scss', 'public/css')

   .vue({
      version: 3
    }
);
