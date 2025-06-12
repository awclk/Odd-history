function addHistory() {
    const numberInput = document.getElementById('numberInput');
    const historyTableBody = document.getElementById('historyTableBody');

    const numberValue = numberInput.value;
    if (numberValue === '') {
        alert('Please enter a number');
        return;
    }

    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toLocaleString();

    const newRow = document.createElement('tr');
    newRow.innerHTML = <td>${formattedDateTime}</td><td>${numberValue}</td>;

    historyTableBody.appendChild(newRow);
    numberInput.value = '';  // Clear the input after submission
}
