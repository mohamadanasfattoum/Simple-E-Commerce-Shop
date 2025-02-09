
fetch("http://127.0.0.1:8000/api/products/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials : "include"
  })
    .then((response) => response.json())
    .then((data) => {
  
      data.forEach((product) => {

        let row = document.getElementById("tr-group");
  
        let productName = document.getElementById("product");
        productName.innerHTML = product.name; 
  
        let productPrice = document.getElementById("price");
        productPrice.innerHTML = product.price; 

  
        let productCount = document.getElementById("count");
        productCount.innerHTML = product.quantity; 

      });
    })
