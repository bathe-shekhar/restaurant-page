import Banner from './assets/banner.jpg';

function showHomeContents() {

    // const content = document.querySelector('#content');
    const banner = document.createElement('div');
    banner.className = 'banner';
    const bannerImage = new Image();
    bannerImage.src = Banner;

    const homeContent = document.createElement('div');
    homeContent.className = 'home-content';
    homeContent.innerHTML = " Revitalize your senses, one sip at a time.<br> Discover a smoothie sensation like no other.<br> Bliss in every sip."

    banner.appendChild(bannerImage);
    content.appendChild(banner);
    content.appendChild(homeContent);

}

export default showHomeContents;