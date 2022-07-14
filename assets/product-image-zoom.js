const magnifyingAreas = document.getElementsByClassName('product__media-item')
const magnifyingImgs = document.getElementsByClassName('product__media-img')

console.log('ello')
console.log(magnifyingImgs)
console.log(magnifyingAreas)

console.log(magnifyingAreas[0]) 
console.log(magnifyingImgs[0])


magnifyingAreas[0].addEventListener("mousemove", function(e){
    console.log('ello')

    clientX = e.clientX - magnifyingAreas[0].offsetLeft;
    clientY = e.clientY - magnifyingAreas[0].offsetTop;
    
    mWidth = magnifyingAreas[0].offsetWidth;
    mHeight = magnifyingAreas[0].offsetHeight
    
    clientX = clientX / mWidth * 100
    clientY = clientY / mHeight * 100
    
    console.log(clientX)
    console.log(clientY)

    magnifyingImgs[0].style.transform = `translate(-${clientX}%, -${clientY}%) scale(3)`
})

magnifyingAreas[0].addEventListener("mouseleave", function() {
    console.log('mouseleave')
    magnifyingImgs[0].style.transform = 'translate(0) scale(1)'
})
