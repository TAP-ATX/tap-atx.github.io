import "./leadership.css"
import { Container, Row, Col } from "react-bootstrap"
import JustinPic from "../images/officers/justin.jpg"
import MelodyPic from "../images/officers/melody.jpg"
import KevinPic from "../images/officers/kevin.jpg"
import JasonPic from "../images/officers/jason.jpg"

const OfficerRow = ({ imgSrc, name, title, description }) => {
  return (
    <Row>
      <Col>
        <img className="clip-circle officer" src={imgSrc} />
      </Col>
    </Row>
  )
}

function Leadership() {
  return (
    <Container className="info-container">
      <div className="description-container">
        <h1>Leadership</h1>
        <OfficerRow imgSrc={MelodyPic} />
        <OfficerRow imgSrc={KevinPic} />
        <OfficerRow imgSrc={JasonPic} />
        <OfficerRow imgSrc={JustinPic} />
      </div>
    </Container>
  )
}

export default Leadership
