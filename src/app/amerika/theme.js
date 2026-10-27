/* Cohnsoft Box: the "amerika" colour theme for BeepBox (Cohnsoft neutral surfaces and green accents). Derived from BeepBox's own "dark classic"
 * variables at start-up, so upstream themes stay untouched and new upstream variables are inherited. */
(function (root) {
	"use strict";
	const NS = (root.Amerika = root.Amerika || {});
	const OVERRIDES = {
		"--page-margin": "#f2f2f7", "--editor-background": "#ffffff", "--hover-preview": "#1d1d1f", "--playhead": "#0a7a37",
		"--primary-text": "#1d1d1f", "--secondary-text": "#636366", "--inverted-text": "#ffffff", "--text-selection": "rgba(82,110,123,0.25)",
		"--box-selection-fill": "rgba(82,110,123,0.18)", "--loop-accent": "#0a7a37", "--link-accent": "#0a7a37",
		"--ui-widget-background": "#f2f2f7", "--ui-widget-focus": "#b8c8c2", "--pitch-background": "#e3eae4", "--tonic": "#d5c5aa", "--fifth-note": "#c4d6d9",
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
