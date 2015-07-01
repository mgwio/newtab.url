###newtab.url
Restores custom new-tab functionality ("browser.newtab.url"-like) in Firefox 41.0a1+.

The community (mozilla) removed the about:config "browser.newtab.url" option due to hijacking vulnerability.

To package the xpi yourself, install **jpm** using **npm** and execute "jpm xpi" in the source directory.

######instructions
1. Install xpi (drag onto extensions list; click, "allow")
2. Enter URL in field
3. Enjoy! :)
4. You actually don't have to leave it installed. If you uncheck the "Reset on uninstall?" box you can uninstall/disable it and the changes will stay (persists until next update that replaces the NewTabURL.jsm module in omni.ja).
