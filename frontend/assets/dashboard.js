
let accessToken = localStorage.getItem('access');

if(!accessToken || undefined){
  window.location.herf = 'http://127.0.0.1:5500/frontend/login.html/'
}

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
          
        // const usersCount =  data.reduce((total, useraccount) => total + useraccount.users_count, 0)
        // let usersCounnt = document.getElementById("users-counnt");
        // usersCounnt.innerHTML = usersCount;



function logOut(){
  localStorage.clear();
  window.location.href = 'http://127.0.0.1:5500/frontend/login.html';
}


