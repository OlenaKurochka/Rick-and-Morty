import React, {useState, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import "../../style/mobile/characters_details_mobile.css"

export default function CharactersDetailsMobile(props){
    const location = useLocation();
    let IDCharacters = location.state;
    // console.log(IDCharacters)
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const [char, setChar] = useState([]);
    const [originName, setOriginName ]= useState([])
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${IDCharacters}`)
           .then((res) => res.json())
           .then((data) => {
            //  console.log(data);
            setOriginName(data.origin.name); 
            setChar((data));
             
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
     

    
    return(
        <section>
            <div className="characters_details_container_mobile">
                <div className="header_container_mobile">
                    <div className="header_container">
                        <button onClick={goBack} className="go_back">GO BACK</button>                    
                    </div>
                </div>

                <div className="main_container_mobile">
                    <div className="characters_info_mobile">
                        <img className="characters_info_img_mobile" src={char.image} alt="characters_image"/>
                        <h1 className="characters_info_name_mobile">{char.name}</h1>
                    </div>

                    <div className="information_container_mobile">
                        <h2 className="information_container_title_mobile">Informations</h2>
                        <div className="information_container_info_mobile">
                            <div className="info_section_mobile">
                                <h3 className="info_section_title_mobile">Gender</h3>
                                <p className="info_section_text_mobile">{char.gender}</p>
                            </div>
                            <div className="info_section_mobile">
                                <h3 className="info_section_title_mobile">Status</h3>
                                <p className="info_section_text_mobile">{char.status}</p>
                            </div>
                            <div className="info_section_mobile">
                                <h3 className="info_section_title_mobile">Species</h3>
                                <p className="info_section_text_mobile">{char.species}</p>
                            </div>
                            <div className="info_section_mobile">
                                <h3 className="info_section_title_mobile">Origin</h3>
                                <p className="info_section_text_mobile">{originName}</p>
                            </div>
                            <div className="info_section_mobile">
                                <h3 className="info_section_title_mobile">Type</h3>
                                <p className="info_section_text_mobile">{char.type}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}