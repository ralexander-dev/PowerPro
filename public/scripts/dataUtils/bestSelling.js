/*
 File: bestSelling.js
 Author(s): Russell Alexander
 Description: 
  This file contains funcionality for fetching and injecting best-selling items to the front-end.
 Date Created: 2024-09-26
 Last Modified: 2024-10-10
*/

function nameAsPath(name) {
  return name.toLowerCase().replace(/\s/g, '');
}

fetch('/products')
  .then(res => res.json())
  .then(data => {
    const filteredData = data.filter(product => product.Popularity >= 4);
    const products = filteredData.map(product =>
      `
        <div class="product">
          <img src="./images/${nameAsPath(product.ProductName)}.jpg"alt="${product.ProductName}">
          <p>${product.ProductName}</p>
        </div>
      `
    );
    document.getElementById('products').innerHTML = products.join('');
  });