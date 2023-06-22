// dataLayer push `7dots_begin_checkout`
function beginCheckoutDataLayer() {
	console.log(beginCheckoutButton)
	window.dataLayer.push({ ecommerce: null });
	window.dataLayer.push({
		'event': '7dots_begin_checkout',
		'ecommerce': {}
	});
}

class CartNotification extends HTMLElement {
	constructor() {
		super()

		this.body = document.querySelector('body')
		this.notification = document.getElementById('cart-notification')
		this.header = document.querySelector('sticky-header')
		this.onBodyClick = this.handleBodyClick.bind(this)
		this.checkoutButton = this.notification.querySelector('.js-cart-checkout-button')

		this.notification.addEventListener(
			'keyup',
			(evt) => evt.code === 'Escape' && this.close()
		)
		this.querySelectorAll('button[type="button"]').forEach((closeButton) =>
			closeButton.addEventListener('click', this.close.bind(this))
		)
	}

	open() {
		this.body.classList.add('cart-notification-active')
		this.notification.classList.add('animate', 'active')

		this.notification.addEventListener(
			'transitionend',
			() => {
				this.notification.focus()
				trapFocus(this.notification)

				if (this.checkoutButton) {
					this.checkoutButton.addEventListener('click', beginCheckoutDataLayer)
				}
			},
			{ once: true }
		)

		document.body.addEventListener('click', this.onBodyClick)
	}

	close() {
		this.body.classList.remove('cart-notification-active')
		this.notification.classList.remove('active')

		document.body.removeEventListener('click', this.onBodyClick)

		if (this.checkoutButton) {
			this.checkoutButton.removeEventListener('click', beginCheckoutDataLayer)
		}

		removeTrapFocus(this.activeElement)
	}

	renderContents(parsedState) {
		this.cartItemKey = parsedState.key
		this.getSectionsToRender().forEach((section) => {
			document.getElementById(section.id).innerHTML = this.getSectionInnerHTML(
				parsedState.sections[section.id],
				section.selector
			)
		})

		if (this.header) this.header.reveal()
		this.open()
	}

	getSectionsToRender() {
		return [
			{
				id: 'cart-notification-product',
				selector: `[id="cart-notification-product-${this.cartItemKey}"]`,
			},
			{
				id: 'cart-notification-button',
			},
			{
				id: 'cart-icon-bubble',
			},
		]
	}

	getSectionInnerHTML(html, selector = '.shopify-section') {
		return new DOMParser()
			.parseFromString(html, 'text/html')
			.querySelector(selector).innerHTML
	}

	handleBodyClick(evt) {
		const target = evt.target
		if (target !== this.notification && !target.closest('cart-notification')) {
			const disclosure = target.closest('details-disclosure, header-menu')
			this.activeElement = disclosure
				? disclosure.querySelector('summary')
				: null
			this.close()
		}
	}

	setActiveElement(element) {
		this.activeElement = element
	}
}

customElements.define('cart-notification', CartNotification)
