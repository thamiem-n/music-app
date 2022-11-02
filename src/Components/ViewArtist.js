import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ArtistContext } from "./ArtistContext";

const ViewArtist = () => {
	const { artist } = useParams();
	const [artistsInfo, setArtistsInfo] = useContext(ArtistContext);
	const filteredData = artistsInfo.filter((a) => a.name === artist);
	return (
		<div className="main-container">
			<h1>{filteredData[0].name}</h1>
			<p className="artist-item">{filteredData[0].age}</p>
			<p className="artist-item">{filteredData[0].genre}</p>
			<h4 className="artist-item">Albums:</h4>
			<ul>
				{filteredData[0].album.map((album) => (
					<li>{album}</li>
				))}
			</ul>
			<img src={filteredData[0].img} width="100%" />
		</div>
	);
};

export default ViewArtist;
