// ! NOT YET TESTED 

const { createConnection } = require('../db/db'); 

async function displayCart(username) {
    try {
        const conn = createConnection();
        const query = 'SELECT * FROM user WHERE username = ?';
        const user = conn.query(query, [username], function(err, results) {
            if(err) {
                console.log(err);
                return null;
            }
            if(results.length > 0) {
                return results[0];
            } else {
                return null;
            }
        });
        
        const user_ID = user.user_id;
        const userCredits = user.credits;
        
        const purchasesQuery = 'SELECT * FROM purchases WHERE user_id = ?';
        const filteredPurchases = conn.query(purchasesQuery, [user_ID], function(err, results) {
            if(err) {
                console.log(err);
                return null;
            }
            return results;
        });
        
        const product_IDs = filteredPurchases.map(purchase => purchase.product_id);
        if (product_IDs.length === 0) {
            document.getElementById('cart').innerHTML = '<p>No products in cart.</p>';
            return;
        }
        
        productsQuery = 'SELECT * FROM products WHERE product_id IN (?)';
        const products = conn.query(productsQuery, [product_IDs], function(err, results) {
            if(err) {
                console.log(err);
                return null;
            }
            return results;
        });
        
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