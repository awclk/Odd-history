document.addEventListener("DOMContentLoaded", function() {
    const numberInput = document.getElementById('numberInput');
    const historyTableBody = document.getElementById('historyTableBody');

    // Example function to add history
    function addHistoryEntry(time, number) {
        const row = historyTableBody.insertRow();
        row.insertCell(0).innerText = time;
        row.insertCell(1).innerText = number;
    }

    // Assume you have a way to trigger adding history entries
    numberInput.addEventListener('change', function() {
        const currentTime = new Date().toLocaleString();
        addHistoryEntry(currentTime, numberInput.value);
        numberInput.value = ''; // Clear input after addition
    });
});
