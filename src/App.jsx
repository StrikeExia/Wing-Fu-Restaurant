import { useEffect, useState } from "react";
import logo from "./images/WingFu-Logo.png";
import menuPageOne from "./images/menu1.png";
import menuPageTwo from "./images/menu2.png";
import { useLiveHours, SpecialNotices, ScheduleRows } from './LiveHours';

const menuPages = [
  { src: menuPageOne, title: "Group dinners and family meals" },
  { src: menuPageTwo, title: "Full à la carte menu" },
];

function App() {
  const hours = useLiveHours();
  const [openMenuPage, setOpenMenuPage] = useState(null);

  useEffect(() => {
    if (openMenuPage === null) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpenMenuPage(null);
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [openMenuPage]);

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Wing Fu Restaurant home">
          <span className="wordmark-main">Wing Fu</span>
          <span className="wordmark-sub">Restaurant</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#menu">Menu</a>
          <a href="#hours">Hours</a>
        </nav>
        <a className="header-call" href="tel:+19028833188">Call to order</a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">Delicious<br />Chinese Food</h1>
            <p className="hero-service">
              Takeout and dine-in available
              <span>No delivery · See our hours below</span>
            </p>
          </div>

          <div className="hero-mark" aria-hidden="true">
            <img src={logo} alt="" />
          </div>
        </section>

        <section className="menu-section" id="menu" aria-labelledby="menu-title">
          <SpecialNotices hours={hours} />
          <div className="section-heading">
            <h2 id="menu-title">Our menu</h2>
            <p>Browse our current menu below. Tap or click either page to view it full size.</p>
          </div>

          <div className="menu-grid">
            {menuPages.map((page, index) => (
              <button
                className="menu-card"
                key={page.title}
                type="button"
                onClick={() => setOpenMenuPage(index)}
                aria-label={`Open ${page.title}`}
              >
                <span className="menu-image-wrap">
                  <img src={page.src} alt={`Wing Fu menu page ${index + 1}: ${page.title}`} />
                </span>
              </button>
            ))}
          </div>
          <p className="menu-note">Prices may be subject to change.</p>
        </section>

        <section className="visit-section" id="hours" aria-labelledby="visit-title">
          <div className="visit-intro">
            <p className="eyebrow">Come by or call ahead</p>
            <h2 id="visit-title">Good food is just around the corner.</h2>
            <p>We’re conveniently located at Exit 8 off Highway 102 in the Elmsdale Shopping Plaza.</p>
            <a className="text-link" href="tel:+19028833188">Call 902-883-3188 <span aria-hidden="true">→</span></a>
          </div>

          <div className="visit-card">
            <div className="visit-row">
              <p>Takeout</p>
              <div>
                <ScheduleRows hours={hours} service="restaurant" />
              </div>
            </div>
            <div className="visit-row">
              <p>Dine-in</p>
              <div>
                <ScheduleRows hours={hours} service="dining" />
              </div>
            </div>
            <div className="visit-row">
              <p>Address</p>
              <address>160–269 Highway 214<br />Elmsdale, NS B2S 1K1</address>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <span className="footer-name">Wing Fu Restaurant</span>
          <span>Chinese food in Elmsdale, Nova Scotia</span>
        </div>
        <a href="https://www.facebook.com/groups/500203920068942" target="_blank" rel="noreferrer">Facebook</a>
      </footer>

      {openMenuPage !== null && (
        <div
          className="menu-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${menuPages[openMenuPage].title} menu page`}
          onClick={() => setOpenMenuPage(null)}
        >
          <button className="modal-close" type="button" onClick={() => setOpenMenuPage(null)} aria-label="Close menu">
            Close <span aria-hidden="true">×</span>
          </button>
          <img
            src={menuPages[openMenuPage].src}
            alt={`Wing Fu menu page ${openMenuPage + 1}: ${menuPages[openMenuPage].title}`}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default App;
