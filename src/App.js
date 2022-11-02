import React, { useState } from "react";
import Artist from "./Components/Artist";
import artistData from "./Data";
import "./app.css";

const App = () => {
	const renderArtists = () =>
		artistData.map((artist) => (
			<Artist
				name={artist.name}
				age={artist.age}
				genre={artist.genre}
				album={artist.album}
				img={artist.img}
			/>
		));

	return <>{renderArtists()}</>;
};

export default App;
