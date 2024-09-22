import { useEffect, useState } from "react";
import { shopUpgrades } from "../stores/Upgrades";

export default function Shop({
  cookies,
  setCookies,
  cookiesPerSecond,
  setCookiesPerSecond,
}) {
  const [showShop, setShowShop] = useState(false);

  //fetching from API in useEffect
  useEffect(() => {
    const fetchUpgrades = async () => {
      const result = await fetch(
        "https://cookie-upgrade-api.vercel.app/api/upgrades"
      );
      const data = await result.json();
      return data;
      setShowShop(showShop);
    };
  },[]);

 function handleClick(cost, increase) {

  setCookiesPerSecond ((cookiesPerSecond) => 
    cookiesPerSecond + increase
  )

  setCookies ((cookies) => 
  cookies - cost
  )
 }

const [affordable, setAffordable] = useState(false);

  //Showing the Array of items
  return (
    <>
      {/* To display shop items with a specific upgrade name */}
      {shopUpgrades.map((shop, index) => {
        const upgradesNames = ["Stardust Sighs", "Glitter Puffs", "Mystic Breezes", "Dreamy Puffs", "Twinkle Toots", "Magic Mists", "Fluffernuffs", "Fantasy Floofs", "Stardust Sighs", "Celestial Sniffs"];
        
        return (
          <div className="ShopInfo" key={index}>
            {/* Display a specific item from upgradesNames based on the index */}

            <div className="ShopBoxes">
            <h4>{upgradesNames[index]}</h4>
            <p><b>Cost: </b>{shop.cost}</p>
            <p><b>Increase: </b>{shop.increase}</p>
            <button 
              disabled={cookies >= shop.cost ? false : true}
              onClick={() => handleClick(shop.cost, shop.increase)}
            className="rainbow rainbow-effect">
              Upgrade
            </button>
            </div>
                        
          </div>
        );
      })}
    </>
  );
}
