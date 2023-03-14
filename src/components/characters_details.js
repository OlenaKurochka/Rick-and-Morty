import React, {useState, useEffect} from "react";
import {useLocation, useNavigate, Navigate} from "react-router-dom";
import "../style/characters_details.css"
import { useMatchMedia } from "../hooks/use_match_media";
import CharactersDetailsMobile from "./mobile/characters_details_mobile";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function CharactersDetails(props){
    const {isMobile, isDesktop } = useMatchMedia();
    const location = useLocation();
    let IDCharacters = location.state;
    // console.log(IDCharacters)
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const [user, loading] = useAuthState(auth);
    const [char, setChar] = useState([]);
    const [originName, setOriginName ]= useState([])
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${IDCharacters}`)
           .then((res) => res.json())
           .then((data) => {
            setOriginName(data.origin.name);
            setChar((data)); 
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
     
     if (loading) return <h1>Loading...</h1>;
     if (!user) return <Navigate replace to="/" />
     if (user)
    return(
        <section>
            {isMobile && 
                <CharactersDetailsMobile />
            }

            {isDesktop && 
                <div className="characters_details_container">
                    <div className="header_container">
                        <button onClick={goBack} className="go_back">GO BACK</button>                    
                    </div>

                    <div className="main_container">
                        <div className="characters_info">
                            <img className="characters_info_img" src={char.image} alt="characters_image"/>
                            <h1 className="characters_info_name">{char.name}</h1>
                        </div>

                        <div className="information_container">
                            <h2 className="information_container_title">Informations</h2>
                            <div className="information_container_info">
                                <div className="info_section">
                                    <h3 className="info_section_title">Gender</h3>
                                    <p className="info_section_text">{char.gender}</p>
                                </div>
                                <div className="info_section">
                                    <h3 className="info_section_title">Status</h3>
                                    <p className="info_section_text">{char.status}</p>
                                </div>
                                <div className="info_section">
                                    <h3 className="info_section_title">Species</h3>
                                    <p className="info_section_text">{char.species}</p>
                                </div>
                                <div className="info_section">
                                    <h3 className="info_section_title">Origin</h3>
                                    <p className="info_section_text">{originName}</p>
                                </div>
                                <div className="info_section">
                                    <h3 className="info_section_title">Type</h3>
                                    <p className="info_section_text">{char.type}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}