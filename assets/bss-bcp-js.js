!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";function n(t,e,o,n){const r=t.product?t.product.id:null;let u=null,l=encodeURI("/search.js?q=id:"+r+"&view=bss.bcp");fetch(l,{method:"GET"}).then((function(t){if(!t.ok)throw new Error("HTTP error, status = "+t.status);return t.json()})).then((function(t){if(t.length>0){if(u=t[0],e.quote.handleCheckProductQuote(u)){let t=e.helper.getAddToCartDefault(),r=e.helper.getBuyItNowBtn(),l=100;938===e.storeId&&(l=5);let i=setInterval((function(){if(r&&r.length){if(o&&o.hide_buy_it_now&&r&&r.length)for(let t=0;t<r.length;t++)r[t].classList.add("bss-bcp-quote-hide-buy-it-now");clearInterval(i)}else setTimeout((function(){clearInterval(i)}),5e3)}),l),a=document.querySelectorAll("[bss-bcp-quote-product-price]");if(a&&a.length&&o&&o.hide_price)for(let t=0;t<a.length;t++)a[t].remove();e.helper.handleChangeVariant(o);let c=document.createElement("div"),s=document.createTextNode(n.add_to_quote);c.setAttribute("class","bss-bcp-add-to-quote-btn"),c.appendChild(s);let d=document.createElement("div"),p=`<div class="bss-quote-modal-content">\n                            <span class="bss-quote-modal-close">&times;</span>\n                            <div id="bss-quote-modal-text"></div>\n                            <div class="bss-quote-modal-button-group"><div id="bss-quote-continue-shopping">${n.continue_shopping}</div>\n                            <div id="bss-quote-view-quote-cart">${n.view_quote}</div></div>\n                            </div>`;d.setAttribute("class","bss-quote-modal"),d.setAttribute("id","bss-quote-modal-id"),d.innerHTML=p;let f=document.querySelectorAll('form[action*="/cart/add"]');if(f&&f.length&&t&&t.length)for(let e=0;e<t.length;e++){let n=t[e].closest('form[action*="/cart/add"]');if(n){n.querySelector("bss-bcp-add-to-quote-btn")||t[e].after(c)}o&&o.hide_cart&&t[e].classList.add("bss-bcp-quote-hide-add-to-cart")}c.after(d);let m=document.getElementById("bss-quote-modal-id"),g=document.getElementsByClassName("bss-quote-modal-close")[0],b=document.querySelector("#bss-quote-continue-shopping"),h=document.querySelector("#bss-quote-view-quote-cart");g&&(g.onclick=function(){d.style.display="none"}),b&&(b.onclick=function(){d.style.display="none"}),h&&(h.onclick=function(){window.location="/apps/customer-portal/quote-cart"}),window.onclick=function(t){t.target==m&&(d.style.display="none")};let q=document.querySelector("#bss-quote-modal-text");c.onclick=function(){!function(t,o,r,u,l,i){t.style.display="block",l=e.helper.handleGetVariantId(),i=parseInt(e.quote.handleGetQuantity()),l&&r&&r.variants&&r.variants.length&&r.variants.map(t=>{t.id==l&&(u=t)}),l=l?l.toString():null;let a=window.localStorage.getItem("bssQuoteCart")?JSON.parse(window.localStorage.getItem("bssQuoteCart")):[],c=window.localStorage.getItem("bssListVariantQuoteCart")?JSON.parse(window.localStorage.getItem("bssListVariantQuoteCart")):[];if(window.localStorage.getItem("bssQuoteCart")||window.localStorage.setItem("bssQuoteCart",""),window.localStorage.getItem("bssListVariantQuoteCart")||window.localStorage.setItem("bssListVariantQuoteCart",""),r&&u&&l){let t={};if(a&&a.length&&c&&c.length)if(c.includes(l))for(let t=0;t<a.length;t++){let e=a[t].quantity?parseInt(a[t].quantity):0;if(a[t].variantId==l){a[t].quantity=e+i;break}}else t=e.quote.renderQuoteCartItem(r,u,i),c.push(l),a.push(t);else t=e.quote.renderQuoteCartItem(r,u,i),c.push(l),a.push(t);window.localStorage.setItem("bssQuoteCart",JSON.stringify(a)),window.localStorage.setItem("bssListVariantQuoteCart",JSON.stringify(c)),o.innerHTML=`<p>${n.the_product} <strong>${r.title+" "+u.title}</strong> ${n.added_to_quote}.</p>`}}(d,q,u,null,null,1)}}}else console.log("No data")})).catch((function(t){console.log("Noooooo! Something error:"),console.log(t)}))}function r(t,e,o,n){let r=null,u=[],l=[],i=new Map;const a=function(t,o,r,u,l,i){t.style.display="block",l=l?l.toString():null;let a=window.localStorage.getItem("bssQuoteCart")?JSON.parse(window.localStorage.getItem("bssQuoteCart")):[],c=window.localStorage.getItem("bssListVariantQuoteCart")?JSON.parse(window.localStorage.getItem("bssListVariantQuoteCart")):[];if(window.localStorage.getItem("bssQuoteCart")||window.localStorage.setItem("bssQuoteCart",""),window.localStorage.getItem("bssListVariantQuoteCart")||window.localStorage.setItem("bssListVariantQuoteCart",""),r&&u&&l){let t={};if(a&&a.length&&c&&c.length)if(c.includes(l))for(let t=0;t<a.length;t++){let e=a[t].quantity?a[t].quantity:0;if(a[t].variantId==l){a[t].quantity=e+1;break}}else c.push(l),t=e.quote.renderQuoteCartItem(r,u,i),a.push(t);else t=e.quote.renderQuoteCartItem(r,u,i),c.push(l),a.push(t);window.localStorage.setItem("bssQuoteCart",JSON.stringify(a)),window.localStorage.setItem("bssListVariantQuoteCart",JSON.stringify(c)),o.innerHTML=`<p>${n.the_product} <strong>${r.title+" "+u.title}</strong> ${n.added_to_quote}.</p>`}};let c=document.querySelectorAll("[bss-bcp-quote-product-price]");if(e.page.isProductPage()&&(c=e.helper.featuredProductSelector()),c&&c.length){for(let t=0;t<c.length;t++)r=c[t].getAttribute("bss-bcp-quote-product-id"),r&&u.push('id:"'+r+'"');let t="/search.js?q="+u.join(" OR ")+"&view=bss.bcp",s=encodeURI(t);fetch(s,{method:"GET"}).then((function(t){if(!t.ok)throw new Error("HTTP error, status = "+t.status);return t.json()})).then((function(t){if(t.length>0){for(let o=0;o<t.length;o++){if(e.quote.handleCheckProductQuote(t[o])){let e=t[o].id+"";l.push(e),i.set(e,t[o])}}for(let t=0;t<c.length;t++)if(r=c[t].getAttribute("bss-bcp-quote-product-id")+"",r&&l.includes(r)){let u=i.get(r),l=u.variants[0],s=l.id;if(o&&o.hide_price&&c[t].classList.add("bss-bcp-quote-hide-price"),o&&o.hide_cart){let o=null;if(885===e.storeId){o=c[t].closest(".productitem");let e=o?o.querySelector(".atc--button"):null;e&&e.remove()}if(1045===e.storeId){o=c[t].closest(".product.animate");let e=o?o.querySelector(".product-details .purchase"):null;e&&e.remove()}}let d=document.createElement("div"),p=document.createTextNode(n.add_to_quote);d.setAttribute("class","bss-bcp-add-to-quote-btn"),d.appendChild(p),c[t].after(d);let f=document.createElement("div"),m=`<div class="bss-quote-modal-content">\n                                    <span id="bss-quote-modal-close-id-${s}" class="bss-quote-modal-close">&times;</span>\n                                    <div id="bss-quote-modal-text-${s}" class="bss-quote-modal-text"></div>\n                                    <div class="bss-quote-modal-button-group"><div id="bss-quote-continue-shopping-${s}" class="bss-quote-continue-shopping">${n.continue_shopping}</div>\n                                    <div id="bss-quote-view-quote-cart-${s}" class="bss-quote-view-quote-cart">${n.view_quote}</div></div>\n                                </div>`;f.setAttribute("class","bss-quote-modal"),f.setAttribute("id","bss-quote-modal-id-"+s),f.innerHTML=m,d.after(f);let g=document.getElementById("bss-quote-modal-id-"+s),b=document.getElementById("bss-quote-modal-close-id-"+s),h=document.querySelector("#bss-quote-continue-shopping-"+s),q=document.querySelector("#bss-quote-view-quote-cart-"+s),y=document.querySelector("#bss-quote-modal-id-"+s);b&&(b.onclick=function(){y.style.display="none"}),h&&(h.onclick=function(){y.style.display="none"}),q&&(q.onclick=function(){window.location="/apps/customer-portal/quote-cart"}),window.onclick=function(t){t.target==g&&(f.style.display="none")};let _=document.querySelector("#bss-quote-modal-text-"+s);d.onclick=function(){a(f,_,u,l,s,1)}}}})).catch((function(t){console.log("Noooooo! Something error:"),console.log(t)}))}}function u(){var t={};document.querySelector("#bss-bcp-store-data")&&(t=JSON.parse(document.querySelector("#bss-bcp-store-data").innerHTML)),!!BSS_BCP.isEnableQuote&&(BSS_BCP.quote={},BSS_BCP.helper={},function(t){t.helper.getQueryArray=function(){let t,e=[],o=window.location.href.slice(window.location.href.indexOf("?")+1).split("&");for(let n=0;n<o.length;n++)t=o[n].split("="),e.push(t[0]),e[t[0]]=t[1];return e},t.helper.handleGetVariantId=function(){let e=null,o=null,n=t.helper.getQueryArray(),r=document.querySelectorAll('form[action*="/cart/add"]');if(r&&r.length)for(let t=0;t<r.length&&(o=r[t].querySelectorAll('select[name="id"],input[name="id"]'),!o.length);t++);return o&&o.length&&(e=o[0].value),-1!==n.indexOf("variant")&&(e=n.variant),e},t.helper.handleChangeVariant=function(t){let e=null,o=document.querySelectorAll('form[action*="/cart/add"]');if(o&&o.length)for(let t=0;t<o.length&&(e=o[t].querySelectorAll('select[name="id"],input[name="id"]'),!e.length);t++);if(e&&e.length)for(let o=0;o<e.length;o++){e[o].addEventListener("change",(function(){let e=setInterval((function(){let e=document.querySelectorAll("[bss-bcp-quote-product-price]");if(e&&e.length&&t&&t.hide_price)for(let t=0;t<e.length;t++)e[t].remove()}),200);setTimeout((function(){clearInterval(e)}),3e3)}))}},t.helper.getAddToCartDefault=function(){return document.querySelectorAll('#shopify-section-product-template #AddToCart,.template-product .product-form__cart-submit,.template-product .product__content-main .btn.btn--full.product__add-to-cart-button.shopify-payment-btn,#shopify-section-product-template .grid .grid-item.large--three-fifths #addToCart-product-template,#shopify-section-product-template #ProductSection--product-template #AddToCartForm--product-template #AddToCart--product-template,#shopify-section-product-template .product .product__details.grid__item #AddToCart-product-template,.product.product--template .product__sticky .product-form__buttons .product-form__add-to-cart.button,.page-width .product__info-container.product__info-container--sticky .product-form__buttons .product-form__submit.button,.template-product .product-single__info-wrapper #AddToCart-product-template,.product-content-container .product-block-area .shopify-product-form .add-to-cart-container #addToCartButton,.product-form--atc .product-form--atc-button,.product_single_detail_section #AddToCart,.product-form-product--static .product-form__controls-group--submit .product-form__submit-button-wrapper .product-form__cart-submit,.buy-buttons-row .button.button--large[type="submit"],.tab-body .purchase-section button.btn.add-to-cart,.product-form .product-form__payment-container')},t.helper.getBuyItNowBtn=function(){return document.querySelectorAll('.template-product .shopify-payment-button .shopify-payment-button__button--unbranded:not([disabled]),.page-width .product__info-container.product__info-container--sticky .product-form__buttons .shopify-payment-button,.template-product .product-single__info-wrapper .shopify-payment-button,.product-form--atc .shopify-payment-button,.purchase-section .bottompad-half div[data-shopify="payment-button"],.product-form__item .shopify-payment-button')},t.helper.featuredProductSelector=function(){return document.querySelectorAll(".product-recommendations--section [bss-bcp-quote-product-price],.product-recently-viewed--section [bss-bcp-quote-product-price],.related-products-wrapper [bss-bcp-quote-product-price]")},t.page={},t.page.getPage=function(){return window.location.href.split("/")},t.page.isCartPage=function(){var e=t.page.getPage();return"cart"==e[e.length-1]||e[e.length-1].includes("cart")&&"products"!==e[e.length-2]&&"collections"!==e[e.length-2]},t.page.isCollectionPage=function(){var e=t.page.getPage();return"collections"==e[e.length-2]},t.page.isProductPage=function(){var e=t.page.getPage();return"products"==e[e.length-2]},t.page.isSearchPage=function(){return"/search"==window.location.pathname},t.page.isHomePage=function(){return"/"==window.location.pathname}}(BSS_BCP),function(t,e){const o=t.product?t.product.id:null,u=t.customer?t.customer.id:null,l=t.customer?t.customer.tags:null,i=e.quoteRule?e.quoteRule.customer_ids:null,a=e.quoteRule?e.quoteRule.product_ids:null,c=e.quoteRule?e.quoteRule.customer_tags:null,s=e.quoteRule?e.quoteRule.product_tags:null,d=e.quoteRule?e.quoteRule.product_collections:null,p=e.quoteRule?e.quoteRule.product_condition_type:0,f=e.quoteRule?e.quoteRule.apply_to:3,m=e.quoteConfig?e.quoteConfig:{},g=e.quoteTranslations?e.quoteTranslations:{};let b=e.page.isProductPage(),h=e.page.isCollectionPage(),q=e.page.isHomePage(),y=e.page.isSearchPage(),_=i?i.split(","):[],w=a?a.split(","):[],S=c?c.split(","):[],v=s?s.split(","):[],C=d?d.split(","):[];e.quote.handleGetQuantity=function(){let t=1,e=document.querySelectorAll('input[type="number"][name="quantity"],input[type="number"][data-quantity-input],input[type="number"][class$="quantity"],input[id^="Quantity"],input[name="quantity"]');return e&&e.length&&(t=e[e.length-1].value),t},e.quote.handleCheckCustomer=function(){let t=!1;if(0==f)null==u?t=!1:-1!==_.indexOf(u+"")&&(t=!0);else if(1==f)if(null==l)t=!1;else{0!=l.filter(t=>S.includes(t+"")).length&&(t=!0)}else 2==f?null!=u&&(t=!0):3==f&&(t=!0);return t},e.quote.handleCheckProductQuote=function(t){let e=!1,o=t.id,n=t.collections,r=t.tags;if(0==p)e=!0;else if(1==p)w.length&&null!=o&&-1!==w.indexOf(o+"")&&(e=!0);else if(2==p){if(d.length&&n.length){n.filter(t=>C.includes(t+"")).length>0&&(e=!0)}}else if(3==p&&r&&r.length){r.filter(t=>v.includes(t+"")).length>0&&(e=!0)}return e},e.quote.renderQuoteCartItem=function(t,e,o){return{productId:t.id,productTitle:t.title,variantId:e.id,variantTitle:e.title,featureImage:t.featureImage,price:e.price,quantity:o}};let I=e.quote.handleCheckCustomer();if(I){let t=document.querySelector("body"),e=document.createElement("div");e.setAttribute("class","bss-quote-cart-icon"),e.innerHTML="&#128722;",t&&(t.append(e),e.onclick=function(){window.location="/apps/customer-portal/quote-cart"})}if(b&&I&&null!=o&&n(t,e,m,g),(h||y||q)&&I&&r(0,e,m,g),b&&I){setTimeout((function(){r(0,e,m,g)}),1500)}}(t,BSS_BCP))}o.r(e),o.d(e,"default",(function(){return u})),u()}]);