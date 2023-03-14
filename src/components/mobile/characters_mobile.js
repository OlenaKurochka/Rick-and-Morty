import React from "react";
import {Link} from "react-router-dom";
import "../../style/mobile/characters_mobile.css"

const CharactersMobile = ({ results }) => {
    
    const onClickHandler = event =>{
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }
    
    return(
        <section>
            <div className="characters_container_mobile">
                <div className="gallery_container_mobile">
                    {(results && results.length > 0) ? (results.map((char) => (
                        <Link className="linkView_mobile" to="/characters_details" state={char.id} key={char.id}>
                            <div className="gallery_item_mobile">
                                <img className="media_mobile" src={char.image} alt="characters_image"/>
                                <div className="text_container_mobile">
                                    <h1 className="title_mobile">{char.name}</h1>
                                    <p className="description_mobile">{char.species}</p>                            
                                </div>
                            </div>
                        </Link>
                    ))) : (
                        <h1 className="title_noResult_mobile">No results found!</h1>
                    )}
                </div>
            </div>

            <button onClick={onClickHandler} className="up_btn">Up</button>
            
        </section>
    )
}

export default CharactersMobile