/* Vigil Box: the "amerika" colour theme for BeepBox (VigilTech plum surfaces and pink accent). Derived from BeepBox's own "dark classic"
 * variables at start-up, so upstream themes stay untouched and new upstream variables are inherited. */
(function (root) {
	"use strict";
	const NS = (root.Amerika = root.Amerika || {});
	// Light is "dawn" (warm bone and rose), dark is "night" (plum-black). Song colours (the pitch channels and notes) stay upstream.
	const LIGHT = {
		"--page-margin": "#f6f1f4", "--editor-background": "#fffbfd", "--hover-preview": "#17101a", "--playhead": "#a8003a",
		"--primary-text": "#17101a", "--secondary-text": "#5c4e59", "--inverted-text": "#fffbfd", "--text-selection": "rgba(255,0,88,0.22)",
		"--box-selection-fill": "rgba(168,0,58,0.16)", "--loop-accent": "#d6004a", "--link-accent": "#a8003a",
		"--ui-widget-background": "#efe6ec", "--ui-widget-focus": "#e0d1db", "--pitch-background": "#efe6ec", "--tonic": "#f6d3df", "--fifth-note": "#d8dff0",
		"--white-piano-key": "#fffbfd", "--black-piano-key": "#6b5d68",
	};
	const DARK = {
		"--page-margin": "#120a14", "--editor-background": "#181019", "--hover-preview": "#f7eef2", "--playhead": "#ff4d86",
		"--primary-text": "#f7eef2", "--secondary-text": "#b7a5b1", "--inverted-text": "#120a14", "--text-selection": "rgba(255,77,134,0.45)",
		"--box-selection-fill": "rgba(255,190,220,0.18)", "--loop-accent": "#ff4d86", "--link-accent": "#ff7aa6",
		"--ui-widget-background": "#2a1a2e", "--ui-widget-focus": "#43304a", "--pitch-background": "#241629", "--tonic": "#5a1a38", "--fifth-note": "#2c3c5c",
		"--white-piano-key": "#cdbcc7", "--black-piano-key": "#3a2a40",
	};
	const mq = root.matchMedia ? root.matchMedia("(prefers-color-scheme: dark)") : null;
	function dark() { return !!(mq && mq.matches); }
	function css() {
		let base = root.beepbox.ColorConfig.themes[dark() ? "dark classic" : "light classic"];
		const OVERRIDES = dark() ? DARK : LIGHT;
		Object.keys(OVERRIDES).forEach(function (k) {
			const re = new RegExp("(" + k.replace(/[-]/g, "\\-") + "\\s*:)[^;]+;");
			base = re.test(base) ? base.replace(re, "$1 " + OVERRIDES[k] + ";") : base.replace(":root {", ":root {\n\t\t\t\t" + k + ": " + OVERRIDES[k] + ";");
		});
		return base;
	}
	NS.theme = {
		name: "amerika",
		install: function () {
			root.beepbox.ColorConfig.themes["amerika"] = css();
			if (mq && mq.addEventListener && !NS.theme._watching) {
				NS.theme._watching = true;
				mq.addEventListener("change", function () {
					root.beepbox.ColorConfig.themes["amerika"] = css();
					if (root.localStorage && root.localStorage.getItem("colorTheme") === "amerika") root.beepbox.ColorConfig.setTheme("amerika");
				});
			}
		},
		names: ["amerika", "dark classic", "light classic"],
	};
})(typeof window !== "undefined" ? window : globalThis);
