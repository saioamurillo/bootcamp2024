document.querySelector("body").innerHTML += `
    <input type="text" id="username">
    <input type="password" id="password">
    <button id="btn">Register</button>
    <button id="login">Login</button>
`;

document.querySelector("#btn").addEventListener("click", () => {
    let username = document.querySelector("#username").value;
    let pwd = document.querySelector("#password").value;

    let data = {
        username,
        pwd
    };

    data = JSON.stringify(data)

    localStorage.setItem("loginData", data);
})

document.querySelector("#login").addEventListener("click", () => {
    let username = document.querySelector("#username").value;
    let pwd = document.querySelector("#password").value;

    let data = {
        username, pwd
    }

    let localStgLoginData = localStorage.getItem("loginData");

    localStgLoginData = JSON.parse(localStgLoginData);

    console.log(localStgLoginData, data);

    if (localStgLoginData.username === data.username && localStgLoginData.pwd === data.pwd){
        alert("access granted")
    } else {
        alert("wrong data")
    }
})