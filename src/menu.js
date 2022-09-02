const itemsFactory = (dish, ingredients, price) => {
    return {dish, ingredients, price};
}

const menu = () => {
    const items = [];
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('menuTitle');
    menuTitle.textContent = 'Menu';
    menu.appendChild(menuTitle);


    menu.classList.add('menu');
    for(let i = 0; i < 6; i++)
    {
    items[i] = itemsFactory('Wok Food', 'wok, fire, noodle, bean sprout, sauce', '$15');
    }

    items.forEach(item => {
        const itemContainer= document.createElement('div');
        itemContainer.classList.add('items');
        
        const itemTitle = document.createElement('h1');
        itemTitle.classList.add('.itemTitle');
        itemTitle.textContent = item.dish;
        itemContainer.appendChild(itemTitle);

        const itemIngredients = document.createElement('p');
        itemIngredients.classList.add('.itemIngredients');
        itemIngredients.textContent = item.ingredients;
        itemContainer.appendChild(itemIngredients);

        const itemPrice = document.createElement('h3');
        itemPrice.classList.add('.itemPrice');
        itemPrice.textContent = item.price;
        itemContainer.appendChild(itemPrice);

        menu.appendChild(itemContainer);
    })

    return menu;
}

export{
    menu
}