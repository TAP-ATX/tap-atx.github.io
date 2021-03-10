import "./about.css";
import { Container } from "react-bootstrap";
import OfficerImg from "../images/about_officers.jpg";

function About() {
  return (
    <Container className="info-container">
      <div className="description-container">
        <h1 className="text-center header-title">About</h1>
        <p>
          <strong>Taiwanese American Professionals (TAP)</strong> enhances the
          Taiwanese American community by connecting individuals interested in
          professional and career development, while emphasizing the
          preservation of Taiwanese American identity.
        </p>
        <p>
          <strong>TAP-ATX’s Mission</strong> is to connect, grow, and empower
          the greater Austin community by providing quality resources and
          programs influenced by the Taiwanese American perspective.
        </p>

        <img src={OfficerImg} alt="tap_officers" />

        <p>
          TAP-ATX is a chapter of TACL National, a 501c3 non-profit organization
          run entirely by volunteers. Learn more about{" "}
          <a href="https://www.tacl.org" rel="noreferrer" target="_blank">
            TACL
          </a>
          .
        </p>

        <h4>Key Values</h4>
        <ul>
          <li>
            Build Taiwanese American community-oriented leaders in all
            professions
          </li>
          <li>Promote the Taiwanese American identity</li>
          <li>Build a professional network of Taiwanese Americans</li>
          <li>Be positive role models in the community</li>
          <li>
            Become a bridge for TAP members and other Taiwanese American and
            Asian Pacific American organizations
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default About;
