import { useState, useEffect } from "react";
import AnimeCard from "./animeCards";

function Popular() {
  const popularURL = "https://api.jikan.moe/v4/top/anime?limit=5&filter=bypopularity";

  const [popular, setPopular] = useState([]);

  const popularAnime = () => {
    fetch(popularURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPopular(data.data);
      });
  };
  useEffect(() => {
    popularAnime();
  }, []);

  return (
    <div>
      <div className="upcoming-anime-nav">
        <div className="upcoming row">
          <div className="col-lg-10 col-sm-8">
            <p>Popular Anime</p>
          </div>
          <div className="col-lg-2 col-sm-4 all">
            <div type="button">
              View All <i className="fa-solid fa-forward"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="anime-card-view">
        {popular.map((popular) => (
          <AnimeCard all={popular} key={popular.mal_id} />
        ))}
      </div>
    </div>
  );
}

export default Popular;
