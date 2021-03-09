import {Container, Row, Col, Button} from 'react-bootstrap'
import _ from 'lodash'
import MailChimp from "../components/mailchimp"

function importAll(r) {
  return r.keys().map(r);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function Home() {
  const images = shuffle(importAll(require.context('../images', false, /instagram_\d+\.(png|jpe?g|svg)$/)))
  return (
    <div>
      <div className="instagram">
        <div className="instagram-overlay">
          {images.map(image => <img className="instagram-pic" key={_.uniqueId()} src={image.default} alt="Instagram"/>)}
        </div>
      </div>
      <div className="content">
        <Container className="title-container">
          <h2 className="text-center title">TAP | ATX</h2>
          <h4 className="text-center">Taiwanese American Professionals - Austin Chapter</h4>
          <Row>
            <Col className="text-center">
              <div className="buttons">
                <a className="btn btn-primary btn-lg">Join Our Mailing List</a>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="info-container text-center">
          <h1 className="header-title">Our Mission</h1>
          <p><strong>Taiwanese American Professionals (TAP)</strong> enhances the Taiwanese American community by connecting individuals
          interested in professional and career development, while emphasizing the preservation of Taiwanese American identity.</p>
          <p><strong>TAP-ATX’s Mission</strong> is to connect, grow, and empower the greater Austin community by providing quality resources
          and programs influenced by the Taiwanese American perspective.</p>
        </Container>
        <Container className="info-container text-center">
          <hr/>
        </Container>
        <Container className="info-container text-center">
          <h1 className="header-title">Support Us</h1>
          <div className="buttons">
            <a className="btn btn-primary btn-lg" href="https://venmo.com/TAP-ATX" target="_blank">Venmo</a>
            <a className="btn btn-primary btn-lg" href="https://www.paypal.com/paypalme/tapatx" target="_blank">PayPal</a>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
