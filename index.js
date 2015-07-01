const pref = require('sdk/simple-prefs');
const tabMod = require('resource:///modules/NewTabURL.jsm').NewTabURL;


const dNewtab = {

	init : function(){
		this.onPrefChange();
	},

	onPrefChange : function(){
		if (pref.prefs.dURL != 'about:newtab')
			tabMod.override(pref.prefs.dURL);
		//console.log(tabMod._overridden);
	},

	onPrefReset: function() {
		tabMod.reset();
		pref.prefs.dURL = 'about:newtab';
		//console.log(tabMod._overridden);
	}

};

exports.main = function() {
	dNewtab.init();
	pref.on('dURL', dNewtab.onPrefChange);
	pref.on('dURLreset', dNewtab.onPrefReset);
}

exports.onUnload = function(reason) {
	if (reason == "disable" && pref.prefs.resetOnUninstall)
		dNewtab.onPrefReset();
}