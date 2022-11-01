import React, { useState } from 'react'


const Album = ({ album }) => {

    const [like, setLike] = useState(false)
    const [allAlbums, setAllAlbums] = useState(album)
    
    const toggleLike = () => {
        setLike(prev => prev ? false : true);
    }

    const updateAlbum = (e) => {
        e.preventDefault();
        const newAlbum = e.target.name.value;
        setAllAlbums(prev => [...prev, newAlbum])
    }

    return (
        <div className="artist-album">
            <p>Albums:</p>
            <ul role="main" className='aritst-item' >    
            

                {allAlbums.map(album => {
                    return ( <>
                    <li role="list" >{album}</li>
                    </>)
                }
                )}
            </ul>
            <button className='aritst-item like-button' style={{color: like ? "red" : "green"}} onClick={toggleLike} >{like ? "Dislike" : "Like"}</button>

            <form onSubmit={updateAlbum} className='aritst-item new-album-form'> 
                <label htmlFor="name">Add Album </label>
                <input role="input" type="text" id="name" required />
                <button className='aritst-item'>Submit</button>
                {/* <input type="submit" value="submit"/> */}


            </form>

        </div>
    )
}
export default Album;