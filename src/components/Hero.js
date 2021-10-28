import React from "react";
import { Link } from "gatsby";
import socialLinks from "../constants/social_links";
// import heroImg from "../assets/images/hero.svg";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Tautu Sorin</h1>
            <h4>Freelance Web Junkie - Problem Solver!</h4>
            <Link to="/contact" className="btn">
              Contact
            </Link>
            <div className="social-links">
              {socialLinks.map(link => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </header>
  );
};

export default Hero;
