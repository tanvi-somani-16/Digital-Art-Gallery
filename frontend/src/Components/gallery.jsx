import React from 'react'
import "./gallery.css";

const categories = [
  {
    title: "Digital Art",
    description: "Explore stunning digital art from talented artists",
    link: "/",
    image: "/images/digital-painting.jpg",
  },
  {
    title: "3D Art",
    description: "Discover amazing 3D artwork and sculptures",
    link: "/",
    image: "/images/3d-art.jpg",
  },
  {
    title: "Painting & Sketching",
    description: "Experience the beauty of hand-drawn paintings and sketches",
    link: "/",
    image: "/images/painting-sketching.jpg",
  },
  {
    title: "Photography",
    description: "Capture breathtaking moments through photography",
    link: "/",
    image: "/images/photography.jpg",
  },
];

const Gallery = () => {
  return (
    <div className="gallery">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-list">
        {categories.map((category, index) => (
          <div key={index} className="gallery-item">
            <a href={category.link} className="gallery-link">
              <div className="gallery-card">
                <img
                  src={category.image}
                  alt={category.title}
                  className="gallery-image"
                />
                <div className="gallery-info">
                  <h3 className="gallery-category-title">{category.title}</h3>
                  <p className="gallery-description">{category.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
