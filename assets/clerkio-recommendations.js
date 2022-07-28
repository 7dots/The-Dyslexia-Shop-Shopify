//This script checks the amount of items in clekio recommendations carousels and removes forward and back btns if there is only one page

window.addEventListener('load', (event) => {
    clerkioWrappers = document.querySelectorAll('.js-clerkio-recommendations')

    clerkioWrappers.forEach(element => {

    clerkioSlider = element.querySelector('.clerk-slider')
    forwardBtn = element.querySelector('.clerk-slider-nav-next')
    backBtn = element.querySelector('.clerk-slider-nav-prev')
    clerkioSlider = element.querySelector('.clerk-slider')
    clerkioSliderItems = clerkioSlider.querySelectorAll('.clerk-slider-item')

    ButtonCountCheck()
    // setHeightMax()

    function ButtonCountCheck(){
        const itemPerSlide = 4;
        const itemCount = clerkioSlider.children.length

        //+2 is there because forward and backwards btns are in the .clerk-slider  
        if(itemCount < itemPerSlide + 3){
            forwardBtn.remove()
            backBtn.remove()
        }
    }

    function setHeightMax(){
        let itemHeight = 0
        console.log(clerkioSliderItems)
        clerkioSliderItems.forEach(e => {
            if (e.clientHeight > itemHeight){
                itemHeight = e.clientHeight
                console.log('true')
            }
        })

        clerkioSliderItems.forEach(e => {
            e.style.height = itemHeight+'px';
        })
    }
    });
});

