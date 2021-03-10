import "./leadership.scss"
import { Container, Row, Col } from "react-bootstrap"
import JustinPic from "../images/officers/justin.jpg"
import MelodyPic from "../images/officers/melody.jpg"
import KevinPic from "../images/officers/kevin.jpg"
import JasonPic from "../images/officers/jason.jpg"

const OfficerRow = ({ imgSrc, name, title, description }) => {
  return (
    <>
      <Row className="officer-row align-items-center">
        <Col md="auto" style={{ paddingLeft: 0 }}>
          <div className="portrait">
            <img className="clip-circle officer" src={imgSrc} alt="officer-img" />
          </div>
        </Col>
        <Col>
          <Row>
            <h3>{name}</h3>
          </Row>
          <Row>
            <h5 className="officer-title">{title}</h5>
          </Row>
          <Row>
            <span>{description}</span>
          </Row>
        </Col>
      </Row>
      <hr />
    </>
  )
}

function Leadership() {
  return (
    <Container className="info-container">
      <div className="description-container">
        <h1>Leadership</h1>
        <hr />
        <OfficerRow
          imgSrc={MelodyPic}
          name="Melody Chang"
          title="Co-President"
          description="I got involved in TAP-ATX to continue making a space for Asian American peers looking for a community, developing their professional skills, and learning about the Taiwanese culture."
        />
        <OfficerRow
          imgSrc={KevinPic}
          name="Kevin Ku"
          title="Co-President"
          description="I got involved in TAP-ATX to help Asian Americans find a community that they could call home"
        />
        <OfficerRow
          imgSrc={JasonPic}
          name="Jason Lii"
          title="Social Chair"
          description="I joined TAP-ATX in order to help grow the Taiwanese American community and to get more immersed with the culture of my family."
        />
        <OfficerRow
          imgSrc={JustinPic}
          name="Justin Chang"
          title="Treasurer"
          description="I joined TAP because I never felt connected with my roots. By joining TAP-ATX, I expanded my knowledge of Taiwan as well as my circle of friends."
        />
      </div>
    </Container>
  )
}

export default Leadership
