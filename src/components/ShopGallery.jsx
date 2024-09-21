

function toggleShop({ cookies, setCookies }) {
  setShowShop(!showShop);
}

//   /* To display shop as images */
//   /* ... */

<button onClick={toggleShop}>Show Shop</button>;
//   /* ternary opator  */

{
  showShop ? (
    <img
      src="https://www.balisafarimarinepark.com/wp-content/uploads/2023/05/zyro-image-1024x637.jpg"
      alt="Make more money"
    />
  ) : (
    <img
      src="https://www.birdlife.org/wp-content/uploads/2021/06/Hummingbird-Norbert-Hentges-Unsplash-edited-scaled.jpg"
      alt="Shop1"
    />
  );
}

//   /* just another way to hiding the elemtn */
//   /* using && to short-curcuit */
//   /* both need to be true for the image to show */

{
  showShop && (
    <img
      src="https://www.balisafarimarinepark.com/wp-content/uploads/2023/05/zyro-image-1024x637.jpg"
      alt="Shop only shows when you have enough money"
    />
  );
}
