import React, { createContext, useState } from "react";
import artistData from "../Data";

export const ArtistContext = createContext();

export const ArtistProvider = (props) => {
	const [artistsInfo, setArtistsInfo] = useState(artistData);

	return (
		<ArtistContext.Provider value={[artistsInfo, setArtistsInfo]}>
			{props.children}
		</ArtistContext.Provider>
	);
};
