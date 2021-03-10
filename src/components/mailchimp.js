import "./mailchimp.scss"
import { useState } from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"

const SimpleForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [emailError, setEmailError] = useState("")
  const submit = () =>
    onValidated({
      EMAIL: email,
      FNAME: firstName,
      LNAME: lastName,
    })

  const validateEmail = (e) => {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (e.target.value === "") {
      setEmailError("This field is required.")
    } else if (!e.target.value.match(mailformat)) {
      setEmailError("Please enter a valid email address.")
    } else {
      setEmailError("")
    }
  }
  return (
    <div id="mc-embedded-subscribe-form">
      <div id="mc_embed_signup_scroll">
        <div className="indicates-required">
          <span className="asterisk">*</span> indicates required
        </div>
        <div className="mc-field-group">
          <label htmlFor="mce-EMAIL">
            Email Address <span className="asterisk">*</span>
          </label>
          <input
            type="email"
            name="EMAIL"
            className={`required email ${emailError ? "mce_inline_error" : ""}`}
            id="mce-EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
          />
          {emailError && (
            <div htmlFor="mce-EMAIL" className="mce_inline_error">
              {emailError}
            </div>
          )}
        </div>
        <div className="mc-field-group">
          <label htmlFor="mcd-NAME">First Name</label>
          <input
            type="text"
            name="FNAME"
            id="mce-FNAME"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mc-field-group">
          <label htmlFor="mcd-NAME">Last Name</label>
          <input
            type="text"
            name="LNAME"
            id="mce-LNAME"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        {status === "sending" && (
          <div className="response" id="mce-sending-response" style={{ display: "block" }}>
            Sending ...
          </div>
        )}
        {status === "error" && (
          <div
            className="response"
            id="mce-error-response"
            style={{ display: "block" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="response"
            id="mce-success-response"
            style={{ display: "block" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <div className="clear buttons">
          <button className="btn btn-lg" onClick={submit}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

const MailChimp = () => {
  const url = "https://tacl.us9.list-manage.com/subscribe/post?u=b5b734b225d2251cf048a7c08&amp;id=927b24d67f"
  return (
    <div id="mailchimp-subscribe">
      <div id="mc_embed_signup">
        <h2>Join our Mailing List</h2>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <div>
              <SimpleForm status={status} message={message} onValidated={(formData) => subscribe(formData)} />
            </div>
          )}
        />
      </div>
    </div>
  )
}

export default MailChimp
