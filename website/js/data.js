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
    $
}

function addRecording(el) {
    let typeEl = el.querySelector('.sourceType').firstElementChild;
    let amountEl = el.querySelector('.sourceAmount').firstElementChild;
    let timeEl = el.querySelector('.sourceTime').firstElementChild;

    if (amountEl.value == 0) {
        return;
    }
    data.push({
        type: typeEl.value,
        amount: amountEl.value,
        time: (timeEl.value) ? + timeEl.valueAsDate : + new Date() + 1000 * 60 * 60 * 8
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
    timeEl.valueAsDate = new Date(Math.floor(data[data.length-1].time / 1000 / 60) * 1000 * 60);
    btnEl.value = 'Remove';

    el.parentElement.insertBefore(oldRow, el);

    saveRecording();
}