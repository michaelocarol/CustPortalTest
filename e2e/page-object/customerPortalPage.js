'use strict';

module.exports = {
	url: 'http://v2.wavecell.com:55555/',
	elements: {

		// Login Page Objects
		loginBtn: '[class="main-header"] [href="#login-popup"][class="button w-button popup-btn"]',
		verifyLoginPage: '[class="mfp-container mfp-inline-holder"] [class="popup-container tc"] [class="btn-submit"]',
		username: '[id="MainContent_UserName"]',
		password: '[id="MainContent_Password"]',
		modalLoginBtn : '[class="mfp-container mfp-inline-holder"] [class="popup-container tc"] [class="btn-submit"]',

		// Customer Portal Page Objects
		custPortalUserName: '[id="HeadLoginView_HeadLoginName"]'
	}
};
