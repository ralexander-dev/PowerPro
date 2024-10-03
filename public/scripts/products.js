
fetch('/products')
  .then(res => res.json())
  .then(data => {
    const products = data.map(product => `<li class="productItem"><p>${product.ProductName}</p></li>`);
    document.getElementById('products').innerHTML = products.join('');
  });