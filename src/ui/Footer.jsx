import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="relative text-white bg-[#111827] p-4">
      <div className="absolute top-0 left-0 transform -translate-y-full">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#111827"
            fillOpacity="1"
            d="M0,310L48,304.7C96,299,192,289,288,294C384,299,480,321,576,320.7C672,321,768,299,864,288.7C960,278,1056,278,1152,288.7C1248,299,1344,321,1392,331.3L1440,342L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="w-full flex justify-between">
        <div>
          <p>© 2024 Group 5. All rights reserved.</p>
          <div className="flex w-1/3">
            <div className="w-1/5">
              <FontAwesomeIcon icon={faPhoneSquare} />
              <br />
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="w-1/2">Hotline Email</div>
            <div className="w-1/12">
              :<br />:
            </div>
            <div className="w-1/3">0123456789 group5@ecommerce.apcs.edu.vn</div>
          </div>
        </div>
        <div className="w-1/4">
          <p>Get the latest tech news</p>
          <div className="flex bg-transparent border border-white rounded-lg mt-3 text-lg">
            <input
              type="email"
              placeholder="Your email here"
              className="flex-grow p-2 rounded-lg bg-transparent text-white focus:outline-none"
            />
            <button className="w-min p-2 rounded-r-lg bg-transparent text-white flex items-center justify-center border-l">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f fa-2x"></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube fa-2x"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
