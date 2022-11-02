import React, { useState } from "react";
import Artist from "./Components/Artist";
import artistData from "./Data";
import "./app.css";
import { Routes, Route } from 'react-router-dom'
import Navbar from "./layouts/Navbar";
import Home from "./Components/Home"
import Ranking from "./Components/Ranking"
import BackButton from "./Components/BackButton";

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

	return (<>
		<Navbar /> 
		<BackButton />
		<Routes>
		<Route path="/" element={<Home />}></Route>
		<Route path="/artists" element={renderArtists()}></Route>
		<Route path="/rankings" element={<Ranking/>}></Route>
		</Routes>
		

	</>)
};

export default App;
