const injectCustomCss = () => {
    if (document.readyState === 'complete') {
        const widgetContainer = document.querySelector('#feefo-product-review-widgetId')
        if (widgetContainer) {
            const shadowRootElem = widgetContainer.shadowRoot.querySelector('.on-page-container')
            const injectedCss = document.createElement('style')
            if (shadowRootElem) {
                shadowRootElem.appendChild(injectedCss)
                injectedCss.innerHTML = `
                    .on-page-container {
                      padding: 0!important;
                      background-color: #eeeeee!important;
                    }
                    .feefo-select-button {
                      background-color: #eeeeee!important;
                    }
                    .feefo-select-button-icon {
                      display: none;
                    }
                `
            }
            const reviewsContainer =  widgetContainer.shadowRoot.querySelector('[data-testid="event-tracker-wrapper"]')
            if (reviewsContainer.innerHTML === '') {
                const reviewsTabBtn = document.querySelector('.reviews-tab-btn')
                reviewsTabBtn.classList.add('visually-hidden')
            }
        }
    }
}

const scrollToReviews = () => {
    const starsContainer = document.querySelector('.feefo-review-badge-wrapper-product')
    if (starsContainer) {
        const stars = starsContainer.shadowRoot.querySelector('.summary-rating')
        const reviewsTabBtn = document.querySelector('.reviews-tab-btn')
        if (stars) {
            stars.addEventListener('click', e => {
                reviewsTabBtn.click()
            })
        }
    }
}

setTimeout(function () {
    injectCustomCss()
    scrollToReviews()
}, 2000)