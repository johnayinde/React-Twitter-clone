import React from "react";
import "./widget.css";
import {
	TwitterShareButton,
	TwitterTimelineEmbed,
	TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from "@material-ui/icons";

function Widget() {
	const tweetId = "1395111813231087620";
	const linktoShare = "";

	return (
		<div className="widgets">
			<div className="widgets_input">
				<Search className="widgets_searchIcon" />
				<input type="text" placeholder="Search twitter" />
			</div>
			<div className="widgets_widgetContainer">
				<h2>Whats happening</h2>
				<TwitterTweetEmbed tweetId={tweetId} />

				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="dixre_developer"
					options={{ height: 400 }}
				/>
				<TwitterShareButton
					url={linktoShare}
					options={{
						text: "#reactjs is awesome",
						via: "twitterEmbed",
					}}
				/>
			</div>
		</div>
	);
}

export default Widget;
