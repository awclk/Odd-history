function addHistory() {
    const input = document.getElementById('oodInput');
    const historyList = document.getElementById('historyList');

    if (input.value !== "") {
        const listItem = document.createElement('li');
        listItem.textContent = input.value;
        historyList.appendChild(listItem);
        input.value = ""; // Clear input field
    } else {
        alert("Please enter a value.");
    }
}
