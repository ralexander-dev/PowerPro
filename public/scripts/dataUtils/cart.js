

async function displayCart(username) {
    try {
      const userResponse = await fetch('/users');
      const userData = await userResponse.json();
      const user = userData.find(user => user.username === username);
      const user_ID = user.user_id;
      const userCredits = user.credits;

      const purchasesResponse = await fetch('/purchases');
      const purchasesData = await purchasesResponse.json();
      
      const filteredPurchases = purchasesData.filter(purchase => purchase.user_id == user_ID);
      const product_IDs = filteredPurchases.map(purchase => purchase.product_id);
      console.log(product_IDs);
      
      if (product_IDs.length === 0) {
        document.getElementById('cart').innerHTML = '<p>No products in cart.</p>';
        return;
      }
      
      const productsResponse = await fetch('/products');
      const productsData = await productsResponse.json();
      
      const products = productsData.filter(product => product_IDs.includes(product.product_id));
      const productsTotal = products.reduce((total, product) => total + product.price, 0);
      
      const productsHTML = products.map(product => `
        <div class="cart-items">
          <img src="./images/${product.category_wide.toLowerCase()}/${nameAsPath(product.product_name)}.jpg"alt="${product.product_name}">
          <p>${product.product_name}</p>
          <p>$${product.price}</p>
        </div>
      `).join('');

      const checkoutBtn = `
        <a id="checkoutBtn" class="cart-items">
          <div> 
            <p> Checkout </p>
            <p> Credits: ${userCredits} - ${productsTotal} = ${userCredits - productsTotal} </p>
          </div>
        </a>
      `
      
      const cartHTML = productsHTML + checkoutBtn;
      document.getElementById('cart').innerHTML = cartHTML;

    } catch (error) {
      console.error('Error fetching data:', error);
      document.getElementById('cart').innerHTML = '<p>Error loading products. Please try again later.</p>';
    }
}

function nameAsPath(name) {
    return name.toLowerCase().replace(/\s/g, '');
}