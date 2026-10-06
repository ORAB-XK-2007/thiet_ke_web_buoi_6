function insert_Row() {
    var table = document.getElementById('sampleTable');

    var rowCount = table.rows.length + 1;

    var newRow = table.insertRow(-1);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = "Row" + rowCount + " cell1";
    cell2.innerHTML = "Row" + rowCount + " cell2";
}