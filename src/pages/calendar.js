// import "./calendar.scss"
import { Container, Row, Col } from "react-bootstrap"

function Calendar() {
  return (
    <Container className="info-container text-center">
      <h1 className="header-title">Upcoming Events</h1>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23009c82&ctz=America%2FChicago&showTitle=1&showNav=1&showPrint=0&showDate=1&showCalendars=0&showTabs=0&showTz=0&src=aW5hbWRlbjUwcXJuNDZiYzZua3Mya3ZsaDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23D81B60"
        style={{ borderWidth: 0 }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
      ></iframe>
      <div>Subscribe to the calendar by clicking the + icon above</div>
    </Container>
  )
}

export default Calendar
