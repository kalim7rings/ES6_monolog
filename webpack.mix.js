let mix = require('laravel-mix');

/*mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false
    });

require('./resources/assets/mobile/app');
require('./resources/assets/web/app');
require('./resources/assets/web/post_sanction/app');
require('./resources/assets/web/eligibility/app');
*/

require('./src/app');

//mix.disableNotifications();

//mix.version();
