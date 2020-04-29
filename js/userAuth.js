//signup
const userRegForm = document.querySelector('#userRegForm');
const signInForm = document.querySelector('#idSignIn');


auth.onAuthStateChanged(function (user) {
    // user is undefined if no user signed in
    if (user) {
        console.log("you are signed in");
        document.getElementById("idSign").style.display = "none";
        document.getElementById("idReg").style.display = "none";
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("logoutBtn").style.display = "block";


    } else {
        console.log("you are not signed in");
        document.getElementById("loginBtn").style.display = "block";
        document.getElementById("logoutBtn").style.display = "none";


    }
});

const userOnline = auth.currentUser;

const miningBtn = document.getElementById('miningBtn');
if (userOnline) {
    // User is signed in.
    miningBtn.onclick = function () {

    }

} else {
    // No user is signed in.


}

userRegForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = userRegForm['emailIn'].value;
    const psw = userRegForm['pswIn'].value;
    const pswRe = userRegForm['pswInRe'].value;


    if (psw !== pswRe) {
        alert("Passwords do not match");
    } else {
        auth.createUserWithEmailAndPassword(email, psw).then(cred => {
            console.log(cred);
        }).catch(function (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            console.log(errorCode);
        })
    }
});

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signInForm['emailSignIn'].value;
    const psw = signInForm['pswSignIn'].value;

    auth.signInWithEmailAndPassword(email, psw).then(cred => {
        console.log(cred, "signIn");
    }).catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(errorCode);
    })
});
