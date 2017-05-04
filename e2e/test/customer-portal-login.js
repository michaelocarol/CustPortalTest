'use strict';

module.exports = {
  'navigate to wavecell sign-up' : function ( client ) {
  	var nav = client.page.customerPortalPage()
	
	client.resizeWindow( 1440, 900 )
	nav.navigate()
		.waitForElementPresent( '@loginBtn', 1000 );
  },

  'Nagivate to customer portal login page and verify login button' : function( client ) {
  	var login = client.page.customerPortalPage()

	login
		.click( '@loginBtn' )
		.waitForElementPresent( '@verifyLoginPage', 1000 )
		.assert.containsText( '@verifyLoginPage', 'LOG IN' )
  },

  'Log in to wavecell customer portal' : function ( client ) {
  	var loginModal = client.page.customerPortalPage()

  	loginModal
		.setValue( '@username', 'toys2x@yahoo.com' )
		.setValue( '@password', 'aaaa1111!' )
		.click( '@modalLoginBtn' )
		.waitForElementPresent( '@custPortalUserName', 1000 )
		.assert.containsText( '@custPortalUserName', 'toys2x@yahoo.com' )
	
	client.end();
  }
};
