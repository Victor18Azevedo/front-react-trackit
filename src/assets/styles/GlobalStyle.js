import { createGlobalStyle } from "styled-components";
import {
  accentColor,
  inputColor,
  textColor,
  darkAccentColor,
} from "../../constants/colors";

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	font-family: 'Lexend Deca', sans-serif;
	font-weight: 400;
	color: ${textColor};
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
	text-decoration: none;
}
* {
	box-sizing: border-box;
}
.btn {
	width: 303px;
	height: 45px;
	background: ${accentColor};
	border-radius: 4.64px;
	border-style: none;
	font-family: 'Lexend Deca', sans-serif;
	font-size: 21px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: #FFFFFF;
	&:disabled {
		opacity: 0.7;
	}
}
input {
	width: 303px;
	height: 45px;
	background: #FFFFFF;
	color: ${textColor};
	border: 1px solid #D5D5D5;
	border-radius: 5px;
	padding: 0 10px;
	font-family: 'Lexend Deca', sans-serif;
	font-size: 20px;
	display: flex;
	align-items: center;
	margin: 6px 0;
	&::-webkit-input-placeholder{
		color: ${inputColor};
	}
}
h2{
	color: ${darkAccentColor};
	font-size: 23px;
	line-height: 29px;
}
p {
	color: ${textColor};
	font-size: 18px;
	line-height: 22px;
  }
`;

export default GlobalStyle;
