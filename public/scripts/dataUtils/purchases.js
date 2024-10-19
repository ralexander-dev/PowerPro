
fetch('/purchases')
  .then(res => res.json())
  .then(data => {
    const purchases = data.map(purchase => `<li>${purchase.user_ID}</li>`);
    document.getElementById('purchases').innerHTML = purchases.join('');
  });