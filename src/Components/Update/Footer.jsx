import React from 'react';
import './Styling/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      {/* Firewave / Cosmic Bubbles */}
      <div className="bubbles">
        {Array.from({ length: 128 }).map((_, index) => (
          <div
            key={index}
            className="bubble"
            style={{
              '--size': `${2 + Math.random() * 4}rem`,
              '--distance': `${6 + Math.random() * 4}rem`,
              '--position': `${-5 + Math.random() * 110}%`,
              '--time': `${2 + Math.random() * 2}s`,
              '--delay': `${-1 * (2 + Math.random() * 2)}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Footer Content with Bootstrap Grid */}
      <section className="container text-light pt-5">
        <div className="row">
          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">Contact Us</h5>
            <p><strong>Phone:</strong> 0748518446</p>
            <p><strong>Email:</strong> alphabitez@gmail.com</p>
          </div>

          {/* Suggestion Box */}
          <div className="col-md-4 ">
            <h5 className="text-uppercase">Suggestions</h5>
            <form>
              <div className="">
                <textarea
                  className="form-control"
                  rows="2"
                  columns="1"
                  placeholder="We'd love to hear your thoughts..."
                >

                </textarea>
              </div>
              <button type="submit" className="btn btn-outline-light btn-sm">Send</button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4">
            <h5 className="text-uppercase">Follow Us</h5>
            <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" className="d-block text-light p-2"><img src="/images/x.png" alt="" /></a>
            <a href="https://www.instagram.com/accounts/login/?hl=en" className="d-block text-light mb-2"><img src="/images/ig.png" alt="" /></a>
            <a href="https://www.facebook.com/login/" className="d-block text-light"><img src="/images/fb.png" alt="" /></a>
          </div>
        </div>
      </section>

      {/* Fire blob filter */}
      <svg style={{ position: 'fixed', top: '100vh' }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 19 -9"
              result="blob" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Footer;
