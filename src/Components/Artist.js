import React from "react";
import Album from "./Album";

const Artist = ({ name, age, genre, album, img }) => {
	return (
		<div className="main-container">
			<h1 className="artist-item">{name}</h1>
			<div className="artist-item-top">
				<p className="artist-item top-item">Age: {age}</p>
				<p className="artist-item top-item">Genre: {genre}</p>
				<img className="artist-item top-item" src={img} />
			</div>
			<Album album={album} />
			<br />
			<hr />
		</div>
	);
};
export default Artist;
