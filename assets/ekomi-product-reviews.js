/**
 * Ekomi product reviews API
 * Retrieve and display product reviews from Ekomi
 * @author Jon Warde 7dots.co.uk
 * @param string product_sku or 'all'
 * @type {{redirect: string, method: string}}
 */
const getEkomiProductReviews = ($product_sku) => {
    const baseCredentials = {
        ekomiApi:'https://api.ekomi.de/get_productfeedback.php',
        apiid: 'APIID',
        apiPass: 'APIPASS'
    }
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    const baseEndPoint = baseCredentials.ekomiApi + '?interface_id=' + baseCredentials.apiid + '&interface_pw=' + baseCredentials.apiPass + '&type=csv&product=';

    const getArrayFromResults = (result) => {

        // Results come back as a single string - not json (not ideal) ... which needs to be split into a managable array.
        // String has comma seperated [timestamp, product code, sku code, text review]
        let productCodes = /[0-9]+[,][0-9]+[,][A-Z0-9]+[,]/g;
        const resultAsArr = result.split(productCodes);
        // save up out markup to spit on the page
        var reviewsMarkup = '';
        resultAsArr.forEach((r) => {
            // split rating from review
            let _rating = r.split(',"');
            if(_rating[0] != '' && _rating[1] != '') {
                let customerReview = `<p>${_rating[0]}/5 stars <span>${_rating[1]}</span></p>`;
                reviewsMarkup += customerReview;
            }
        })
        // Add reviews to the page
        const reviewsHolder = document.getElementById('ekomi-product-reviews');
        reviewsHolder.innerHTML = reviewsMarkup;

    }

    fetch(baseEndPoint + $product_sku, requestOptions)
        .then(response => response.text())
        .then(result => getArrayFromResults(result))
        .catch(error => console.log('error', error));

}
getEkomiProductReviews('MS003')