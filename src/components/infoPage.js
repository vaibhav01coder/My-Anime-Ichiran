import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function InfoPage() {
  const location = useLocation();
  const animeId = new URLSearchParams(location.search).get("q");
  const infoURL = "https://api.jikan.moe/v4/anime/" + animeId + "/full";

  const [info, setInfo] = useState([]);
  const [image, setImg] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [open, setOpen] = useState([]);
  const [end, setEnd] = useState([]);
  const [genres, setGenres] = useState([]);
  const [themes, setThemes] = useState([]);
  const [demo, setDemo] = useState([]);
  const [stu, setStu] = useState([]);
  const [prod, setProd] = useState([]);
  const [lisense, setLisense] = useState([]);

  const fetchImg = () => {
    fetch(infoURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setImg(data.data.images.jpg);
    });
  };
  const fetchTrailer = () => {
    fetch(infoURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTrailer(data.data.trailer);
      });
  };
  const fetchInfo = () => {
    fetch(infoURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInfo(data.data);
      });
  };
  const fetchopen = () => {
    fetch(infoURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setOpen(data.data.theme.openings);
      });
  };
  const fetchend = () => {
    fetch(infoURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEnd(data.data.theme.endings);
      });
  };
  const fetchgen = () => {
    fetch(infoURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGenres(data.data.genres);
      });
  };
  const fetchtheme = () => {
    fetch(infoURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setThemes(data.data.themes);
      });
  };
  const fetchdemo = () => {
    fetch(infoURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDemo(data.data.demographics);
      });
  };
  const fetchstu = () => {
    fetch(infoURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setStu(data.data.studios);
      });
  };
  const fetchprod = () => {
    fetch(infoURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProd(data.data.producers);
      });
  };
  const fetchlis = () => {
    fetch(infoURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLisense(data.data.licensors);
      });
  };

  useEffect(() => {
    fetchInfo();
    fetchImg();
    fetchTrailer();
    fetchopen();
    fetchend();
    fetchgen();
    fetchtheme();
    fetchdemo();
    fetchlis();
    fetchstu();
    fetchprod();
  }, []);

  return (
    <div>
      <div className="ongoing-anime-nav">
        <div className="info-h2 row">
          <div className="col-lg-12 col-sm-8">
            <h5>
              {info.title} ( {info.title_japanese} )
            </h5>
          </div>
        </div>
      </div>

      <div className="info">
        <div className="row r1">
          <div className="col-lg-2 info-img">
            <img src={image.image_url} alt="name" />
          </div>
          <div className="col-lg-6 info-stats">
            <div className="container text-center">
              <div className="row">
                <div className="col-sm-2">
                  <span className="info-score">Score</span>
                  <div>
                    <h1>{info.score || "N/A"}</h1>
                  </div>
                  <div className="users">Users {info.scored_by}</div>
                </div>
                <div className="col-sm-10">
                  <div className="row">
                    <div className="col-8 col-sm-6">
                      Ranked:{" "}
                      <span className="info-score">#{info.rank || "N/A"}</span>
                    </div>
                    <div className="col-4 col-sm-6">
                      Popularity:{" "}
                      <span className="info-score">#{info.popularity}</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8 col-sm-6 info-st">{info.status}</div>
                    <div className="col-4 col-sm-6 info-st">
                      ⭐ {info.favorites}
                    </div>
                    <div className="col-4 col-sm-6">
                      <div className="row">
                        <div className="col-4 col-sm-6 info-st">
                          {info.type}
                        </div>
                        {stu.map((mp) => (
                          <div className="col-4 col-sm-6 info-st">
                            {mp.name}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-4 col-sm-6 info-st">
                      {info.members} members
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="add-anime"></div>
          </div>
          <div className="col-lg-3 info-trailer">
            Trailer/Clip
            <hr />
            {trailer.embed_url ? (
              <iframe
                title={trailer.youtube_id}
                width="320"
                height="200"
                src={trailer.embed_url}
                className="youtube"
                allowFullScreen
                allow="picture-in-picture"
              />
            ) : (
              "Currently Unavailable"
            )}
          </div>
        </div>
        <div className="row r2">
          <div className="col-lg-2 info-names">
            <div className="row">
              <div className="col-8 col-sm-6 names-table">Title :</div>
              <div className="col-4 col-sm-6 names-table">
                {info.title || "N/A"}
              </div>
              <div className="col-8 col-sm-6 names-table">English :</div>
              <div className="col-4 col-sm-6 names-table">
                {info.title_english || "N/A"}
              </div>
              <div className="col-8 col-sm-6 names-table">Japanese :</div>
              <div className="col-4 col-sm-6 names-table">
                {info.title_japanese || "N/A"}
              </div>
              <div className="col-4 col-sm-6 names-table">Episodes :</div>
              <div className="col-4 col-sm-6 names-table">
                {info.episodes || "N/A"}
              </div>
              <div className="col-4 col-sm-6 names-table">Type :</div>
              <div className="col-4 col-sm-6 names-table">
                {info.type || "N/A"}
              </div>
              <div className="col-4 col-sm-6 names-table">Source :</div>
              <div className="col-4 col-sm-6 names-table">
                {info.source || "N/A"}
              </div>
              <div className="col-4 col-sm-6 names-table">Status :</div>
              <div className="col-4 col-sm-6 names-table">
                {info.status || "N/A"}
              </div>
              <div className="col-4 col-sm-6 names-table">Year :</div>
              <div className="col-4 col-sm-6 names-table">
                {info.year && info.season
                  ? info.year + "  " + info.season
                  : "Unavailable"}
              </div>
              <div className="col-4 col-sm-6 names-table">Duration :</div>
              <div className="col-4 col-sm-6 names-table">
                {info.duration || "N/A"}
              </div>
              <div className="col-4 col-sm-6 names-table">Rating :</div>
              <div className="col-4 col-sm-6 names-table">
                {info.rating || "N/A"}
              </div>
              <div className="col-4 col-sm-6 names-table">Users :</div>
              <div className="col-4 col-sm-6 names-table">
                {info.scored_by || "N/A"}
              </div>
              <div className="col-4 col-sm-6 names-table">Members :</div>
              <div className="col-4 col-sm-6 names-table">
                {info.members || "N/A"}
              </div>
            </div>
          </div>
          <div className="col-lg-9 info-bk">
            <h4>Synopsis</h4>
            <hr />
            <p className="info-title">{info.synopsis || "N/A"}</p>
            <h4>Background</h4>
            <hr />
            <p className="info-title">{info.background || "N/A"}</p>
          </div>
        </div>
        <div className="row r3">
          <div className="col-lg-8 info-names info-theme">
            <div className="row">
              <div className="col-4 col-sm-6 info-type">
                <h5>Openings</h5>
                <hr />
                {open.map((mp) => (
                  <div className="theme">{mp}</div>
                ))}
              </div>
              <div className="col-4 col-sm-6 info-type">
                <h5>Endings</h5>
                <hr />
                {end.map((mp) => (
                  <div className="theme">{mp}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-3 info-bk-gen">
            <h5>Genres</h5>
            <hr />
            <div className="row">
              {demo.map((mp) => (
                <div className="genres col-lg-3">{mp.name}</div>
              ))}
              {genres.map((mp) => (
                <div className="genres col-lg-3">{mp.name}</div>
              ))}
              {themes.map((mp) => (
                <div className="genres col-lg-3">{mp.name}</div>
              ))}
            </div>
            <div className="row">
              <div className="col-4 col-sm-6 names-st">
                <b><h6>Producers</h6></b> <hr className="hr-st" />
              </div>
              <div className="col-4 col-sm-6 names-st">
                <b><h6>Licensors</h6></b> <hr className="hr-st" />
              </div>
              {prod.map((mp) => (
                <div className="col-4 col-sm-6 names-st">{mp.name}</div>
              ))}
              {lisense.map((mp) => (
                <div className="col-4 col-sm-6 names-st">{mp.name}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;