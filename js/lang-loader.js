// Language Loader - Dynamically loads content based on language
(function() {
	'use strict';

	// Get language from URL parameter or localStorage, default to Spanish
	function getLanguage() {
		const urlParams = new URLSearchParams(window.location.search);
		const urlLang = urlParams.get('lang');

		if (urlLang && ['es', 'en', 'pt'].includes(urlLang)) {
			localStorage.setItem('preferredLanguage', urlLang);
			return urlLang;
		}

		return localStorage.getItem('preferredLanguage') || 'es';
	}

	// Load language JSON file
	async function loadLanguage(lang) {
		try {
			const response = await fetch(`/lang/${lang}.json`);
			if (!response.ok) throw new Error(`Failed to load language: ${lang}`);
			return await response.json();
		} catch (error) {
			console.error('Error loading language:', error);
			// Fallback to Spanish if loading fails
			if (lang !== 'es') {
				return loadLanguage('es');
			}
			return {};
		}
	}

	// Update navigation links
	function updateNavLinks(lang, translations) {
		const nav = translations.nav || {};

		// Update nav text
		document.querySelectorAll('[data-i18n]').forEach(el => {
			const key = el.getAttribute('data-i18n');
			const keys = key.split('.');
			let value = translations;

			for (const k of keys) {
				value = value?.[k];
			}

			if (value) {
				el.textContent = value;
			}
		});

		// Update language switcher
		const langSelector = document.querySelector('.lang-selector');
		if (langSelector) {
			const currentPage = window.location.pathname.split('/').pop() || 'index.html';
			langSelector.innerHTML = `
				${lang !== 'es' ? `<a href="?lang=es">🇦🇷 ES</a>` : ''}
				${lang !== 'en' ? `<a href="?lang=en">🇬🇧 EN</a>` : ''}
				${lang !== 'pt' ? `<a href="?lang=pt">🇧🇷 PT</a>` : ''}
			`;
		}
	}

	// Initialize language loading
	async function init() {
		const lang = getLanguage();
		const translations = await loadLanguage(lang);

		// Store translations globally for page-specific scripts to use
		window.translations = translations;
		window.currentLang = lang;

		// Update HTML lang attribute
		document.documentElement.lang = lang;

		// Update navigation and common elements
		updateNavLinks(lang, translations);

		// Dispatch event for page-specific content loading
		window.dispatchEvent(new CustomEvent('languageLoaded', { detail: { lang, translations } }));
	}

	// Run on DOM ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
