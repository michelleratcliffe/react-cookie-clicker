import { useEffect, useState } from "react";

export default function CookieCounter( 
  {cookies, 
  setCookies, 
  cookiesPerSecond, 
  setCookiesPerSecond}) {

  useEffect(() => {
    const interval = setInterval(() => {
      setCookies((cookies) => cookies + cookiesPerSecond); 
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Farts: {cookies} </p>
      <p>Farts Per Second: {cookiesPerSecond}</p>
    </div>
  );
}


