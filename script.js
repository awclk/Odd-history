function submitOdd() {
    const input = document.getElementById('oddInput').value;
    
    if (input % 2 !== 0) {
        const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' });
        const historyTable = document.querySelector('#history table');
        const newRow = historyTable.insertRow(-1);

        const timeCell = newRow.insertCell(0);
        const oddCell = newRow.insertCell(1);

        timeCell.textContent = time;
        oddCell.textContent = input;
        document.getElementById('oddInput').value = ''; // Clear input
    } else {
        alert("Please enter an odd number.");
    }
}
