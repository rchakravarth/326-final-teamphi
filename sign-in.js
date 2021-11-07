
const test = {
    user1: {
        "email":"adaml@umass.edu",
        "pass":"password1"
    }
}

let user = '';
let pass = '';


document.getElementById('log').addEventListener("click", () => {
    user = document.getElementById("typeEmail").value;
    pass = document.getElementById("typePassword").value;
  
    ///console.log(user);

    if (test.user1.email === user && test.user1.pass === pass){
        /// let user in
        /// iterate though all users
        window.alert("Logging in...")
    }
    else{
        window.alert("Incorrect email/password")
    }
});

/// eventually I would like to make a responsive remember me button.  For now I'll continue it later
function saveCred(){
    const storage = window.localStorage;
    const state = {'username': document.getElementById("typeEmail").value,
                    'password' : document.getElementById("typePassword").value,
                    };
    storage.setItem("state", JSON.stringify(state));
}

function restoreCred(){
    const storage = window.localStorage;
    const saveFile = storage.getItem("state");
    if (saveFile){
        const state = JSON.parse(saveFile);
        document.getElementById("typeEmail").value = state["username"];
        document.getElementById("typePassword").value = state["password"];
    }
}


document.getElementById('remember').addEventListener("change", e=> {
    if(e.target.checked){
        saveCred();
    }
})  



