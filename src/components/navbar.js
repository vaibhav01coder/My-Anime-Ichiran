import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [valSearch, setValSearch] = useState("");
  const navigate = useNavigate();

  function searchForm(e) {
    e.preventDefault();
    const new_valSearch = valSearch.replaceAll(" ", "%20");
    navigate(`/search?q=${new_valSearch}`);
    window.location.reload();
  }

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg anime-nav">
        <div className="container-xl row">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbars"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbars">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/" className="nav-item nav-link">
                <i className="fa-solid fa-house"></i> Home
              </Link>
              <Link to="/top-anime" className="nav-item nav-link">
                Top Anime
              </Link>
            </ul>
            <div className="search-form">
              <form className="form" onSubmit={searchForm}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  autoComplete="off"
                  onChange={(e) => setValSearch(e.target.value)}
                  value={valSearch}
                  required
                />
                <button type="submit" className="btn btn-primary src-btn">
                  GO
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;