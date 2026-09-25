const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_container">
          <div className="footer_brand">
            <img
              className="footer_logo"
              src="public/images/talon-logo.png"
              alt="TalOn"
            />
            <p>Style that moves with you.</p>
            <span>Curated essentials for every version of you.</span>
          </div>

          <div className="footer_column">
            <h3>SHOP</h3>

            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">TalOn Insider</a>
          </div>

          <div className="footer_column">
            <h3>DISCOVER</h3>

            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">TalOn Insider</a>
          </div>

          <div className="footer_column">
            <h3>SUPPORT</h3>

            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">TalOn Insider</a>
          </div>
        </div>
        <hr />

        <div className="copyright">
          <span>© 2026 TalOn. All rights reserved.</span>
          <span>Made for your everyday mood.</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
