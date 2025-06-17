
import './Styling/Notfound.css';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="glitch" data-text="404">404</div>
        <div className="message">
          <p className="message-text">Page Not Found</p>
          <Link to="/" className="go-home-link">Go Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Notfound;