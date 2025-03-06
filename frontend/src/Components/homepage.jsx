import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom'; 
import "./homepage.css";
import slideimg from "./slideimg"; 

const images = slideimg; 
console.log(images);

const Homepage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <div className="logo">
              <span className="logo-text">ArtVista</span>
            </div>
            <div className="navbar-links">
              <a href="/" className="navbar-link">
                Home
              </a>
              <a href="/contact" className="navbar-link">
                Contact
              </a>
              <a href="/aboutus" className="navbar-link">
                About Us
              </a>
              <a href="/profile" className="navbar-link">
                Profile
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Where Art Comes to Life</h1>
            <p className="hero-description">
              Explore a curated collection of contemporary art from talented
              artists around the globe. Our gallery showcases innovative works
              that push the boundaries of creativity.
            </p>
            <Link to="/gallery">  {/* Use Link component */}
              <button className="explore-button">Explore Gallery</button>
            </Link>
          </div>
          <div className="hero-image">
            {/* Image Slider */}
            <div className="slider-container">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={images[index].src}
                  alt={`Slide ${index + 1}`}
                  className="slider-image"
                />
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button onClick={prevSlide} className="slider-button left">
                <ChevronLeft />
              </button>

              <button onClick={nextSlide} className="slider-button right">
                <ChevronRight />
              </button>

              {/* Dots Indicator */}
              <div className="slider-dots">
                {images.map((_, i) => (
                  <div
                    key={i}
                    className={`slider-dot ${i === index ? "active" : ""}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h4 className="footer-title">ArtVista</h4>
            <p className="footer-description">
              Showcasing the best in artistic creativity
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 ArtVista. All rights reserved.</p>
          <p>Made with ❤️ from our team</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
