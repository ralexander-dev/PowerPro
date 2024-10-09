
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