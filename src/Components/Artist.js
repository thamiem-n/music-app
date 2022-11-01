import React from 'react'
import Album from './Album';
//old
const Artist = ({name, age, genre, album}) => {
    return(
        <div className='artist-container'>
            <h1 className='aritst-item'>{name}</h1>
            <p className='aritst-item' >Age:  {age}</p>
            <p className='aritst-item'>Music Genre: {genre}</p> 
            <Album album={album} />
            <br />
            <hr />
        </div>
    )
}
export default Artist;