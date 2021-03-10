import { Container, Row, Col } from "react-bootstrap"
import _ from "lodash"
import { useState, useEffect } from "react"
import MailChimp from "../components/mailchimp"
import { HashLink as Link } from "react-router-hash-link"

const importAll = (r) => {
  return r.keys().map(r)
}

const shuffle = (array) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return { width, height }
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}

const Home = () => {
  const { width } = useWindowDimensions()
  let images = shuffle(importAll(require.context("../images", false, /instagram_\d+\.(png|jpe?g|svg)$/)))
  let numImages = images.length
  if (width <= 600) {
    numImages = 6
  }
  images = images.slice(0, numImages)
  return (
    <div>
      <div className="instagram">
        <div className="instagram-overlay">
          {images.map((image) => (
            <img className="instagram-pic" key={_.uniqueId()} src={image.default} alt="Instagram" />
          ))}
        </div>
      </div>
      <div className="content">
        <Container className="title-container">
          <h2 className="text-center title">TAP | ATX</h2>
          <h4 className="text-center">Taiwanese American Professionals - Austin Chapter</h4>
          <Row>
            <Col className="text-center">
              <div className="buttons">
                <Link to="#mailchimp-subscribe" className="btn btn-lg" smooth={true}>
                  Join Our Mailing List
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="info-container text-center">
          <h1 className="header-title">Our Mission</h1>
          <p>
            <strong>Taiwanese American Professionals (TAP)</strong> enhances the Taiwanese American community by
            connecting individuals interested in professional and career development, while emphasizing the preservation
            of Taiwanese American identity.
          </p>
          <p>
            <strong>TAP-ATX’s Mission</strong> is to connect, grow, and empower the greater Austin community by
            providing quality resources and programs influenced by the Taiwanese American perspective.
          </p>
        </Container>
        <Container className="info-container text-center">
          <hr />
        </Container>
        <Container className="info-container text-center">
          <h1 className="header-title">Support Us</h1>
          <p className="support-text">
            Your contributions will help us continue to create and plan events and programs!
          </p>
          <p className="support-text">
            Check out our{" "}
            <a href="https://www.facebook.com/tapatx" rel="noreferrer" target="_blank">
              Facebook
            </a>
            ,{" "}
            <a href="https://www.instagram.com/tapatx/" rel="noreferrer" target="_blank">
              Instagram
            </a>
            , or{" "}
            <Link to="#mailchimp-subscribe" smooth={true}>
              Mailing List
            </Link>{" "}
            for the latest events.
          </p>
          <br />
          <div className="buttons">
            <a className="btn btn-lg" href="https://venmo.com/TAP-ATX" rel="noreferrer" target="_blank">
              Venmo
            </a>
            <a className="btn btn-lg" href="https://www.paypal.com/paypalme/tapatx" rel="noreferrer" target="_blank">
              PayPal
            </a>
          </div>
        </Container>
        <Container className="info-container text-center">
          <hr />
        </Container>
        <Container className="info-container mailchimp">
          <MailChimp />
        </Container>
      </div>
    </div>
  )
}

export default Home
