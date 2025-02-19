
let accessToken = localStorage.getItem('access');

if(!accessToken){
  window.location.herf = 'http://127.0.0.1:5500/frontend/login.html/';
}


// products link

document.getElementById('products-link').addEventListener('click', 
  function(event){
    event.preventDefault(); 
    window.location.href = 'http://127.0.0.1:5500/frontend/products.html';
});

// dashboard link

document.getElementById('dashboard-link').addEventListener('click', 
  function(event){
    event.preventDefault(); 
    window.location.href = 'http://127.0.0.1:5500/frontend/dashboard.html';
});

////########################################


fetch("http://127.0.0.1:8000/api/products/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    credentials : "include"
  })
    .then(response => {return response.json()})
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
            productPrice.innerHTML = `$ ${product.price}` 
            row.appendChild(productPrice);
    
            let productCount = document.createElement("td");
            productCount.setAttribute('class','count');          
            productCount.innerHTML = product.quantity; 
            row.appendChild(productCount);

            tbodyGroup.appendChild(row);

      });
    }).catch(error => console.log(error));
    
////######################################## prudoct detail




fetch("http://127.0.0.1:8000/api/products/", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
  credentials : "include"
})
  .then(response => {return response.json()})
  .then((data) => {

      let sectionGroup  = document.getElementById("section-group");
      sectionGroup.setAttribute('class','products-section')


      let ulRow = document.createElement("ul"); 
      ulRow.setAttribute('class','products-ul')
      sectionGroup.appendChild(ulRow)        


      data.forEach((product) => {
        let productNameLi = document.createElement("li");


        let idField = product.id;
        productNameLi.setAttribute("onclick", `productDetail(${idField})`);
        
        let productNameA = document.createElement("a");
        productNameA.innerHTML = product.name; 
        productNameA.href = "#";

        productNameLi.setAttribute('data-price',`$${product.price}`);

        productNameLi.setAttribute('data-quantity', `\n\nMenge:${product.quantity}\n`);
        productNameLi.setAttribute('data-brand', product.brand);

        productNameLi.appendChild(productNameA);
        ulRow.appendChild(productNameLi);

        sectionGroup.appendChild(ulRow);

      });
  }).catch(error => console.log(error));
// produts ###############// produts ###############// produts ###############    





function hideProductDetail() {
  const detailDiv = document.getElementById('product-detail');
  if (detailDiv) {
      detailDiv.style.display = 'none';
  }
}


    fetch("http://127.0.0.1:8000/accountsapi/users/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      credentials : "include"
    })
      .then(response => {return response.json()})
      .then((data) => {


                
        let usersCount  = document.getElementById("users-count");
        usersCount.innerHTML = data.length;



      }).catch(error => console.log(error));
          


function logOut(){
  localStorage.clear();
  window.location.href = 'http://127.0.0.1:5500/frontend/login.html';
}

// ich hbe den function in product_detail.js erstellt und dann nochmal hier gerufen
function productDetail (productID) {
  window.location.href = `http://127.0.0.1:5500/frontend/product_detail.html?id=${productID}`;
};



