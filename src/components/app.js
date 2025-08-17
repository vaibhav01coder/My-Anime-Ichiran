import React from "react";
import Navbar from "./navbar";
import Logo from "./logo";
import Home from "./homePage";
import TopAnime from "./topAnime";
import InfoPage from "./infoPage";
import Footer from "./footer";
import { Routes, Route} from "react-router-dom";
import Search from "./search";

function App() {
  return (
    <div>
      <Logo />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-anime" element={<TopAnime />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;