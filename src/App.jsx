import { useEffect, useState, useRef } from "react";
import "./reset.css";
import "./media.css";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import Cookie from "./components/cookies";
// import Heading from "./components/Heading";

function App() {
  const [click, setClick] = useState(() => {
    const savedClick = localStorage.getItem("click");
    return savedClick ? Number(savedClick) : 0;
  });

  const [cookies, setCookies] = useState(() => {
    const savedCookies = localStorage.getItem("cookies");
    return savedCookies ? Number(savedCookies) : 0;
  });

  const [cookiesPerSecond, setCookiesPerSecond] = useState(() => {
    const savedCookiesPerSecond = localStorage.getItem("cookiesPerSecond");
    return savedCookiesPerSecond ? Number(savedCookiesPerSecond) : 1;
  });

  const [particles, setParticles] = useState([]); // State to manage particles
  const bouncy = useRef()

  useEffect(() => {
    localStorage.setItem("cookies", JSON.stringify(cookies));
    localStorage.setItem("cookiesPerSecond", JSON.stringify(cookiesPerSecond));
    localStorage.setItem("click", JSON.stringify(click));

  }, [cookies, cookiesPerSecond, click]);

  // COLLECTION OF FARTS TO SOOTHE EVEN THE MOST SAVAGE BEAST
  const farts = ["./fart-one.mp3", "./fart-two.mp3", "./fart-three.mp3"];
  
  function randomFarts() {
    var file = farts[Math.floor(Math.random() * farts.length)];
    let audio = new Audio(file);
    audio.play();
  }

// Function to handle particle generation and cookie clicks
const handleClick = (e) => {
  const numberOfParticles = 10; // Number of particles to generate
  const particleImages = [
    "/cookie1.png",  
    "/cookie3.png",
    "/doom-cloud.png", 
    "/magic.png", 
    "/rainbow.png",
    "/rainbow2.png", 
    "/sprinkles.png", 
    "/sprinkles2.png" // Add more image paths as needed
  ];

  // Select a single random image for this click event
  const selectedImage = particleImages[Math.floor(Math.random() * particleImages.length)];

  const newParticles = Array.from({ length: numberOfParticles }).map(() => {
    // Randomize direction and speed for each particle
    const directionX = Math.random() * 2 - 1; // Random value between -1 and 1
    const directionY = Math.random() * 2 - 1;
    const speed = Math.random() * 3 + 1; // Random speed between 1 and 4

    const box = bouncy.current.getBoundingClientRect();
    const boxX = box.left + (box.right - box.left) * 0.5;
    const boxY = box.top + (box.bottom - box.top) * 0.5;

    return {
      id: Date.now() + Math.random(), // Unique ID for each particle
      x: boxX - 50, // Start position based on click event
      y: boxY + 200, //This is driving me nuts as it changes between localhost and render
      directionX,
      directionY,
      speed,
      image: selectedImage, // Use the same image for all particles in this click
    };
  });

  setParticles((prevParticles) => [...prevParticles, ...newParticles]);

  // Remove each particle after 1 second
  setTimeout(() => {
    setParticles((prevParticles) =>
      prevParticles.filter((p) => !newParticles.includes(p))
    );
  }, 1000);

  setClick((click) => click + 1);
  setCookies((cookies) => cookies + 1);
  randomFarts();
};

  return (
    <div>
      {/* <button class="settings" onClick={resetAll}>Reset</button> */}
      <div className="CookieBox">

       {/* <Header /> weird glitch with header refusing to import*/} 
       <a href="https://www.youtube.com/watch?v=Ywe1ULpiU9Y" target="blank" className="logo">
          <span className="u">U</span>
          <span className="n">N</span>
          <span className="i">I</span>
          <span className="c">C</span>
          <span className="o">O</span>
          <span className="r">R</span>
          <span className="n">N</span>
          <br />
          <span>FART EXTRACTOR</span>
          </a>
       
        <div className="CookieInfo">
          <audio src="./Look-at-my-horse.mp3" controls />
          <span>Clicks: {click}</span>
          <Cookie
            cookies={cookies}
            setCookies={setCookies}
            cookiesPerSecond={cookiesPerSecond}
            setCookiesPerSecond={setCookiesPerSecond}
          />
          <button
            className="unicorn-button"
            alt="Bouncing Unicorn"
            onClick={handleClick}>
            <img src="./weird-unicorn.png" alt="weird embarrased unicorn" ref={bouncy}/>
          </button>
          <br />
          <br />
        </div>
      </div>
      <h2>Upgrades:</h2>
      <div className="ShopContainer">
        <Shop
          cookies={cookies}
          setCookies={setCookies}
          cookiesPerSecond={cookiesPerSecond}
          setCookiesPerSecond={setCookiesPerSecond}
        />
      </div>
      <Footer />

      {/* Render particles */}
       {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x + particle.directionX * particle.speed * 20}px`,
            top: `${particle.y + particle.directionY * particle.speed * 20}px`,
            backgroundImage: `url(${particle.image})`, // Use the selected image
            backgroundSize: "cover",
          }}
        ></div>
      ))}
    </div>
  );
}

export default App;