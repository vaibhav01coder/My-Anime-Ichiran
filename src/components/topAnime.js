import { useState, useEffect } from "react";
import AnimeCard from "./animeCards";

function TopAnime() {
  const TopAnimeURL = "https://api.jikan.moe/v4/top/anime?page=1";

  const [topAnimes, setTopAnimes] = useState([]);

  const fetchTopAnime = () => {
    fetch(TopAnimeURL)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setTopAnimes(data.data)
      })
  }
  useEffect(() => {
    fetchTopAnime()
  }, []);

  return (
    <div>
      <div className="upcoming-anime-nav">
        <div className="upcoming row">
          <div className="col-lg-10 col-sm-8">
            <p>Top Anime</p>
          </div>
          {/* <div className="col-lg-2 col-sm-4 all">
            <div type="button">
              View All <i className="fa-solid fa-forward"></i>
            </div>
          </div> */}
        </div>
      </div>

      <div className="anime-card-view">
        {topAnimes.map((topAnime) => (
          <AnimeCard all = {topAnime} key = {topAnime.mal_id} />
        ))}
      </div>
    </div>
  );
}

export default TopAnime;