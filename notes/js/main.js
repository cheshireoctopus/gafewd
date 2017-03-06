// GA approved color scheme
var COLORS = {
	red: 'rgb(229,27,36)',
	yellow: 'rgb(255, 216, 0)',
	mint: 'rgb(131, 237, 217)',
	// teal: 'rgb(30, 202, 199)',
	burgundy: 'rgb(113, 10, 51)',
	pink: 'rgb(255, 157, 182)',
	// 'light-grey': 'rgb(229, 229, 229)',
	'dark-grey': 'rgb(88, 88, 91)',
}

window.onload = function () {
	// randomly generate .title slide backgrounds
	document.querySelectorAll('.title').forEach(function (el) {
		var randomColor = randomProperty(COLORS)
		el.setAttribute('data-background', randomColor)
	})

	// init reveal after .title slides have been updated
	initReveal();
}

function initReveal () {
	// Full list of configuration options available at:
	// https://github.com/hakimel/reveal.js#configuration
	var options = {
		controls: true,
		progress: true,
		history: true,
		center: false,

		transition: 'slide', // none/fade/slide/convex/concave/zoom

		// Optional reveal.js plugins
		dependencies: [
			// { src: '../lib/js/classList.js', condition: function() { return !document.body.classList; } },
			{ src: '../plugin/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
			{ src: '../plugin/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
			{ src: '../plugin/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
			// override highlight plugin in favor of actual hightlight.js library; needed for reveal-code-focus.js
			// { src: '../node_modules/highlight.js/lib/highlight.js' },
			// {
			// 	src: '../node_modules/reveal-code-focus/reveal-code-focus.js',
			// 	async: true,
			// 	callback: function() {
			// 		RevealCodeFocus();
			// 	}
			// },
			// { src: '../plugin/zoom-js/zoom.js', async: true },
			// { src: '../plugin/notes/notes.js', async: true }
		],

		width: '75%',
		height: '75%',
		margin: 0.075,

		slideNumber: 'c/t',
	}

	Reveal.initialize(options);
}

function randomProperty (obj) {
	var keys = Object.keys(obj)
 	return obj[keys[ keys.length * Math.random() << 0]];
}
