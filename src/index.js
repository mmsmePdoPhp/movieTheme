import _ from 'lodash';

// js files
import printMe from './print.js';
import jquery from 'jquery/src/jquery.js';

// import popperjs from '@popperjs/core/dist/cjs/popper.js'
// import hi from  ('bootstrap/dist/js/bootstrap.js');
// console.log(hi)

import './style.css';
import './style.scss';

// import Selena from './images/women.jpg';
import 'bootstrap';


// toogle show category movies home page
$(document).ready(function(){
    // start toggle list category movies start
    $('.movie-toggler').click(function(){
        $('.movie-toggle').toggle("slow");
        $('.movie-plus').toggle();
        $('.movie-negative').toggle();
        
    })
    // end toggle list categoy serials end
    
    // toogle show category serials home page
    $('.serial-toggler').click(function(){
        $('.serial-toggle').toggle("slow");
        $('.serial-plus').toggle();
        $('.serial-negative').toggle();
        
    })

})//end document ready

