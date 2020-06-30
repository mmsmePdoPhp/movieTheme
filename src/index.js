import _ from 'lodash';

// js files
import printMe from './print.js';
import jqeury from 'jquery/src/jquery.js'

require ('bootstrap/dist/js/bootstrap');
import './style.css';
import './style.scss';

import Selena from './images/women.jpg';
import { bootstrap } from 'bootstrap/scss/bootstrap.scss';

function component() {
    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    const element = document.createElement('div');
    const paragraph = document.createElement('p');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['سلام چونی برا گیان خوشی شکر  ', 'webpack'], ' ');
    paragraph.innerText = "سریف, طراحان ایرانی, عناوین سینما و تلویزیون, فونت اردو, فونت تیتر, فونت رایگان, فونت عربی, فونت کردی, فونت متن, فونت مطبوعاتی, فونت معاصر و مدرن, فونت موبایل و‌ اپلیکیشن, فونت وب, نشر رومیزی.";
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Selena;

   element.appendChild(paragraph)
   element.appendChild(myIcon)
   element.appendChild(btn)

    return element;
  }

  document.body.appendChild(component());
