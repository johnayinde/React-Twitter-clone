import React from "react";
import "./sidebarOption.css";

function SidebarOption({ active, Icon, text }) {
	return (
		<div className={`sidebar_option ${active && "sidebarOption-active"}`}>
			<Icon />
			<h2>{text}</h2>
		</div>
	);
}

export default SidebarOption;
