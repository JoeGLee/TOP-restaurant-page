import './style.css';
import {navbar, append} from './navbar.js'
import {homePage, backgroundIMG} from './home.js';
import {menu} from './menu.js';
import {about} from './about.js';

const content = document.querySelector('.content');
const nav = navbar();
const home = homePage();
const background = backgroundIMG();
const menuItems = menu();
const aboutPage = about();

append(nav);
append(background);
append(home);

const menuBtn = document.querySelector('#menu');
menuBtn.addEventListener('click', ()=>{
    const div = content.lastChild;
    if(div === home)
    {
    content.removeChild(div);
    content.removeChild(background);
    append(menuItems);
    }
    else if(div === aboutPage)
    {
        content.removeChild(div);
        append(menuItems);
    }

})


const homeBtn = document.querySelector('#home');
homeBtn.addEventListener('click', ()=>{
    const div = content.lastChild;
    if(div === menuItems)
    {
    content.removeChild(div);
    append(background);
    append(home);
    }
    else if(div === aboutPage)
    {
        content.removeChild(div);
        append(background);
        append(home);
    }

})

const aboutBtn = document.querySelector('#about');
aboutBtn.addEventListener('click', ()=>{
    const div = content.lastChild;
    if(div === home)
    {
    content.removeChild(div);
    content.removeChild(background);
    append(aboutPage);
    }
    else if(div === menuItems)
    {
        content.removeChild(div);
        append(aboutPage);
    }

})