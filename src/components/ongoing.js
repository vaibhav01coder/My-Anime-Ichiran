import { useState, useEffect } from "react";
import AnimeCard from "./animeCards";

function Ongoing() {
  const popularURL = "https://api.jikan.moe/v4/seasons/now?limit=5" 
  
  const [now, setNow] = useState([]);
    
  const fetchTopAnime = () => {
    fetch(popularURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNow(data.data);
      });
  };
  useEffect(() => {
    fetchTopAnime();
  }, []);
  
  return (
    <div>
      <div className="ongoing-anime-nav">
        <div className="ongoing row">
          <div className="col-lg-10 col-sm-8">
            <p>Ongoing Anime</p>
          </div>
          <div className="col-lg-2 col-sm-4 all">
            <div type="button">
              View All <i className="fa-solid fa-forward"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="anime-card-view">
        {now.map((now) => (
          <AnimeCard all={now} key={now.mal_id} />
        ))}
      </div>
    </div>
  );
}
export default Ongoing;
