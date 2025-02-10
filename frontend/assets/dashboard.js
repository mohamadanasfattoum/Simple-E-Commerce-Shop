
fetch("http://127.0.0.1:8000/api/products/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials : "include"
  })
    .then((response) => response.json())
    .then((data) => {

      
        let tbodyGroup = document.getElementById("tb-group");
        let productsCounnt = document.getElementById("products-counnt");
        productsCounnt.innerHTML = data.length;

        const brandsSet = new Set(data.map(product => product.brand));
        let brandsCounnt = document.getElementById("brands-count");
        brandsCounnt.innerHTML = brandsSet.size;


        data.forEach((product) => {

            let row = document.createElement("tr");
    
            let productName = document.createElement("td");
            productName.setAttribute('class','product');
            productName.innerHTML = product.name; 
            row.appendChild(productName);

            
    
            let productPrice = document.createElement("td");
            productPrice.setAttribute('class','price');
            productPrice.innerHTML = `${product.price}` 
            row.appendChild(productPrice);
    
            let productCount = document.createElement("td");
            productCount.setAttribute('class','count');          
            productCount.innerHTML = product.quantity; 
            row.appendChild(productCount);

            tbodyGroup.appendChild(row);

      });
    })
