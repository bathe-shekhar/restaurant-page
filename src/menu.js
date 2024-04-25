import data from '../src/assets/data.json';

function showMenuContent() {

    // <div class="menu">
    //     <div class="menu-item">
    //         <div class="menu-item-img item1">
    //             <img src="../src/assets/strawberry.jpeg">
    //         </div>
    //         <div class="menu-item-description strawberry">
    //             <ul>
    //                 <li>1</li>
    //                 <li>1</li>
    //             </ul>
    //         </div>
    //     </div>
    //     <div class="menu-item">
    //         <div class="menu-item-img item2">
    //             <img src="../src/assets/pineapple.jpeg">
    //         </div>
    //         <div class="menu-item-description pineapple">
    //             <ul>
    //                 <li>1</li>
    //                 <li>1</li>
    //             </ul>
    //         </div>
    //     </div>
    //     <div class="menu-item">
    //         <div class="menu-item-img item3">
    //             <img src="../src/assets/kiwi.jpeg">
    //         </div>
    //         <div class="menu-item-description kiwi">
    //             <ul>
    //                 <li>1</li>
    //                 <li>1</li>
    //             </ul>
    //         </div>
    //     </div>
    // </div>

    console.log("data: ", data);

    let count = 1;
    const menu = document.createElement('div');
    menu.className = 'menu';


    data.items.forEach(item => {
        console.log("title: ", item.title);
        console.log("desc: ", item.description);


        const menuItem = document.createElement('div');
        menuItem.className = "menu-item";

        const menuItemImage = document.createElement('div');
        let classlist = `menu-item-img item${count}`
        menuItemImage.classList = classlist;

        const menuImg = new Image();
        menuImg.src = item.image;

        const menuDescription = document.createElement('div');

        if (count == 1)
            menuDescription.className = "menu-item-description strawberry";
        if (count == 2)
            menuDescription.className = "menu-item-description pineapple";
        if (count == 3)
            menuDescription.className = "menu-item-description kiwi";

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


