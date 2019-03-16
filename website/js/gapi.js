function signIn() { gapi.auth2.getAuthInstance().signIn(); }
function signOut() { gapi.auth2.getAuthInstance().signOut(); }

function signInStatusUpdate(isSignedIn) {
    if (isSignedIn) {
        $.get('https://www.googleapis.com/oauth2/v1/userinfo?access_token=' +gapi.client.getToken().access_token, result => {
            document.querySelector('#sign_out > span').innerHTML = result.name;

            document.getElementById('sign_in').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('sign_in').style.display = 'none';
                document.getElementById('sign_out').style.opacity = '0';
                document.getElementById('sign_out').style.display = 'inline-block';

                setTimeout(() => {
                    document.getElementById('sign_out').style.opacity = '1';
                }, 10);
            }, 400);
        });

        gapi.client.load('drive', 'v3', result => {
            startRecording();
        });
    }
    else {
        document.getElementById('sign_out').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('sign_out').style.display = 'none';
            document.getElementById('sign_in').style.opacity = '0';
            document.getElementById('sign_in').style.display = 'inline-block';

            setTimeout(() => {
                document.getElementById('sign_in').style.opacity = '1';
            }, 10);
        }, 400);

        stopRecording();
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
            signInStatusUpdate(gapi.auth2.getAuthInstance().isSignedIn.get());

            gapi.auth2.getAuthInstance().isSignedIn.listen(signInStatusUpdate);
        });
    }

    gapi.load('client:auth2', gapiInit);
}