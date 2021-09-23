import {
	BookmarkBorder,
	HomeOutlined,
	ListAlt,
	MailOutline,
	MoreHoriz,
	NotificationsNone,
	PermIdentity,
	Search,
	Twitter,
} from "@material-ui/icons";
import React from "react";
import SidebarOption from "./SidebarOption";
import "./sidebar.css";
import { Button } from "@material-ui/core";

function Sidebar() {
	return (
		<div className="sidebar">
			<Twitter className="sidebar_twitterIcon" />
			<SidebarOption active Icon={HomeOutlined} text="Home" />
			<SidebarOption Icon={Search} text="Explore" />
			<SidebarOption Icon={NotificationsNone} text="Notification" />
			<SidebarOption Icon={MailOutline} text="Message" />
			<SidebarOption Icon={BookmarkBorder} text="Bookmaks" />
			<SidebarOption Icon={ListAlt} text="Lists" />
			<SidebarOption Icon={PermIdentity} text="Profile" />
			<SidebarOption Icon={MoreHoriz} text="More" />
			<Button variant="outlined" className="sidebar_tweet" fullWidth>
				Tweet
			</Button>
		</div>
	);
}

export default Sidebar;
