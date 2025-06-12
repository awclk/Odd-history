document.getElementById('submitBtn').addEventListener('click', function() {
    const oddInput = document.getElementById('oddInput');
    const oddNumber = parseInt(oddInput.value);

    if (isNaN(oddNumber) || oddNumber % 2 === 0) {
        alert('Please enter a valid odd number.');
        return;
    }

    const currentTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Colombo" });
    
    const historyBody = document.getElementById('historyBody');
    const newRow = historyBody.insertRow();
    
    const timeCell = newRow.insertCell(0);
    const oddCell = newRow.insertCell(1);
    
    timeCell.textContent = currentTime;
    oddCell.textContent = oddNumber;

    oddInput.value = ''; // Clear the input field
});
