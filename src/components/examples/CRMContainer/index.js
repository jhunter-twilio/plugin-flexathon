import React from "react";

import CustomCRMContainer from "./CustomCRMContainer"

export function loadCustomCRMContainer(flex, manager) {

	const options = { sortOrder: -1 };
	flex.CRMContainer
		.Content
		.replace(<CustomCRMContainer key="custom-crm-container" />, options);

}

