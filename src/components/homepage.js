import React, {useState, useEffect} from "react";
import { Navigate } from "react-router-dom";
import Search from "./search";
import Characters from "./characters";
import Pagination from "./pagination";
import CharactersMobile from "./mobile/characters_mobile";
import SearchMobile from "./mobile/search_mobile";
import { useMatchMedia } from "../hooks/use_match_media";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Logout from "./button_logout";
import logo from "../img/title.png"
import "../style/homepage.css"

const Home = () => {
    const {isMobile, isDesktop } = useMatchMedia();
    let [pageNumber, updatePageNumber] = useState(1);;
    let [fetchedData, updateFetchedData] = useState([]);
    let { info, results } = fetchedData;
    let [search, setSearch] = useState("");
    const [user, loading] = useAuthState(auth);
    let link = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

    useEffect(() => {
      (async function () {
        let data = await fetch(link).then((res) => res.json());
        let dataSort = (data.results).sort((a, b) => (a.name > b.name) ? 1 : -1)
        // console.log(dataSort)
        updateFetchedData(data);
      })();
    }, [link]);

    if (loading) return <h1>Loading...</h1>;
    if (!user) return <Navigate replace to="/" />
    if (user) 
      return (
        <div>
          <Logout />  

          {isMobile && 
          <div>
            <div className="title_container_mobile">
              <img className="logo_mobile" src={logo} alt="logo"/>
            </div>
            <SearchMobile setSearch={setSearch} updatePageNumber={updatePageNumber}/> 
            <CharactersMobile page="/" results={results} />
          </div> 
          }
        
          {isDesktop && 
            <div>
              <div className="title_container">
                <img className="logo" src={logo} alt="logo"/>
              </div>
              <Search setSearch={setSearch} updatePageNumber={updatePageNumber}/> 
              <Characters page="/" results={results} />
            </div>
          }
          
          <Pagination info={info} pageNumber={pageNumber} updatePageNumber={updatePageNumber} />

        </div>
      );
  };

export default Home