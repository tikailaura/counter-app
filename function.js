let count = 0;

const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");

function increment() {
    count++;
    countEl.textContent = count;
}

function save() {
    saveEl.textContent += count + " - ";

    count = 0;
    countEl.textContent = count;
}

function clearEntries() {
    count = 0;
    countEl.textContent = count;
    saveEl.textContent = "Previous entries: ";
}