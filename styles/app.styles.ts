import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

 html {
	box-sizing: border-box;
	/* 1rem = 10px */
	font-size: 62.5%;
}

*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: inherit;
}

body {
	font-size: 1.5rem;
	font-weight: 400;
	line-height: 1.5;
	color: rgb(var(--color-site-b));
	-webkit-font-smoothing: antialiased;
}

img {
	max-width: 100%;
	height: auto;
	vertical-align: middle;
	font-style: italic;
	background-repeat: no-repeat;
	background-size: cover;
	shape-margin: 1.2rem;
	pointer-events: none;
}

li {
	list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
	overflow-wrap: break-word;
}

a {
	color: inherit;
	text-decoration: none;
}

a,
input,
select,
button,
textarea,
[tabindex='0'] {
	cursor: pointer;
	outline: transparent dashed 1.5px;
	outline-offset: 3px;
	transition: outline-color 0.2s;
}

a:focus-visible,
input:focus-visible,
select:focus-visible,
button:focus-visible,
textarea:focus-visible,
[tabindex='0']:focus-visible {
	outline-color: rgb(var(--color-black));
}

input,
button,
textarea,
select {
	font: inherit;
}

button {
	cursor: pointer;
	border: none;
	background: none;
}

@media only screen and (max-width: 20em) {
	html {
		font-size: 50%;
	}
}

@media (prefers-reduced-motion: no-preference) {
	html {
		scroll-behavior: smooth;
	}
}

  `;

export default GlobalStyles;
