import React, { useContext } from "react";
import Artist from "./Components/Artist";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./Components/Home";
import Ranking from "./Components/Ranking";
import BackButton from "./Components/BackButton";
import ViewArtist from "./Components/ViewArtist";
import { ArtistContext } from "./Components/ArtistContext";

const App = () => {
	const [artistsInfo, setArtistsInfo] = useContext(ArtistContext);

	const renderArtists = () =>
		artistsInfo.map((artist) => (
			<Artist
				name={artist.name}
				age={artist.age}
				genre={artist.genre}
				album={artist.album}
				img={artist.img}
			/>
		));

	return (
		<>
			<Navbar />
			<BackButton />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/artists" element={renderArtists()}></Route>
				<Route path="/rankings" element={<Ranking artistsInfo={artistsInfo} />}>
					<Route path=":artist" element={<ViewArtist />}></Route>
				</Route>
			</Routes>
		</>
	);
};

export default App;
