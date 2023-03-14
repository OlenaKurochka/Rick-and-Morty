import React from "react";
import {Link} from "react-router-dom";
import "../style/characters.css"


const Characters = ({ results }) => {
    return(
        <section>
            <div className="characters_container">
                <div className="gallery_container">
                    {(results && results.length > 0) ? (results.map((char) => (
                        <Link className="linkView" to="/characters_details" state={char.id} key={char.id}>
                            <div className="gallery_item">
                                <img className="media" src={char.image} alt="characters_image"/>
                                <div className="text_container">
                                    <h1 className="title">{char.name}</h1>
                                    <p className="description">{char.species}</p>                            
                                </div>
                            </div>
                        </Link>
                    ))) : (
                        <h1 className="title_noResult">No results found!</h1>
                    )}
                </div>
            </div>
            
        </section>
    )
}

export default Characters