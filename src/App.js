import React, { useState } from "react";
import "./App.css";

import soloLeveling from "./images/solo-leveling.jpg";
import demonSlayer from "./images/demon-slayer.jpg";
import horimiya from "./images/horimiya.jpg";
import yourLieInApril from "./images/your-lie-in-april.jpg";
import onePiece from "./images/one-piece.jpg";
import hunterXHunter from "./images/hunter-x-hunter.jpg";
import jujutsuKaisen from "./images/jujutsu-kaisen.jpg";
import bleach from "./images/bleach.jpg";
import frieren from "./images/frieren.jpg";
import blackClover from "./images/black-clover.jpg";

const genres = [
  {
    name: "Action",
    anime: [
      {
        title: "Solo Leveling",
        image: soloLeveling,
        year: "2024",
        genre: "Action • Fantasy",
        description:
          "Si Sung Jin-Woo ang pinakamahinang hunter sa mundo. Matapos ang isang misteryosong pangyayari, nagsimula ang kanyang paglalakbay upang maging pinakamalakas na hunter."
      },
      {
        title: "Demon Slayer",
        image: demonSlayer,
        year: "2019",
        genre: "Action • Adventure",
        description:
          "Si Tanjiro Kamado ay sumali sa Demon Slayer Corps upang iligtas ang kanyang kapatid na si Nezuko at harapin ang mga demonyo."
      }
    ]
  },

  {
    name: "Romance",
    anime: [
      {
  title: "Horimiya",
  image: horimiya,
  year: "2021",
  genre: "Romance • School",
  description:
    "Isang heartwarming story tungkol kina Hori at Miyamura habang unti-unti nilang nakikilala ang tunay na pagkatao ng isa't isa."
},
      {
        title: "Your Lie in April",
        image: yourLieInApril,
        year: "2014",
        genre: "Romance • Drama",
        description:
          "Isang emotional story tungkol sa musika, pagkakaibigan, pag-ibig, at isang pianist na muling natutong tumugtog."
      }
    ]
  },

  {
    name: "Adventure",
    anime: [
      {
        title: "One Piece",
        image: onePiece,
        year: "1999",
        genre: "Adventure • Action",
        description:
          "Sundan ang adventure ni Monkey D. Luffy at ng Straw Hat Pirates sa kanilang paghahanap sa legendary treasure na One Piece."
      },
      {
        title: "Hunter x Hunter",
        image: hunterXHunter,
        year: "2011",
        genre: "Adventure • Action",
        description:
          "Si Gon Freecss ay naglakbay upang maging Hunter at hanapin ang kanyang ama habang nakakaranas ng iba't ibang mapanganib na adventures."
      }
    ]
  },

  {
    name: "Supernatural",
    anime: [
      {
        title: "Jujutsu Kaisen",
        image: jujutsuKaisen,
        year: "2020",
        genre: "Supernatural • Action",
        description:
          "Si Yuji Itadori ay napasok sa mundo ng Jujutsu Sorcerers matapos niyang maging host ng isang napakalakas na cursed object."
      },
      {
        title: "Bleach",
        image: bleach,
        year: "2004",
        genre: "Supernatural • Action",
        description:
          "Si Ichigo Kurosaki ay naging Soul Reaper at nagsimula ang kanyang pakikipaglaban sa mga masasamang espiritu."
      }
    ]
  },

  {
    name: "Fantasy",
    anime: [
      {
        title: "Frieren",
        image: frieren,
        year: "2023",
        genre: "Fantasy • Adventure",
        description:
          "Isang elven mage na nagpatuloy sa kanyang paglalakbay upang mas maunawaan ang buhay at ang mga taong nakilala niya."
      },
      {
        title: "Black Clover",
        image: blackClover,
        year: "2017",
        genre: "Fantasy • Action",
        description:
          "Si Asta ay isang batang walang magic ngunit determinado siyang maging Wizard King at patunayan ang kanyang kakayahan."
      }
    ]
  }
];

