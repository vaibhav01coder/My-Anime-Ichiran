import { useState, useEffect } from "react";
import AnimeCard from "./animeCards";

function Upcoming() {
  const upComingURL = "https://api.jikan.moe/v4/seasons/upcoming?limit=5";

  const [up, setUp] = useState([]);

  const fetchTopAnime = () => {
    fetch(upComingURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUp(data.data);
      });
  };
  useEffect(() => {
    fetchTopAnime();
  }, []);

  return (
    <div>
      <div className="upcoming-anime-nav">
        <div className="upcoming row">
          <div className="col-lg-10 col-sm-8">
            <p>Upcoming Anime</p>
          </div>
          <div className="col-lg-2 col-sm-4 all">
            <div type="button">
              View All <i className="fa-solid fa-forward"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="anime-card-view">
        {up.map((up) => (
          <AnimeCard all={up} key={up.mal_id} />
        ))}
      </div>
    </div>
  );
}

export default Upcoming;
