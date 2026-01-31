// src/components/TemplateScripts.tsx
"use client";

import { useEffect } from "react";
import $ from "jquery";

export default function TemplateScripts() {
	useEffect(() => {
		// Dynamically import your JS file
		import("@/assets/js/tidytouch.js");
	}, []);

	return null;
}
