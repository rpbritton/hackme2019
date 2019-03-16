let data = [];

var recording = false

function startRecording() {
    recording = true;
}

function stopRecording() {
    recording = false;
}

// setInterval(() => {
//     if (recording) {
//         $.get
//     }
// }, 1000);

function saveRecording() {
    // gapi.client.drive.files.create({
    //     resource: {
    //         'name': 'yay',
    //         'mimeType': 'application/json',
    //         'parents': 'appDataFolder'
    //     },
    //     media: window.btoa(JSON.stringify(data))
    // })
    // .then(result => {
    //     console.log(result);
    //     gapi.client.drive.files.get({
    //         result.result.id
    //     })
    // });

    // document.cookie = (window.btoa(JSON.stringify(data)));

    console.log(document.cookie);
}

function addRecording(el) {
    let typeEl = el.querySelector('.sourceType').firstElementChild;
    let amountEl = el.querySelector('.sourceAmount').firstElementChild;
    let timeEl = el.querySelector('.sourceTime').firstElementChild;

    if (amountEl.value == 0) {
        return;
    }

    let time = new Date();
    if (timeEl.value) {
        let tempTime = timeEl.valueAsDate;
        time.setHours(tempTime.getHours() + 5, tempTime.getMinutes());
    }
    console.log(time);

    data.push({
        type: typeEl.value,
        amount: amountEl.value,
        time: time
    });

    typeEl.value = 'coffee';
    amountEl.value = '';
    timeEl.value = '';
    
    let oldRow = el.cloneNode(true);

    typeEl = oldRow.querySelector('.sourceType').firstElementChild;
    amountEl = oldRow.querySelector('.sourceAmount').firstElementChild;
    timeEl = oldRow.querySelector('.sourceTime').firstElementChild;
    let btnEl = oldRow.querySelector('.sourceBtn').firstElementChild;

    typeEl.value = data[data.length-1].type;
    amountEl.value = data[data.length-1].amount;
    timeEl.valueAsDate = new Date(Math.floor((data[data.length-1].time - 4 * 60 * 60 * 1000) / 1000 / 60) * 1000 * 60);
    btnEl.value = 'Remove';

    el.parentElement.insertBefore(oldRow, el);

    saveRecording();
}

function calculate() {
    let cupsSplit = [];
    for (let dater of data) {
        cupsSplit.push([dater.time, dater.amount]);
    }

    cupsSplit.sort((a, b) => {
        return a[0] - b[0];
    });

    let zTotal = 1;
    if(cupsSplit.length > 1) {
        for(let i = 0; i < cupsSplit.length - 1; i++) {
            let timeSinceUNIX = new Date().getTime() - cupsSplit[i][0];
            let timeInHours = (timeSinceUNIX) / 1000 / 60 / 60;

            let origContent = Number(cupsSplit[i][1] + ".0");

            let origTime = Math.log(0.08438*origContent)/Math.log(1.571966);
            zTotal += (origTime - timeInHours)/(origContent*Math.pow(0.5, (1-(0.2*origTime))));
        }
    }

    let timeSinceUNIX = new Date().getTime() - cupsSplit[cupsSplit.length-1][0];
    console.log(new Date());
    console.log(cupsSplit[cupsSplit.length-1][0]);
    let timeInHours = (timeSinceUNIX) / 1000 / 60 / 60;
    console.log(timeInHours);
    let origContent = Number(cupsSplit[cupsSplit.length-1][1] + ".0");
    let currentTime = Math.log(0.08438*origContent)/Math.log(1.571966);
    currentTime -= timeInHours;

    let finalTime = currentTime * zTotal;

    let hours = Math.floor(finalTime);
    let minutes = Math.floor((finalTime - hours) * 60);
    if (finalTime < 0) {
        hours = 0;
        minutes = 0;
    }
    document.getElementById("HEEEEELP").style.display = 'inline-block';
    document.getElementById("result").style.display = 'inline-block';
    document.getElementById("result").innerHTML = hours +":" +((minutes < 10) ? "0" + minutes : minutes);
    
    document.getElementById("DIEPAWAN").style.display = 'inline-block';
    document.getElementById("latency").style.display = 'inline-block';
    let latency = finalTime*finalTime * -0.79767 + 12.09254 * finalTime;
    document.getElementById('latency').innerHTML = Math.round(latency) + " minutes";
}