var variants = window.hulkapps.product.variants;
if (window.hulkapps.product.selected_variant == null) {
  window.hulkapps.product.selected_variant = variants[0].id
  product_price = window.hulkapps.product.variants[0].price
}
setTimeout(function () {
var selector_var = document.querySelectorAll(".single-option-selector,.swatch-element input[type='radio'],.single-option-selector__radio, select[data-option='option1'], select[data-option='option1']:checked, select[data-option='option2'], select[data-option='option1']:checked, select[data-option='option3'], select[data-option='option3']:checked, select[data-index='option1'], select[data-index='option1']:checked, select[data-index='option2'], select[data-index='option1']:checked, select[data-index='option3'], select[data-index='option3']:checked, ul li div[swatch-option='option1'], input[type='radio']")
            selector_var.forEach(function (selector) {
              selector.addEventListener('change', (event) => {
                Object.keys(variants).forEach(function (key) {
                  var val = variants[key];
                  selected_variant_title = event.target.value.toString().toLowerCase();
                  var variantTitle = val.title.toString().toLowerCase();
                    if(variantTitle.includes(selected_variant_title)){
                  // if (variantTitle.trim() == selected_variant_title.trim()) {
                      var variantId = val.id;
                    window.hulkapps.product.selected_variant = val.id
                    product_price = val.price
                  }
                });
                product_page_btn_condition();
                if (window.hulkapps.customer) {
                  data = {
                    pid: window.hulkapps.product_id,
                    store_id: window.hulkapps.store_id,
                    ctags: window.hulkapps.customer.tags,
                    product_variants: window.hulkapps.product.selected_variant,
                    product_collections: window.hulkapps.product_collections
                  }
                } else {
                  data = {
                    pid: window.hulkapps.product_id,
                    store_id: window.hulkapps.store_id,
                    product_variants: window.hulkapps.product.selected_variant,
                    product_collections: window.hulkapps.product_collections
                  }
                }
                $.ajax({
                  type: "POST",
                  url: window.hulkapps.vd_url + "/api/v2/shop/get_offer_table",
                  data: data,
                  crossDomain: true,
                  success: function (data) {
                    if (data) {
                      var html_text = eligible_offer(data)
                      if ($(".hulkapps-volumes").length == 0) {
                        var vol_el_after;
                        selectors.forEach(function (selector) {
                          found_selectors += $(selector).length;
                          if ($(selector).length > 0) {
                            vol_el_after = $(selector).first()
                          }
                        });
                        if (vol_el_after?.parent().is("div")) {
                          vol_el_after = vol_el_after.parent()
                        }
                        vol_el_after?.after('<div class="hulkapps-volumes"></div>');
                      }
                      $('.hulkapps-volumes').html(html_text);
                      if ((html_text != '') && (html_text != null)) {
                        pixelTracking(data['display_setting'])
                      }
                    } else {
                      $('.hulkapps-volumes').html("");
                    }

                  }
                });
              });
            });
},500)