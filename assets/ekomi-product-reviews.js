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

        if(!hasReviews){
            return
        }

        // Results come back as a single string - not json (not ideal) ... which needs to be split into a managable array.
        // String has comma seperated [timestamp, product code, sku code, text review]
        let productCodes = /[0-9]+[,][0-9]+[,][A-Za-z0-9-]+[,]/g;
        const resultAsArr = result.split(productCodes);

        // DEAL WITH DATES
        const resultDatesAsArr = result.match(productCodes);
        //console.log('DATES ', resultDatesAsArr);
        const resultDatesTrimmed = resultDatesAsArr.map((el) => {
            let date = /[,][0-9]+[,][A-Za-z0-9-]+[,]/g;
            return el.split(date);
        })
        const resultDatesFormatted = (el) => {
            //console.log('RESULT FORMATTED ', el);
            var options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(el * 1000).toLocaleString("en-GB", options);
        }

        // save up out markup to spit on the page
        var reviewsMarkup = '<ul>';
        resultAsArr.forEach((r, i) => {
            // split rating from review
            let _rating = r.split(',');
            let review = santitiseString(_rating[1]);
            if(_rating[0] != '' && _rating[1] != '') {
                let reviewDate = resultDatesFormatted(resultDatesTrimmed[i]?.[0]) != 'Invalid Date' ? resultDatesFormatted(resultDatesTrimmed[i]?.[0]) : '';
                let customerReview = `<li><span class="ekomi-review__stars stars-sm stars-sm-${_rating[0]}"></span><em>${reviewDate}</em><div><span>${review}</span></div></li>`;
                if(i != 0){
                    reviewsMarkup += customerReview;
                }
            }
        })

        if(hasReviews){
            addReview()
            displayTabs()
            populateAggregateReview(resultAsArr)
        }
        
        function populateAggregateReview(resultArray){
            const average = calculateAggregateReviewAverage(resultArray)
            const mainProductRating = document.getElementById('main-product__rating')
            const mainProductStar = document.getElementById('main-product__rating-foreground')
            const mainProductAverage = document.getElementById('main-product__rating-average')

            //average 2 rounded d.p
            const roundedAverageDecimal = Math.round((average + Number.EPSILON) * 100) / 100
            
            //round to nearest .5
            const roundedAverageHalf = Math.round(average/5)*5


            //remove hidden
            mainProductRating.classList.remove('main-product__rating-hidden')

            //Add
            // mainProductStar.classList.add(`stars-sm-${roundedAverageHalf}`)
            mainProductAverage.innerHTML += `(${roundedAverageDecimal}/5)`

            //add star width [gap between stars] + amount of stars filled
            starWidth = (Math.floor(average)*4) + (average/5)* 70 +"px";
            mainProductStar.style.width = starWidth;

            addReviewClickScroll()
        }


        //gets average of reviews
        function calculateAggregateReviewAverage(data){
            let ratings = []
            data.forEach((r, i)=> {
                let _rating = r.split(',')
                //array has to be integer not an string.... Javascript
                ratings.push(Number(_rating[0]))
            }) 
            //first item in an array is NAN
            ratings.shift()
            //calculate average 
            const averageRatings = ratings.reduce((a,b) => (a+b)) / ratings.length
            return averageRatings
        }

        function addReviewClickScroll(){
            const mainProductAverage = document.getElementById('main-product__rating')
            
            mainProductAverage.addEventListener('click', function switchTabToReview () {
                const reviewSection = document.getElementById('product-review');
                const tabList = document.querySelector('[role="tablist"]');
                const tabs = document.querySelectorAll('[role="tab"]');
                const reviewTab = document.getElementById('tab-2');
    
                const tabPanels = document.querySelectorAll('[role="tabpanel"]')
                const reviewPanel = document.getElementById('panel-2')
    
                //aria selected tabs for all tabs
                tabs.forEach((e) => {
                    e.setAttribute('aria-selected', false);
                });
    
                //aria-selected true for review tab
                reviewTab.setAttribute('aria-selected', true);
    
    
                //hides all tab panels
                tabPanels.forEach((e) => {
                    e.setAttribute('hidden', true);
                })
    
                //show review tab
                reviewPanel.removeAttribute('hidden');
            })
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