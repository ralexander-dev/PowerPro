
fetch('/orders')
  .then(res => res.json())
  .then(data => {
    const orders = data.map(order => `<li>${order.UserID}</li>`);
    document.getElementById('orders').innerHTML = orders.join('');
  });