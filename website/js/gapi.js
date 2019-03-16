function signIn() { gapi.auth2.getAuthInstance().signIn(); }
function signOut() { gapi.auth2.getAuthInstance().signOut(); }

function signInStatusUpdate() {
    if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
        console.log(gapi.client);
        // gapi.client.profile.get().then(response => {
        //     document.getElementById('sign_in').querySelector('span').innerHTML = response.result.names[0].givenName;
        // });

        document.getElementById('sign_in').style.display = 'none';
        document.getElementById('sign_out').style.display = 'block';
    }
    else {
        document.getElementById('sign_in').style.display = 'block';
        document.getElementById('sign_out').style.display = 'none';
    }
}

function gapiLoaded() {
    function gapiInit() {
        gapi.client.init({
            apiKey: 'AIzaSyAEipXFOpl8KVSkvYb1qXRFLRx1bot7Eyk',
            clientId: '364658592156-oaj5rf5ncijfsbtiofnlc67ak60b88d4.apps.googleusercontent.com',
            scope: 'profile https://www.googleapis.com/auth/drive.appdata'
        })
        .then(() => {
            signInStatusUpdate();

            gapi.auth2.getAuthInstance().isSignedIn.listen(signInStatusUpdate);
        });
    }

    gapi.load('client:auth2', gapiInit);
}