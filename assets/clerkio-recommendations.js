//This script checks the amount of items in clekio recommendations carousels and removes forward and back btns if there is only one page

window.addEventListener('load', (event) => {
    clerkioWrappers = document.querySelectorAll('.js-clerkio-recommendations')
    clerkioWrappers.forEach(element => {
        clerkioSlider = element.querySelector('.clerk-slider')
        forwardBtn = element.querySelector('.clerk-slider-nav-next')
        backBtn = element.querySelector('.clerk-slider-nav-prev')

        const itemPerSlide = 4;

        const itemCount = clerkioSlider.children.length

        //+2 is there because forward and backwards btns are in the .clerk-slider  
        if(itemCount < itemPerSlide + 3){
            forwardBtn.remove()
            backBtn.remove()
        }
    });
});