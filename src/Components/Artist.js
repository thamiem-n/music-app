import React from "react";
import Album from "./Album";

const Artist = ({ name, age, genre, album, img }) => {
	return (
		<div className="artist-container">
			<h1 className="aritst-item">{name}</h1>
			<div className="artist-item-top">
				<p className="aritst-item top-item">Age: {age}</p>
				<p className="aritst-item top-item">Music Genre: {genre}</p>
				<img className="aritst-item top-item" src={img} />
			</div>
			<Album album={album} />
			<br />
			<hr />
		</div>
	);
};
export default Artist;
