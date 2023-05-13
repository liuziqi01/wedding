// Load the data from the JSON file

var alltable=[];

const xhr = window.XMLHttpRequest ? new XMLHttpRequest(): new ActiveXObject("Microsoft.XMLHTTP"); 
xhr.open('GET', '../resources/names.txt', false);
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
		const text = xhr.responseText;
		const lines = text.split('\n');
		lines.forEach(line => {
      // Process each line here
      const names = line.split(',');
      alltable.push(names);
      console.log(names);
  });
	}
};
xhr.send();

var tableNumber = 1;
// Create a table for each table in the data
alltable.forEach(tableData => {
	var table = document.createElement('table');
	tableData.sort();
	table.id = "table" + tableNumber;
	table.innerHTML = `
	<thead>
	<tr>
	<th colspan="3">Table ${tableNumber}</th>
	</tr>
	</thead>
	<tbody>
	${tableData.map(name => `<tr><td>${name}</td></tr>`).join('')}
	</tbody>
	`;
	document.querySelector('.tables').appendChild(table);
	tableNumber++;
});


