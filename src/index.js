import React from "react";
import { render } from "react-dom";

import MonacoEditor from "react-monaco-editor";

render(
	<MonacoEditor
		width="100%"
		height={800}
		theme="vs-dark"
		language="handlebars"
	/>,
	document.getElementById("app")
);
