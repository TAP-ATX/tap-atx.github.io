import "./contact.css"
import {Container} from 'react-bootstrap'
import OfficerImg from "../images/about_officers.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <Container className="info-container">
      <div className="contact-container">
        <h1 className="text-center header-title">Contact</h1>
        <h4>Contact Us</h4>
        <ul>
          <li><FontAwesomeIcon className="fa-md" icon={faEnvelope} /> Email: <a href="mailto:info@tapatx.org">info@tap-atx.org</a></li>
          <li><FontAwesomeIcon className="fa-md" icon={faFacebook} /> Facebook: <a href="https://www.facebook.com/tapatx">Taiwanese American Professionals - Austin Chapter</a></li>
        </ul>
        <br/>

        <h4>Leaving Austin? Check out our other chapters!</h4>
        <ul>
          <li><a href="http://www.tap-atl.org" target="_blank">Atlanta</a></li>
          <li><a href="http://www.tap-boston.org" target="_blank">Boston</a></li>
          <li><a href="http://www.tap-la.org" target="_blank">Los Angeles</a></li>
          <li><a href="http://www.tap-atl.org" target="_blank">New York</a></li>
          <li><a href="http://www.tap-oc.org" target="_blank">Orange County</a></li>
          <li><a href="http://www.tap-sd.org" target="_blank">San Diego</a></li>
          <li><a href="http://www.tap-sf.org" target="_blank">San Francisco</a></li>
          <li><a href="http://www.tap-seattle.org" target="_blank">Seattle</a></li>
          <li><a href="http://www.tap-dc.org" target="_blank">Washington DC</a></li>
        </ul>
      </div>
    </Container>
  );
}

export default Contact;
