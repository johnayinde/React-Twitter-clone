import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./tweetbox.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import firebaseApp from "./../../firebase/firebase";

function Tweetbox() {
	const db = getFirestore(firebaseApp);
	const [tweetMessage, settweetMessage] = useState("");
	const [tweetImage, settweetImage] = useState("");

	const postTweet = (e) => {
		e.preventDefault();
		// post to data base
		addDoc(collection(db, "posts"), {
			displayName: "Ayinde john",
			username: "ayindejo",
			verified: true,
			text: tweetMessage,
			image: tweetImage,
			avatar: "",
		});
		settweetMessage(" ");
		settweetImage("");
	};
	return (
		<div className="tweetBox">
			<form action="">
				<div className="tweetBox_input">
					<Avatar />
					<input
						value={tweetMessage}
						onChange={(e) => settweetMessage(e.target.value)}
						type="text"
						placeholder="What's happening"
					/>
				</div>
				<input
					value={tweetImage}
					onChange={(e) => settweetImage(e.target.value)}
					className="tweetBox_imageInput"
					type="text"
					placeholder="Optional: Enter image URL"
				/>
				<Button onClick={postTweet} className="tweetBox_button">
					Tweet
				</Button>
			</form>
		</div>
	);
}

export default Tweetbox;
