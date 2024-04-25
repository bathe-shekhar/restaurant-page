import data from '../src/assets/data.json';
import Strawberry from '../src/assets/strawberry.jpeg';
import Pineapple from '../src/assets/pineapple.jpeg';
import Kiwi from '../src/assets/kiwi.jpeg';

function showMenuContent() {


    console.log("data: ", data);

    let count = 1;
    const menu = document.createElement('div');
    menu.className = 'menu';

    const strawberryImage = new Image();
    strawberryImage.src = Strawberry;

    const pineappleImage = new Image();
    pineappleImage.src = Pineapple;

    const kiwiImage = new Image();
    kiwiImage.src = Kiwi;

    data.items.forEach(item => {
        console.log("title: ", item.title);
        console.log("desc: ", item.description);


        const menuItem = document.createElement('div');
        menuItem.className = "menu-item";

        const menuItemImage = document.createElement('div');
        let classlist = `menu-item-img item${count}`
        menuItemImage.classList = classlist;

        const menuImg = new Image();
        // menuImg.src = item.image;

        const menuDescription = document.createElement('div');

        if (count == 1) {
            menuDescription.className = "menu-item-description strawberry";
            menuImg.src = strawberryImage;
        }
        if (count == 2) {
            menuDescription.className = "menu-item-description pineapple";
            menuImg.src = pineappleImage;
        }
        if (count == 3) {
            menuDescription.className = "menu-item-description kiwi";
            menuImg.src = kiwiImage;
        }
        const menuItemTitle = document.createElement('div');
        menuItemTitle.className = "menu-title";
        menuItemTitle.innerHTML = item.title;

        const menuItemBenefits = document.createElement('ul');
        menuItemBenefits.className = "menu-item-benefits";

        const benefits = item.description.split(",");
        console.log(benefits);

        benefits.forEach(benefit => {
            const liItem = document.createElement('li');
            liItem.innerHTML = benefit;
            menuItemBenefits.appendChild(liItem);
        })

        menuDescription.appendChild(menuItemTitle);
        menuDescription.appendChild(menuItemBenefits);

        menuItemImage.appendChild(menuImg);

        menuItem.appendChild(menuItemImage);
        menuItem.appendChild(menuDescription);

        menu.appendChild(menuItem);
        count++;
    });





    content.appendChild(menu)
}

export default showMenuContent;


