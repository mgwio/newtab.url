const pref = require('sdk/simple-prefs');
const tabMod = require('resource:///modules/NewTabURL.jsm').NewTabURL;
const { PrefsTarget } = require('sdk/preferences/event-target');
const home = PrefsTarget({ branchName: "browser.startup." });

const dNewtab = {

	init : function() {
		this.onPrefChange();
		home.on("homepage", () => {
			if (pref.prefs.syncHomeNew)
				pref.prefs.dURL = home.prefs["homepage"];
		});
	},

	onPrefChange : function() {
		if (pref.prefs.syncHomeNew)
			pref.prefs.dURL = home.prefs["homepage"];

		if (pref.prefs.dURL != 'about:newtab')
			tabMod.override(pref.prefs.dURL);
	},

	onPrefReset : function() {
		tabMod.reset();
		pref.prefs.dURL = 'about:newtab';
	},

	onHomeSync : function() {
		dNewtab.onPrefChange.call();
	}
};

exports.main = () => {
	dNewtab.init();
	pref.on('dURL', dNewtab.onPrefChange);
	pref.on('dURLreset', dNewtab.onPrefReset);
	pref.on('syncHomeNew', dNewtab.onHomeSync);
}

exports.onUnload = (reason) => {
	if (reason == "disable" && pref.prefs.resetOnUninstall)
		dNewtab.onPrefReset();
}