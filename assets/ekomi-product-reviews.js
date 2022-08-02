/**
 * Ekomi product reviews API
 * Retrieve and display product reviews from Ekomi
 * @author Jon Warde 7dots.co.uk
 * @type {{redirect: string, method: string}}
 */
const getEkomiProductReviews = () => {

    const reviewsHolder = document.getElementById('ekomi-product-reviews');
    const productSKU = reviewsHolder.getAttribute('data-sku');
    const baseCredentials = {
        // Use app proxy to avoid cors issues
        ekomiApi:'http://api.allorigins.win/get?url=http://api.ekomi.de/get_productfeedback.php',
        apiid: '52635',
        apiPass: '7918dcccc263ae30ca8f2aa0d'
    }

    const productHasReviews = (reviews) => {
        let json = JSON.parse(reviews);
        if(json['contents'] != ""){
            return true;
        }
        return false;
    }

    const santitiseString = (review) => {
        if(review){
            let _review;
            _review = review.replace('\\n', '');
            let __review;
            __review = _review.replace('\\', '');
            let ___review;
            ___review = __review.replace('\\"', '');
            let ____review;
            ____review = ___review.replace('"', '');
            return ____review;
        }
    }

    const displayTabs = () => {
        return document.querySelector('.product-review__tabs-list').classList.add('-show-tabs');
    }

    const getArrayFromResults = (result) => {
        let hasReviews = productHasReviews(result);
        // Results come back as a single string - not json (not ideal) ... which needs to be split into a managable array.
        // String has comma seperated [timestamp, product code, sku code, text review]
        let productCodes = /[0-9]+[,][0-9]+[,][A-Za-z0-9-]+[,]/g;
        const resultAsArr = result.split(productCodes);
        // save up out markup to spit on the page
        var reviewsMarkup = '<ul>';
        resultAsArr.forEach((r, i) => {
            // split rating from review
            let _rating = r.split(',');
            let review = santitiseString(_rating[1]);
            //console.log('FIRST: '+ _rating[0] + ' SECOND: ' + _rating[1]);
            if(_rating[0] != '' && _rating[1] != '') {
                let customerReview = `<li><span class="ekomi-review__stars stars-sm stars-sm-${_rating[0]}"></span><div><span>${review}</span></div></li>`;
                console.log('review: ', i);
                if(i != 0){
                    reviewsMarkup += customerReview;
                }

            }
        })
        console.log('product has Ekomi reviews ', hasReviews)

        if(hasReviews){
            addReview()
            displayTabs()
        }

        function addReview(){
            // Add reviews to the page
            if (hasReviews) {
                // display reviews in tab
                reviewsHolder.innerHTML = reviewsMarkup + '</ul>';
            } else {
                let customerReview = `<li class="ekomi-produc-review__placeholder">There aren't any reviews for this product yet!</li>`;
                reviewsMarkup += customerReview;
                reviewsHolder.innerHTML = reviewsMarkup + '</ul>';
            }
        }
    }

        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('http://api.ekomi.de/get_productfeedback.php?interface_id='+baseCredentials.apiid+'&interface_pw='+baseCredentials.apiPass+'&type=csv&product=' + productSKU)}`)
        .then(response => response.text())
        .then(result => getArrayFromResults(result))
        .catch(error => console.log('error', error));

}
getEkomiProductReviews()