import { Avatar } from "@material-ui/core";
import {
	ChatBubbleOutline,
	FavoriteBorder,
	Publish,
	Repeat,
	VerifiedUser,
} from "@material-ui/icons";
import React, { forwardRef } from "react";
import "./post.css";
// import logoImg from "../../img.jpg";

const Post = forwardRef(
	({ displayName, username, verified, text, image, avatar }, ref) => {
		return (
			<div className="post" ref={ref}>
				<div className="post_avatar">
					<Avatar />
				</div>
				<div className="post_body">
					<div className="post_header">
						<div className="post_headerText">
							<h3>
								{displayName}{" "}
								<span className="post_headerSpecial">
									{verified && <VerifiedUser className="post_badge" />}@
									{username}
								</span>
							</h3>
						</div>
						<div className="post_description">
							<p>{text}</p>
						</div>
					</div>
					<img src={image} alt="" />
					<div className="post_footer">
						<ChatBubbleOutline fontSize="small" />
						<Repeat fontSize="small" />
						<FavoriteBorder fontSize="small" />
						<Publish fontSize="small" />
					</div>
				</div>
			</div>
		);
	}
);

export default Post;
