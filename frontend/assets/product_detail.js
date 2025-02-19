const accessToken = localStorage.getItem("access");

if (!accessToken) {
    window.location.href = 'http://127.0.0.1:5500/frontend/login.html/';
}


document.getElementById('products-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'http://127.0.0.1:5500/frontend/products.html';
});
  
  // dashboard link
document.getElementById('dashboard-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'http://127.0.0.1:5500/frontend/dashboard.html';
});


function productDetail (productID) {
    window.location.href = `http://127.0.0.1:5500/frontend/product_detail.html?id=${productID}`;
};
  

  
document.addEventListener("DOMContentLoaded",() =>{
const productURLParam = new URLSearchParams(window.location.search);
const productID = productURLParam.get("id");

    if(productID){
        fetch(`http://127.0.0.1:8000/api/products/${productID}/`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        credentials : "include"
        })
        .then(response => {return response.json()})
        .then((data)=>{


            // alert(`Du bist ib product ${data.name}`);

            let productDetailSection = document.getElementById("product-section");

            let productDetailDiv = document.createElement("div");
            productDetailDiv.setAttribute('class','product-detail-div');


            let productName = document.createElement("h1");
            productName.setAttribute('class', 'product');
            productName.innerHTML = data.name; 
            productDetailDiv.appendChild(productName);
      
            let productPrice = document.createElement("p");
            productPrice.setAttribute('class', 'price');
            productPrice.innerHTML = `$ ${data.price}`; 
            productDetailDiv.appendChild(productPrice);
      
            let productCount = document.createElement("p");
            productCount.setAttribute('class', 'count');          
            productCount.innerHTML = data.quantity; 
            productDetailDiv.appendChild(productCount);
      
            productDetailSection.appendChild(productDetailDiv);

            
        }).catch(error => console.log(error));
    };

});



function logOut(){
    localStorage.clear();
    window.location.href = 'http://127.0.0.1:5500/frontend/login.html';
  }
