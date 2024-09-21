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
      <p>Cookies: {cookies} </p>
      <p>Cookies Per Second: {cookiesPerSecond}</p>
    </div>
  );
}


