import './footer.css'
import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  let year = new Date().getFullYear()

  return (
    <div className="footer">
      <Container className="footer__social">
        <Row>
          <Col className="text-center">
            <a href="https://www.facebook.com/tapatx" rel="noreferrer" target="_blank"><FontAwesomeIcon className="social-icon fa-2x" icon={faFacebook} /></a>
            <a href="https://www.instagram.com/tapatx/" rel="noreferrer" target="_blank"><FontAwesomeIcon className="social-icon fa-2x" icon={faInstagram} /></a>
            <a href="https://twitter.com/tap_atx" rel="noreferrer" target="_blank"><FontAwesomeIcon className="social-icon fa-2x" icon={faTwitter} /></a>
          </Col>
        </Row>
      </Container>
      <Container className="footer__copyright">
        <p className="text-center">© {year} TAP-ATX. All rights reserved. A 501(c)(3) organization for the Taiwanese American community in Austin, TX.</p>
      </Container>
    </div>
  )
}
export default(Footer)