const allAnime = genres.flatMap((genre) => genre.anime);

function App() {
  const [genreOpen, setGenreOpen] = useState(false);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [selectedPart, setSelectedPart] = useState(1);
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const goToSection = (id) => {
    setGenreOpen(false);

    setTimeout(() => {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }, 50);
  };

  const watchAnime = (anime) => {
    setSelectedAnime(anime);
    setSelectedPart(1);
  };

  const closeModal = () => {
    setSelectedAnime(null);
    setSelectedPart(1);
  };

  const filteredAnime = allAnime.filter((anime) =>
    anime.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      goToSection("anime");
    }
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">

        <div className="navbar-container">

          <a
            href="#home"
            className="logo"
            onClick={() => {
              setGenreOpen(false);
              setSearchOpen(false);
            }}
          >
            <span>ANIME</span>DUB
          </a>

          <nav className="nav-links">

            <a href="#home">
              Home
            </a>

            <a href="#anime">
              Anime
            </a>

            <a href="#popular">
              Popular
            </a>

            {/* GENRES */}
            <div className="genre-dropdown">

              <button
                className="genre-dropdown-button"
                onClick={() => {
                  setGenreOpen(!genreOpen);
                  setSearchOpen(false);
                }}
              >
                <span>Genres</span>

                <span
                  className={`dropdown-arrow ${
                    genreOpen ? "open" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {genreOpen && (
                <div className="genre-dropdown-menu">

                  {genres.map((genre) => (

                    <button
                      key={genre.name}
                      onClick={() =>
                        goToSection(
                          `genre-${genre.name.toLowerCase()}`
                        )
                      }
                    >

                      <span className="dropdown-icon">
                        {genre.icon}
                      </span>

                      <span>
                        {genre.name}
                      </span>

                    </button>

                  ))}

                </div>
              )}

            </div>

            <a href="#about">
              About
            </a>

          </nav>

          {/* NAVBAR SEARCH */}
          <div
            className={`nav-right ${
              searchOpen ? "search-open" : ""
            }`}
          >

            <div className="navbar-search">

              <button
                className="search-button"
                onClick={() => {
                  setSearchOpen(!searchOpen);
                  setGenreOpen(false);
                }}
                aria-label="Search Anime"
              >
                ⌕
              </button>

              <input
                type="text"
                placeholder="Search anime..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleSearchKeyDown}
              />

              {search && (
                <button
                  className="navbar-search-clear"
                  onClick={() => setSearch("")}
                  aria-label="Clear Search"
                >
                  ×
                </button>
              )}

            </div>

          </div>

        </div>

      </header>

      <main>

        {/* HERO */}
        <section
          className="hero"
          id="home"
        >

          <div className="hero-content">

            <div className="hero-badge">
              TAGALOG DUB
            </div>

            <p className="hero-small-title">
              FEATURED ANIME
            </p>

            <h1>
              Solo
              <br />
              Leveling
            </h1>

            <div className="hero-meta">

              <span>2024</span>
              <span>Action</span>
              <span>Fantasy</span>

            </div>

            <p className="hero-description">
              Si Sung Jin-Woo ang pinakamahinang
              hunter sa mundo. Ngunit matapos ang
              isang misteryosong pangyayari,
              nagsimula ang kanyang paglalakbay
              upang maging pinakamalakas na hunter.
            </p>

            <div className="hero-buttons">

              <button
                className="watch-button"
                onClick={() =>
                  watchAnime(genres[0].anime[0])
                }
              >
                ▶ WATCH NOW
              </button>

              <button
                className="details-button"
                onClick={() => goToSection("anime")}
              >
                BROWSE ANIME
              </button>

            </div>

          </div>

        </section>

        {/* POPULAR ANIME */}
        <section
          className="anime-section"
          id="popular"
        >

          <div className="section-header">

            <div>

              <p className="section-label">
                TRENDING NOW
              </p>

              <h2>
                Popular Anime
              </h2>

            </div>

            <button
              className="view-all"
              onClick={() => goToSection("anime")}
            >
              View All →
            </button>

          </div>

          <div className="anime-grid">

            {allAnime.slice(0, 6).map((anime) => (

              <AnimeCard
                key={anime.title}
                anime={anime}
                onWatch={watchAnime}
              />

            ))}

          </div>

        </section>

        {/* ALL ANIME */}
        <section
          className="anime-section all-anime-section"
          id="anime"
        >

          <div className="section-header">

            <div>

              <p className="section-label">
                ANIME COLLECTION
              </p>

              <h2>
                All Anime
              </h2>

            </div>

            <span className="anime-count">
              {filteredAnime.length} Anime
            </span>

          </div>

          {/* SEARCH BAR REMOVED FROM HERE */}

          {filteredAnime.length > 0 ? (

            <div className="anime-grid">

              {filteredAnime.map((anime) => (

                <AnimeCard
                  key={anime.title}
                  anime={anime}
                  onWatch={watchAnime}
                />

              ))}

            </div>

          ) : (

            <div className="no-results">

              <div className="no-results-icon">
                🔍
              </div>

              <h3>
                Walang nahanap na anime
              </h3>

              <p>
                Walang result para sa{" "}
                <strong>"{search}"</strong>
              </p>

              <button
                onClick={() => setSearch("")}
              >
                CLEAR SEARCH
              </button>

            </div>

          )}

        </section>

        {/* GENRES */}
        <section
          className="genres-section"
          id="genres"
        >

          <div className="section-header center">

            <div>

              <p className="section-label">
                EXPLORE
              </p>

              <h2>
                Browse by Genre
              </h2>

              <p className="genre-instruction">
                I-click ang Genres sa navbar at pumili
                ng genre.
              </p>

            </div>

          </div>

          {/* GENRE SECTIONS */}
          <div className="genre-sections">

            {genres.map((genre) => (

              <section
                className="genre-section"
                id={`genre-${genre.name.toLowerCase()}`}
                key={genre.name}
              >

                <div className="genre-section-header">

                  <div className="genre-heading">

                    <div className="genre-big-icon">
                      {genre.icon}
                    </div>

                    <div>

                      <p className="section-label">
                        GENRE
                      </p>

                      <h2>
                        {genre.name}
                      </h2>

                    </div>

                  </div>

                  <span className="anime-count">
                    {genre.anime.length} Anime
                  </span>

                </div>

                <div className="anime-grid">

                  {genre.anime.map((anime) => (

                    <AnimeCard
                      key={anime.title}
                      anime={anime}
                      onWatch={watchAnime}
                    />

                  ))}

                </div>

              </section>

            ))}

          </div>

        </section>

        {/* ABOUT */}
        <section
          className="about-section"
          id="about"
        >

          <div className="about-content">

            <p className="section-label">
              ABOUT THE WEBSITE
            </p>

            <h2>
              Your Home for
              <br />
              <span>
                Tagalog Dub Anime.
              </span>
            </h2>

            <p>
              AnimeDub is a website project created
              for anime fans who prefer watching their
              favorite series with Tagalog dubbing.
              Browse and discover anime in one place.
            </p>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-container">

          <div className="footer-brand">

            <a
              href="#home"
              className="logo"
            >
              <span>ANIME</span>DUB
            </a>

            <p>
              Your home for Tagalog Dub Anime.
            </p>

          </div>

          <div className="footer-links">

            <div>

              <h4>
                Navigation
              </h4>

              <a href="#home">
                Home
              </a>

              <a href="#anime">
                Anime
              </a>

              <a href="#popular">
                Popular
              </a>

              <a href="#genres">
                Genres
              </a>

            </div>

            <div>

              <h4>
                AnimeDub
              </h4>

              <a href="#anime">
                Browse Anime
              </a>

              <a href="#about">
                About
              </a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 AnimeDub. All rights reserved.
          </p>

          <p>
            Made for Filipino Anime Fans 🇵🇭
          </p>

        </div>

      </footer>

      {/* WATCH MODAL */}
      {selectedAnime && (

        <div className="watch-modal">

          <div
            className="modal-overlay"
            onClick={closeModal}
          ></div>

          <div className="watch-modal-content">

            <button
              className="modal-close"
              onClick={closeModal}
            >
              ×
            </button>

            <div className="modal-poster">

              <img
                src={selectedAnime.image}
                alt={selectedAnime.title}
              />

            </div>

            <div className="modal-info">

              <span className="modal-dub">
                TAGALOG DUB
              </span>

              <h2>
                {selectedAnime.title}
              </h2>

              <p className="modal-meta">
                {selectedAnime.year} •{" "}
                {selectedAnime.genre}
              </p>

              <p className="modal-description">
                {selectedAnime.description}
              </p>

              {selectedAnime.title === "Horimiya" ? (
                <div className="video-player-container">
                  <h3 className="player-heading">Episode 1</h3>

                  <div
                    className="part-buttons"
                    role="group"
                    aria-label="Piliin ang video part"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "10px",
                      flexWrap: "wrap",
                      margin: "0 0 14px"
                    }}
                  >
                    {[1, 2].map((part) => (
                      <button
                        key={part}
                        type="button"
                        onClick={() => setSelectedPart(part)}
                        aria-pressed={selectedPart === part}
                        style={{
                          padding: "10px 18px",
                          borderRadius: "8px",
                          border: selectedPart === part ? "1px solid #b794f6" : "1px solid #51436b",
                          background: selectedPart === part ? "#7c3aed" : "#211a2e",
                          color: "#fff",
                          fontWeight: 700,
                          cursor: "pointer"
                        }}
                      >
                        Part {part}
                      </button>
                    ))}
                  </div>

                  <video
                    key={selectedPart}
                    className="anime-video-player"
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={`Horimiya Episode 1 Part ${selectedPart} video player`}
                  >
                    <source
  src={
    selectedPart === 1 || selectedPart === "1"
      ? "https://res.cloudinary.com/yst0tozn/video/upload/v1792393321/part1.mp4"
      : "https://res.cloudinary.com/yst0tozn/video/upload/v1792393473/part2.mp4"
  }
  type="video/mp4"
/>
                    Hindi suportado ng browser mo ang video playback.
                  </video>
                  <p className="player-note">
                    Horimiya • Episode 1 • Part {selectedPart}
                  </p>
                </div>
              ) : (
                <div className="video-placeholder">
                  <div className="video-icon">▶</div>
                  <h3>Episode Player</h3>
                  <p>Wala pang video para sa anime na ito.</p>
                  <small>Magdagdag ng episode video para mapanood ito rito.</small>
                </div>
              )}

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

function AnimeCard({ anime, onWatch }) {

  return (

    <article className="anime-card">

      <div className="anime-poster">

        <img
          src={anime.image}
          alt={anime.title}
        />

        <div className="poster-gradient"></div>

        <span className="dub-badge">
          TAGALOG DUB
        </span>

        <button
          className="play-button"
          onClick={() => onWatch(anime)}
          aria-label={`Watch ${anime.title}`}
        >
          ▶
        </button>

      </div>

      <div className="anime-info">

        <h3>
          {anime.title}
        </h3>

        <p className="anime-genre">
          {anime.year} • {anime.genre}
        </p>

        <p className="anime-description">
          {anime.description}
        </p>

        <button
          className="watch-small-button"
          onClick={() => onWatch(anime)}
        >
          WATCH NOW
        </button>

      </div>

    </article>

  );
}

export default App;