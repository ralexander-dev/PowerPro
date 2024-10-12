
fetch('/purchases')
  .then(res => res.json())
  .then(data => {
    const purchases = data.map(purchase => `<li>${purchase.UserID}</li>`);
    document.getElementById('purchases').innerHTML = purchases.join('');
  });