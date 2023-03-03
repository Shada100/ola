import frame3 from "../images/frame3.svg";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer>
      <div className="main-footer">
        <div className="main-container">
          <div className="row link">
            <a href="#home">
              <h4>Company Logo</h4>
            </a>
          </div>
          <div className="inner-container">
            <div className="col">
              <div className="list">
                <ul className="list-unstyled link">
                  <li>
                    <a href="#about-us">ABOUT US</a>
                  </li>
                  <li>
                    <a href="#contact">CONTACT</a>
                  </li>
                  <li>
                    <a href="#careers">CAREERS</a>
                  </li>
                  <li>
                    <a href="#services">SERVICES</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="cat-absolute-container">
                <div className="text-box">
                  <span>Logo</span>
                  <span className="cqc-overall-rating">
                    CQC Overall Rating – Good
                  </span>
                  <span className="cqc-care-rating-out">
                    CQC Care Rating – Outstanding
                  </span>
                  <span className="see-the-report">See the Report</span>
                  <span className="date" style={{ fontSize: "10px" }}>
                    Date
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="col-end">
                <div className="img-wrapper">
                  <img className="frame-3" src={frame3} />
                </div>
                <div className="social-icons">
                  <a href="#facebook-page">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="#twitter-page">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#linkedin-page">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <div className="container">
            <p>
              Privacy | Regulated by the Care Quality Commission | © 2021
              Copyright Cavendish Professionals Homecare, 1 Royal Exchange,
              London, EC3V 3DG 020 3993 2209
            </p>
            <p>
              Cavendish Professionals Homecare is part of the Cavendish
              Professionals Group. click here for more information.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
