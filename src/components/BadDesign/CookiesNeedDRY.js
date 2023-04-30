import React, { useState } from "react";

const CookiesNeedDRY = () => {
  const isPossibleFeature = false;

  const [cookies, setCookies] = useState([
    isPossibleFeature ? "new feature" : "🍪",
    isPossibleFeature ? "new feature" : "🍪",
    isPossibleFeature ? "new feature" : "🍪",
    isPossibleFeature ? "new feature" : "🍪",
  ]);

  return (
    <div>
      <h3>We can eat these yummy cookies.</h3>
      <div>
        {cookies.length > 0 && (
          <button
            style={{ fontSize: 36, margin: 12 }}
            onClick={() => {
              setCookies(cookies.slice(1));
            }}
          >
            🍪
          </button>
        )}
        {cookies.length > 1 && (
          <button
            style={{ fontSize: 36, margin: 12 }}
            onClick={() => {
              setCookies(cookies.slice(1));
            }}
          >
            🍪
          </button>
        )}
        {cookies.length > 2 && (
          <button
            style={{ fontSize: 36, margin: 12 }}
            onClick={() => {
              setCookies(cookies.slice(1));
            }}
          >
            🍪
          </button>
        )}
        {cookies.length > 3 && (
          <button
            style={{ fontSize: 36, margin: 12 }}
            onClick={() => {
              setCookies(cookies.slice(1));
            }}
          >
            🍪
          </button>
        )}
        {cookies.length > 4 && (
          <button
            style={{ fontSize: 36, margin: 12 }}
            onClick={() => {
              setCookies(cookies.slice(1));
            }}
          >
            🍪
          </button>
        )}
      </div>
    </div>
  );
};

export default CookiesNeedDRY;
