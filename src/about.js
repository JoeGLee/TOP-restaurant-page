import map from './map.png';

const about = () => {
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about');

    const aboutTitle = document.createElement('h1');
    aboutTitle.classList.add('aboutTitle');
    aboutTitle.textContent = 'About Us';
    aboutContainer.appendChild(aboutTitle);

    const aboutInfoTitle = document.createElement('h2');
    aboutInfoTitle.classList.add('aboutInfoTitle');
    aboutInfoTitle.textContent = 'We Put The Ok in Wok';
    aboutContainer.appendChild(aboutInfoTitle);

    const aboutInfo = document.createElement('p');
    aboutInfo.classList.add('aboutInfo');
    aboutInfo.textContent = 'Started in 1500s we cook okay food in our woks. Come taste how mediocre our food really is!';
    aboutContainer.appendChild(aboutInfo);

    const aboutHours = document.createElement('p');
    aboutHours.classList.add('aboutHours');
    aboutHours.textContent = 'Open: 7 days a week for 24 hours';
    aboutContainer.appendChild(aboutHours);

    const aboutLocation = document.createElement('p');
    aboutLocation.classList.add('aboutLocation');
    aboutLocation.textContent = 'Address: 132 Dogwood Court Wellington, FL 33414';
    aboutContainer.appendChild(aboutLocation);

    const aboutMap = document.createElement('img');
    aboutMap.src = map;
    aboutMap.classList.add('map');
    aboutContainer.appendChild(aboutMap);

    return aboutContainer;
}

export{about}