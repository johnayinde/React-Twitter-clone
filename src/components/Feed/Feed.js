import React, { useState, useEffect } from "react";
import "./feed.css";
import FlipMove from "react-flip-move";
import Tweetbox from "./Tweetbox";
import Post from "./../Post/Post";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";

import firebaseApp from "./../../firebase/firebase";

function Feed() {
	const [post, setPosts] = useState([]);

	useEffect(() => {
		const db = getFirestore(firebaseApp);

		// get post from database
		onSnapshot(collection(db, "posts"), (snapshot) => {
			setPosts(
				snapshot.docs.map((doc) => ({
					post: doc.data(),
					id: doc.id,
				}))
			);
		});
	});
	return (
		<div className="feed">
			<div className="feed_header">
				<h2>HOME</h2>
			</div>
			<Tweetbox />
			<FlipMove>
				{post.map(({ id, post }) => (
					<Post
						key={id}
						displayName={post.displayName}
						username={post.username}
						verified={post.verified}
						text={post.text}
						image={post.image}
					/>
				))}
			</FlipMove>
		</div>
	);
}

export default Feed;
