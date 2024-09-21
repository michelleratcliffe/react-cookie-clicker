import { useEffect, useState } from "react";
import "./reset.css"
import "./media.css"
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import { shopUpgrades } from "./stores/Upgrades";
import Cookie from "./components/cookies";


function App() {
  const [click, setClick] = useState(() => {
    const savedClick = localStorage.getItem("click");
    return savedClick ? Number(savedClick) : 0;
  })
  //cookies

  const [cookies, setCookies] = useState(() => {
    const savedCookies = localStorage.getItem("cookies");
    return savedCookies ? Number(savedCookies) : 0;
  });
  // cps
  const [cookiesPerSecond, setCookiesPerSecond] = useState(() => {
    const savedCookiesPerSecond = localStorage.getItem("cookiesPerSecond");
    return savedCookiesPerSecond ? Number(savedCookiesPerSecond) : 1;
  });

  useEffect(() => {
    localStorage.setItem("cookies", JSON.stringify(cookies));
    localStorage.setItem("cookiesPerSecond", JSON.stringify(cookiesPerSecond));
    localStorage.setItem("click", JSON.stringify(click));
  },[cookies])

  return (
    <div>
      <div className="CookieBox">
      <img src="./uni-logo2.png" alt="unicorn fart extractor logo" className="logo"/>
        <div className="CookieInfo">
          <audio src="./Look-at-my-horse.mp3" controls/>
        <span>Clicks: {click}</span>
          <Cookie
            cookies={cookies}
            setCookies={setCookies}
            cookiesPerSecond={cookiesPerSecond}
            setCookiesPerSecond={setCookiesPerSecond}
            
          />
          {/* <a className="uni"></a> */}
          <button className="unicorn-button"
            onClick={() => {
              setClick((click) => click + 1);
              setCookies((cookies) => cookies + 1);
            }}
          >
            
            <img src="./weird-unicorn.png" alt="" /></button>
          <br />
          <br />
          
        </div>
      </div>
      
      <h2>Extract more</h2>
      <div className="ShopContainer">
        
       <Shop
        cookies={cookies}
        setCookies={setCookies}
        cookiesPerSecond={cookiesPerSecond}
        setCookiesPerSecond={setCookiesPerSecond}
      />
      </div>

      <Footer />
    </div>
  );
}

export default App;
