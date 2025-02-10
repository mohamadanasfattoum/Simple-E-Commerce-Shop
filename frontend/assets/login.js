
function logIn(){
    event.preventDefault()
    const USERNAME = document.getElementById('username').value;
    const PASSWORD = document.getElementById('password').value;
    fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
              "Content-Type": "application/json" },
        body: JSON.stringify({username: USERNAME, password: PASSWORD}),
    })

    .then(response => {return response.json();
     })
    
    //  .then((response) => response.json()) so falsch geschrieben
    

    .then((data) => {
        if(data.access){
            localStorage.setItem('access', data.access)
            localStorage.setItem('refresh', data.refresh)

            window.location.href = 'http://127.0.0.1:5500/frontend/dashboard.html';
            

        }else{
            console.log("Login nicht möglich")
        }
    }).catch(error => console.log(error));



    return false;

}

