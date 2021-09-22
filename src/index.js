// https://www.npmjs.com/package/react-canvas-annotation

import GlobalStyle from "./components/canvas/GlobalStyle.styles";
import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import Canvas from "./components/canvas/Canvas";
ReactDOM.render(
	<>
		<GlobalStyle />
		<Canvas />
	</>,
	document.getElementById("root")
);
