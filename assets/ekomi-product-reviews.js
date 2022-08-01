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
        ekomiApi:'https://api.ekomi.de/get_productfeedback.php',
        apiid: '52635',
        apiPass: '7918dcccc263ae30ca8f2aa0d'
    }
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    const baseEndPoint = baseCredentials.ekomiApi + '?interface_id=' + baseCredentials.apiid + '&interface_pw=' + baseCredentials.apiPass + '&type=csv&product=';


    const productHasReviews = (reviews) => {
        return (reviews.length > 0) ? true : false;
    }

    const getArrayFromResults = (result) => {
        let hasReviews = productHasReviews(result);
        // Results come back as a single string - not json (not ideal) ... which needs to be split into a managable array.
        // String has comma seperated [timestamp, product code, sku code, text review]
        let productCodes = /[0-9]+[,][0-9]+[,][A-Za-z0-9-]+[,]/g;
        const resultAsArr = result.split(productCodes);
        // save up out markup to spit on the page
        var reviewsMarkup = '<ul>';
        resultAsArr.forEach((r) => {
            // split rating from review
            let _rating = r.split(',');
            //console.log('FIRST: '+ _rating[0] + ' SECOND: ' + _rating[1]);
            if(_rating[0] != '' && _rating[1] != '') {
                let customerReview = `<li><span class="stars-sm stars-sm-${_rating[0]}"></span><div><span>${_rating[1]}</span></div></li>`;
                reviewsMarkup += customerReview;
            }
        })
        console.log('product has Ekomi reviews ', hasReviews)
        // Add reviews to the page
        if (hasReviews) {
            // display reviews in tab
            reviewsHolder.innerHTML = reviewsMarkup + '</ul>';
        }
    }

    fetch(baseEndPoint + productSKU, requestOptions)
        .then(response => response.text())
        .then(result => getArrayFromResults(result))
        .catch(error => console.log('error', error));

}
getEkomiProductReviews()