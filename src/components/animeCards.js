import { useNavigate } from "react-router-dom";

function AnimeCard(props) {
  const navigate = useNavigate();
  function clickInfo(e) {
    e.preventDefault();
    navigate(`/info?q=${props.all.mal_id}`);
  }
  return (
    <div className="anime-card col-lg-2 col-sm-12" type="submit" onClick={clickInfo}>
      <div>
        <img src={props.all.images.webp.image_url} alt={props.all.title} />
        <div className="rating">{props.all.score || "N/A"}</div>
      </div>
      <div className="card-info">
        <div className="name">{props.all.title_english || props.all.title}</div>
        <hr></hr>
        <div className="rank row">
          <div className="col-lg-6">
            <span className="rnk">{props.all.rank || "N/A"}</span>
            <br></br>Rank
          </div>
          <div className="col-lg-6">
            <span className="pop">{props.all.popularity || "N/A"}</span>
            <br></br>Popularity
          </div>
        </div>
        <hr></hr>
        <div className="foot-card row">
          <div className="col-lg-4 status">{props.all.status}</div>
          <div className="col-lg-4 card-type">{props.all.type}</div>
          <div className="col-lg-4">
            <span className="ep">{props.all.episodes || "YTD"}</span> Ep
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;