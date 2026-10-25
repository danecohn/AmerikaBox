/* MakBox: the "amerika" colour theme for BeepBox (Artemis Moonrise glass and coastal tones). Derived from BeepBox's own "dark classic"
 * variables at start-up, so upstream themes stay untouched and new upstream variables are inherited. */
(function (root) {
	"use strict";
	const NS = (root.Amerika = root.Amerika || {});
	const OVERRIDES = {
		"--page-margin": "#e7ece6", "--editor-background": "#f5f0e6", "--hover-preview": "#273941", "--playhead": "#b89463",
		"--primary-text": "#273941", "--secondary-text": "#657c7c", "--inverted-text": "#f5f0e6", "--text-selection": "rgba(82,110,123,0.25)",
		"--box-selection-fill": "rgba(82,110,123,0.18)", "--loop-accent": "#86623b", "--link-accent": "#526e7b",
		"--ui-widget-background": "#dce5df", "--ui-widget-focus": "#b8c8c2", "--pitch-background": "#e3eae4", "--tonic": "#d5c5aa", "--fifth-note": "#c4d6d9",
		"--white-piano-key": "#faf8f0", "--black-piano-key": "#52636b",
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
