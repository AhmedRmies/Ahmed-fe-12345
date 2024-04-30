import '../styling/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-brand">
          <h1>PcariMovie</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
          <div className="newsletter-container">
            <input type="email" placeholder="Insert your mail here" aria-label="Email address" />
            <button type="submit" aria-label="Subscribe to newsletter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18l6-6-6-6v12z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="footer-links">
          <div className="link-column">
            <h3>Product</h3>
            <a href="#">Movies</a>
            <a href="#">TV Show</a>
            <a href="#">Videos</a>
          </div>
          <div className="link-column">
            <h3>Media Group</h3>
            <a href="#">Nice Studio</a>
            <a href="#">Nice News</a>
            <a href="#">Nice TV</a>
          </div>
          <div className="link-column">
            <h3>Sitemap</h3>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 8919 Ohio St. South Gate, California 90280</p>
        <p>ourstudio@hello.com</p>
        <p>+271 386-647-3637</p>
      </div>
    </footer>
  );
};

export default Footer;
