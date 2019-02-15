import $ from 'jquery';
import {cityArr, city} from '../global/city';

import country2 from '../global/country';

import * as Utilities from '../global/Utiliites';
//import {foo, cube} from '../global/Utiliites';

export default(function(){
    $(document).ready(function(){

        console.log( city() );
        console.log( cityArr );
        $('h4').html( city );
        console.log(country2());
        getCube();
    });

    function getCube() {
        //console.log(cube(3));
        //console.log(foo);

         // ---- OR ---------
        console.log(Utilities.cube(4));
        console.log(Utilities.foo);
        console.log(Utilities.graph);
    }
})();