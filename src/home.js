import background from './background.jpg';

const homePage = () => {
    const home = document.createElement('div');
    home.classList.add('home');//creates a container for information on the home page

    const homeTitle = document.createElement('h1');
    homeTitle.classList.add('homeTitle');
    homeTitle.textContent = 'Hello welcome to Wok Cooking';
    home.appendChild(homeTitle);//appends the title to home container 

    const homeAbout = document.createElement('p');
    homeAbout.classList.add('homeAbout');
    homeAbout.textContent = 'We cook with woks for the flavor of fire! Come enjoy our food';
    home.appendChild(homeAbout);//creates a about page for the website

    const location = document.createElement('p');
    location.classList.add('address');
    location.textContent = 'Address: 132 Dogwood Court Wellington, FL 33414';
    home.appendChild(location);

    const open = document.createElement('p');
    open.classList.add('open');
    open.textContent = 'Open: 7 days a week 24 hours a day';
    home.appendChild(open);
    return home;
}

const backgroundIMG = () => {
    const img = document.createElement('img');
    img.src = background;

    return img;
}

export{
    homePage,
    backgroundIMG
}