import React, { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import "../../App.css";
import "./Login.css";

const EmailVerification = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await fetch(`/verify/${token}`, {
          method: "GET",
        });
        const data = await res.json();

        if (res.status === 200) {
          setVerificationSuccess(true);
        } else {
          alert("Failed to verify email. " + (data.error || ""));
          navigate("/errorpage");
        }
      } catch (error) {
        console.error("Verification error:", error);
        navigate("/errorpage");
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="verification-container">
      {verificationSuccess ? (
        <>
          <h2>Account successfully verified.</h2>
          <NavLink to="/login" className="login-link">
            Go to Login
          </NavLink>
        </>
      ) : (
        <h2>Verifying your email...</h2>
      )}
    </div>
  );
};

export default EmailVerification;
