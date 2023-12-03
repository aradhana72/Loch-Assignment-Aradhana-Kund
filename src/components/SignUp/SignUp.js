import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Validate email using a simple regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(newEmail));
  };

  return (
    <>
      <div className="signup">
        <div className="signupDivStyle">
          <div>
            <h2 className="signupHeaderText">Sign up for </h2>
            <h2
              className="signupHeaderText"
              style={{
                marginTop: "-24px",
              }}
            >
              exclusive access.
            </h2>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your email address"
            ></input>

            <button
              class="button"
              disabled={!isValidEmail}
              style={{
                backgroundColor: isValidEmail ? "#19191a" : "gray",
                cursor: isValidEmail ? "pointer" : "not-allowed",
              }}
              onClick={(event) =>
                (window.location.href = "https://app.loch.one/welcome")
              }
            >
              Get started
            </button>
            <p className="signupPara">
              You’ll receive an email with an invite link to join.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
