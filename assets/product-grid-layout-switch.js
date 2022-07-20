const productGridLayoutSwitch = () => {
    const productGrid = document.getElementById('product-grid')
    const productGridLayoutSwitch = document.querySelector('.product-grid-layout-switch');
    if(!productGrid && productGridLayoutSwitch){
        return;
    }
    productGridLayoutSwitch.addEventListener('click', () => {
        productGrid.classList.toggle('--layout-list')
        productGridLayoutSwitch.classList.toggle('--list')
    })
}
productGridLayoutSwitch()

