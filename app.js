// Navestrias EHS - Single Page Application
// Modern SPA with dynamic language switching

class NavestariasApp {
	constructor() {
		this.currentPage = 'home';
		this.init();
	}

	init() {
		// Initialize language
		i18n.init();
		this.updateLanguage();

		// Setup event listeners
		this.setupNavigation();
		this.setupLanguageSwitcher();
		this.setupMobileMenu();

		// Load initial page
		this.loadPage(this.currentPage);
	}

	updateLanguage() {
		const lang = i18n.currentLang;

		// Update HTML lang attribute
		document.getElementById('htmlRoot').lang = lang;

		// Update navigation
		document.querySelectorAll('[data-nav]').forEach(el => {
			const key = el.dataset.nav;
			el.textContent = i18n.t(`nav.${key}`);
		});

		// Update active page content
		this.renderPage(this.currentPage);

		// Update footer
		this.updateFooter();

		// Update language selector active state
		document.querySelectorAll('.lang-btn').forEach(btn => {
			btn.classList.toggle('active', btn.dataset.lang === lang);
		});
	}

	updateFooter() {
		const footer = i18n.section('footer');
		document.querySelector('[data-i18n="footer.aboutText"]').textContent = footer.aboutText;
		document.querySelector('[data-i18n="footer.servicesTitle"]').textContent = footer.servicesTitle;
		document.querySelector('[data-i18n="footer.environmentalServices"]').textContent = footer.environmentalServices;
		document.querySelector('[data-i18n="footer.healthSafety"]').textContent = footer.healthSafety;
		document.querySelector('[data-i18n="footer.ourClients"]').textContent = footer.ourClients;
		document.querySelector('[data-i18n="footer.companyTitle"]').textContent = footer.companyTitle;
		document.querySelector('[data-i18n="footer.aboutUs"]').textContent = footer.aboutUs;
		document.querySelector('[data-i18n="footer.news"]').textContent = footer.news;
		document.querySelector('[data-i18n="footer.contact"]').textContent = footer.contact;
		document.querySelector('[data-i18n="footer.copyright"]').textContent = footer.copyright;
	}

	setupNavigation() {
		document.querySelectorAll('[data-page]').forEach(link => {
			link.addEventListener('click', (e) => {
				e.preventDefault();
				const page = link.dataset.page;
				this.loadPage(page);
			});
		});
	}

	setupLanguageSwitcher() {
		document.querySelectorAll('.lang-btn').forEach(btn => {
			btn.addEventListener('click', (e) => {
				e.preventDefault();
				const lang = btn.dataset.lang;
				i18n.setLanguage(lang);
				this.updateLanguage();
			});
		});
	}

	setupMobileMenu() {
		const toggle = document.querySelector('.menu-toggle');
		const menu = document.querySelector('.nav-menu');

		if (toggle) {
			toggle.addEventListener('click', () => {
				menu.classList.toggle('active');
			});
		}
	}

	loadPage(pageName) {
		// Hide all pages
		document.querySelectorAll('.page').forEach(page => {
			page.classList.remove('active');
		});

		// Show requested page
		const page = document.getElementById(`page-${pageName}`);
		if (page) {
			page.classList.add('active');
			this.currentPage = pageName;
			this.renderPage(pageName);
		}

		// Update active nav
		document.querySelectorAll('[data-page]').forEach(link => {
			link.classList.toggle('active', link.dataset.page === pageName);
		});

		// Close mobile menu
		document.querySelector('.nav-menu')?.classList.remove('active');

		// Scroll to top
		window.scrollTo(0, 0);
	}

	renderPage(pageName) {
		const content = i18n.section(pageName);

		if (pageName === 'home') {
			this.renderHomePage(content);
		} else if (pageName === 'gallery') {
			this.renderGalleryPage(content);
		}
	}

	renderHomePage(content) {
		// Header
		document.querySelector('#page-home .header-banner h1').textContent = content.title;
		document.querySelector('#page-home .header-banner p').textContent = content.subtitle;

		// Service cards
		const cards = document.querySelectorAll('#page-home .service-card');
		if (cards[0]) {
			cards[0].querySelector('h3').textContent = content.environmentalServices;
			cards[0].querySelector('p').textContent = content.environmentalDesc;
			const list0 = cards[0].querySelector('ul');
			list0.innerHTML = content.environmentalList.map(item => `<li>${item}</li>`).join('');
		}
		if (cards[1]) {
			cards[1].querySelector('h3').textContent = content.healthSafetyServices;
			cards[1].querySelector('p').textContent = content.healthSafetyDesc;
			const list1 = cards[1].querySelector('ul');
			list1.innerHTML = content.healthSafetyList.map(item => `<li>${item}</li>`).join('');
		}

		// Support section
		document.querySelector('[data-i18n="home.supportTitle"]').textContent = content.supportTitle;
		document.querySelector('[data-i18n="home.supportSubtitle"]').textContent = content.supportSubtitle;

		const supportLists = document.querySelectorAll('.feature-list ul');
		if (supportLists[0]) {
			supportLists[0].innerHTML = content.supportList1.map(item => `<li>${item}</li>`).join('');
		}
		if (supportLists[1]) {
			supportLists[1].innerHTML = content.supportList2.map(item => `<li>${item}</li>`).join('');
		}

		// CTA
		document.querySelector('[data-i18n="home.ctaTitle"]').textContent = content.ctaTitle;
		document.querySelector('[data-i18n="home.ctaText"]').textContent = content.ctaText;
		document.querySelector('[data-i18n="home.ctaButton"]').textContent = content.ctaButton;
	}

	renderGalleryPage(content) {
		document.querySelector('#page-gallery .header-banner h1').textContent = content.title;
		document.querySelector('#page-gallery .header-banner p').textContent = content.subtitle;
		document.querySelector('[data-i18n="gallery.ourProjects"]').textContent = content.ourProjects;
		document.querySelector('[data-i18n="gallery.projectsDesc"]').textContent = content.projectsDesc;
	}
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
	window.app = new NavestariasApp();
});
