import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const images = ['/plant banner.jpg', '/flower.webp'];
  const [currentImage, setCurrentImage] = useState(0);

  const flowers = [
    { id: 1, name: 'Rose', price: '₦32,500.00', image: 'https://picsum.photos/200/200?random=1' },
    { id: 2, name: 'Tulip', price: '₦28,000.00', image: 'https://picsum.photos/200/200?random=2' },
    { id: 3, name: 'Lily', price: '₦35,000.00', image: 'https://picsum.photos/200/200?random=3' },
    { id: 4, name: 'Sunflower', price: '₦25,000.00', image: 'https://picsum.photos/200/200?random=4' },
  ];

  const pots = [
    { id: 1, name: 'Ceramic Pot', price: '₦15,000.00', image: 'https://picsum.photos/200/200?random=11' },
    { id: 2, name: 'Plastic Pot', price: '₦5,000.00', image: 'https://picsum.photos/200/200?random=12' },
    { id: 3, name: 'Terracotta Pot', price: '₦12,000.00', image: 'https://picsum.photos/200/200?random=13' },
    { id: 4, name: 'Hanging Pot', price: '₦20,000.00', image: 'https://picsum.photos/200/200?random=14' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">
      <div className="banner">
        <img src={images[currentImage]} alt="Beautiful Flowers" />
        <div className="banner-overlay">
          <h1>Welcome to Our Flower Shop</h1>
          <p>Discover exquisite blooms for every moment</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </div>
      <div className="highlighted-flowers">
        <div className="flowers-header">
          <h2>Top Flowers</h2>
          <a href="#" className="see-more">See More</a>
        </div>
        <div className="flowers-grid">
          {flowers.map(flower => (
            <div className="flower-card" key={flower.id}>
              <img src={flower.image} alt={flower.name} />
              <div className="product-info">
                <h3>{flower.name}</h3>
                <p>from {flower.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="highlighted-pots">
        <div className="pots-header">
          <h2>Top Pots</h2>
          <a href="#" className="see-more">See More</a>
        </div>
        <div className="pots-grid">
          {pots.map(pot => (
            <div className="pot-card" key={pot.id}>
              <img src={pot.image} alt={pot.name} />
              <div className="product-info">
                <h3>{pot.name}</h3>
                <p>from {pot.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* New About Section */}
      <div className="about-section">
        <div className="about-content">
          <h2>About Our Flower Shop</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;