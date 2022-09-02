const navbar = () => {
    const nav = document.createElement('nav');
    nav.classList.add('navbar');//creates container for navbar

    const navTitle = document.createElement('h1');
    navTitle.classList.add('navTitle');
    navTitle.textContent = 'Wok Cooking'
    nav.appendChild(navTitle); // creates the title of website and appends to navbar

    const navBtns = document.createElement('ul');
    navBtns.classList.add('navBtns');
    nav.appendChild(navBtns);//creates a container for buttons

    const homeBtn = document.createElement('button');
    const homecontainer = document.createElement('li');
    homecontainer.classList.add('btn');
    homeBtn.setAttribute('id', 'home');
    homeBtn.classList.add('navBtn');
    homeBtn.textContent = 'Home';
    homecontainer.appendChild(homeBtn);
    navBtns.appendChild(homecontainer);


    const menuBtn = document.createElement('button');
    const menuContainer = document.createElement('li');
    menuContainer.classList.add('btn');
    menuBtn.setAttribute('id', 'menu');
    menuBtn.classList.add('navBtn');
    menuBtn.textContent = 'Menu';
    menuContainer.appendChild(menuBtn);
    navBtns.appendChild(menuContainer);


    const aboutBtn = document.createElement('button');
    const aboutContainer = document.createElement('li');
    aboutContainer.classList.add('btn');
    aboutBtn.setAttribute('id', 'about');
    aboutBtn.classList.add('navBtn');
    aboutBtn.textContent = 'About';
    aboutContainer.appendChild(aboutBtn);
    navBtns.appendChild(aboutContainer);//creates buttons for each sections of the website and lets the user navigate through them

    return nav;
}
const append = (div) => {
    const content = document.querySelector('.content');
    content.appendChild(div);
}

export{
    navbar,
    append
}