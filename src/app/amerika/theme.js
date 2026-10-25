/* MakBox: the "amerika" colour theme for BeepBox (Artemis Moonrise glass and coastal tones). Derived from BeepBox's own "dark classic"
 * variables at start-up, so upstream themes stay untouched and new upstream variables are inherited. */
(function (root) {
	"use strict";
	const NS = (root.Amerika = root.Amerika || {});
	const OVERRIDES = {
		"--page-margin": "#edf2fa", "--editor-background": "#f5f5f7", "--hover-preview": "#1d1d1f", "--playhead": "#b89463",
		"--primary-text": "#1d1d1f", "--secondary-text": "#62646b", "--inverted-text": "#f5f5f7", "--text-selection": "rgba(82,110,123,0.25)",
		"--box-selection-fill": "rgba(82,110,123,0.18)", "--loop-accent": "#86623b", "--link-accent": "#0066cc",
		"--ui-widget-background": "#e9eef7", "--ui-widget-focus": "#b8c8c2", "--pitch-background": "#e3eae4", "--tonic": "#d5c5aa", "--fifth-note": "#c4d6d9",
		"--white-piano-key": "#f8f9fc", "--black-piano-key": "#52636b",
	};
	function css() {
		let base = root.beepbox.ColorConfig.themes["dark classic"];
		Object.keys(OVERRIDES).forEach(function (k) {
			const re = new RegExp("(" + k.replace(/[-]/g, "\\-") + "\\s*:)[^;]+;");
			base = re.test(base) ? base.replace(re, "$1 " + OVERRIDES[k] + ";") : base.replace(":root {", ":root {\n\t\t\t\t" + k + ": " + OVERRIDES[k] + ";");
		});
		return base;
	}
	NS.theme = {
		name: "amerika",
		install: function () { root.beepbox.ColorConfig.themes["amerika"] = css(); },
		names: ["amerika", "dark classic", "light classic"],
	};
})(typeof window !== "undefined" ? window : globalThis);
