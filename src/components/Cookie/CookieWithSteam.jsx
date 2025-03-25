// src/components/Cookie/CookieWithSteam.jsx
import './CookieWithSteam.css';

function CookieWithSteam() {
  return (
    <div className="cookie-container">
      {/* Steam animation */}
      <div className="steam steam1" />
      <div className="steam steam2" />
      <div className="steam steam3" />

      {/* SVG Cookie */}
      <svg
        className="cookie"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="40" fill="#D2691E" />
        <circle cx="35" cy="45" r="4" fill="#4B2E14" />
        <circle cx="60" cy="35" r="5" fill="#4B2E14" />
        <circle cx="65" cy="60" r="3.5" fill="#4B2E14" />
        <circle cx="45" cy="70" r="4" fill="#4B2E14" />
        <circle cx="55" cy="50" r="3" fill="#4B2E14" />
      </svg>
    </div>
  );
}

export default CookieWithSteam;
