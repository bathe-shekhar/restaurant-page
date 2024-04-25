import Banner from "./assets/banner.jpg";

function showAboutContent() {

    const aboutSection = document.createElement('div');
    aboutSection.className = "about-section";

    const aboutTitle = document.createElement('div');
    aboutTitle.className = "about-title";
    aboutTitle.innerText = "About Us"

    aboutSection.appendChild(aboutTitle);

    const aboutDesc = document.createElement('div');
    aboutDesc.className = "about-description";

    const aboutImage = document.createElement('div');
    aboutImage.className = "about-image";

    const bannerImage = new Image();
    bannerImage.src = Banner;

    aboutImage.appendChild(bannerImage);

    const aboutInfo = document.createElement('div');
    aboutInfo.className = "about-info";
    aboutInfo.innerHTML = "Revitalize your senses, one sip at a time. Discover a smoothie sensation like no other. Bliss in every sip.<br>A smoothie is a beverage made by puréeing ingredients in a blender. A smoothie commonly has a liquid base, such as fruit juice or milk, yogurt or ice cream. Other ingredients may be added, including fruits, vegetables, non-dairy milk, crushed ice, whey powder or nutritional supplements.<br>Smoothies can help you lose excess body weight without skipping any meals. The fruits and berries that are used to prepare these drinks serve as excellent companions for keeping you healthy and feeling cooler on a hot summer morning.";

    aboutDesc.appendChild(aboutImage);
    aboutDesc.appendChild(aboutInfo);

    aboutSection.appendChild(aboutDesc);

    content.appendChild(aboutSection);

}

export default showAboutContent;