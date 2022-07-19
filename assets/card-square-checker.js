class cardChecker {
    constructor(className){
          this.cardImages = document.querySelectorAll(className)  
    }
    /* 
    * Compare if square and adds '-apply-square' class to class list if true
    */
    applyImageSquare(){
        this.cardImages.forEach((cardImage) => {
               if (cardImage.naturalHeight == cardImage.naturalWidth){
                cardImage.classList.add('-apply-square')
            }
        })
    }
}


window.addEventListener('load', (event) => {
    let productCard = new cardChecker('.card-product__image');
    productCard.applyImageSquare();
});