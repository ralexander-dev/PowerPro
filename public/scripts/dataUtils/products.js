function nameAsPath(name) {
  return name.toLowerCase().replace(/\s/g, '');
}

function displayFilteredProducts(categoryWide, categoryNarrow='') {
  fetch('/products')
    .then(res => res.json())
    .then(data => {
      let filter = [];
      if (categoryNarrow === '') {
        filter = data.filter(product => product.category_wide == categoryWide);
      } else {
        filter = data.filter(product => (product.category_wide == categoryWide) && (product.category_narrow == categoryNarrow));
      }
      // ! temp fix for womens images
      let fileExtension;
      if (categoryWide.toLowerCase() === 'female') {
        fileExtension = 'png';
      } else {
        fileExtension = 'jpg';
      }
      const filteredData = filter;
      const products = filteredData.map(product =>
        `
          <div class="product">
            <img src="./images/${categoryWide.toLowerCase()}/${nameAsPath(product.product_name)}.${fileExtension}"alt="${product.product_name}">
            <p>${product.product_name}</p>
            <p>$${product.price}</p>
            <button>Add to Cart</button>
          </div>
        `
      );
      document.getElementById('products').innerHTML = products.join('');
    });
}