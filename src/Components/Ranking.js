import React from "react";
import { Link, Outlet } from "react-router-dom";

const Ranking = ({ artistsInfo }) => {
	return (
		<div className="main-container">
			<h1 className="center">Current Rankings</h1>
			<ul className="rankings">
				{artistsInfo.map((artist) => (
					<Link to={artist.name} className="rankings-item">
						<li>{artist.name}</li>
					</Link>
				))}
				<Outlet />
			</ul>
		</div>
	);
};

export default Ranking;
