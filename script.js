function loadOrders() {
  var saved = localStorage.getItem("orders");
  if (saved) {
    document.getElementById("ordersList").innerHTML = saved;
  }
}

function order(serviceName, price) {
  var name = document.getElementById("username").value;
  
  if (name === "") {
    alert("Please enter your name first!");
    return;
  }
  
  var orderText = name + " ordered " + serviceName + " (₦" + price + ")";
  
  var list = document.getElementById("ordersList");
  var item = document.createElement("li");
  item.textContent = orderText;
  
  list.appendChild(item);
  
  localStorage.setItem("orders", list.innerHTML);
}

window.onload = loadOrders;