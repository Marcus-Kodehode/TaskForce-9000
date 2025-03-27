import { useState } from 'react';
import './CookieWithSteam.css';

function CookieWithSteam() {
  const [isEaten, setIsEaten] = useState(false);

  const handleClick = () => {
    setIsEaten((prev) => !prev); // 👈 Toggle mellom bit og hel cookie
  };

  return (
    <div className="cookie-container" onClick={handleClick}>
      {/* 🔥 Steam vises kun når den er spist */}
      {isEaten && (
        <>
          <div className="steam steam1" />
          <div className="steam steam2" />
          <div className="steam steam3" />
        </>
      )}

      {/* 🍪 Cookie */}
      <svg
        className="cookie"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isEaten ? (
          // Bit av cookie
          <path
            d="
              M30 20
              Q32 25 36 20
              Q40 25 44 20
              Q48 25 52 20
              Q56 25 60 20
              Q64 25 68 20
              Q72 25 75 20
              A40 40 0 1 1 30 20
              Z
            "
            fill="#A97142"
          />
        ) : (
          // Hel cookie
          <circle cx="50" cy="50" r="40" fill="#A97142" />
        )}

        {/* 🍫 Chocolate chips */}
        <circle cx="40" cy="40" r="4" fill="#3B2F2F" />
        <circle cx="60" cy="35" r="5" fill="#3B2F2F" />
        <circle cx="55" cy="60" r="3.5" fill="#3B2F2F" />
        <circle cx="45" cy="70" r="4" fill="#3B2F2F" />
        <circle cx="50" cy="50" r="3" fill="#3B2F2F" />
      </svg>
    </div>
  );
}

export default CookieWithSteam;
