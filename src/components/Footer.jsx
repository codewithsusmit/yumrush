import "./Footer.css";

const Footer = () => {
  return (
    <footer className="swiggy-footer">
      <div className="footer-grid">
        {/* Logo Column */}
        <div className="footer-col logo-col">
          <h2 className="logo-text">🍽️ YumRush</h2>
          <p>&copy; {new Date().getFullYear()} YumRush Ltd.</p>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Foodie Plus</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <a href="#">Help & Support</a>
            </li>
            <li>
              <a href="#">Partner with Us</a>
            </li>
            <li>
              <a href="#">Ride with Us</a>
            </li>
          </ul>
        </div>

        {/* Available In */}
        <div className="footer-col">
          <h4>Available In</h4>
          <ul>
            <li>Bangalore</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
          <button className="city-btn">+ More Cities</button>
        </div>

        {/* Explore */}
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Snackables</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
