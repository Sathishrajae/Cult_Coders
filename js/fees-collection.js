 let feeRecords = [
      { id: 1, name: 'Raja', amountPaid: 500, feeStatus: 'Paid' },
      { id: 2, name: 'Rajesh', amountPaid: 0, feeStatus: 'Pending' },
      { id: 3, name: 'Charles', amountPaid: 300, feeStatus: 'Pending' }
    ];

    function renderFeeTable() {
      const tbody = document.querySelector("#feeTable tbody");
      tbody.innerHTML = '';
      feeRecords.forEach(record => {
        const badgeClass = record.feeStatus === 'Paid' ? 'badge-paid' : 'badge-unpaid';
        tbody.innerHTML += `
          <tr>
            <td>${record.name}</td>
            <td>${record.amountPaid}</td>
            <td><span class="${badgeClass}">${record.feeStatus}</span></td>
            <td>
              <button class="btn btn-sm btn-success" onclick="markAsPaid(${record.id})">Mark as Paid</button>
              <button class="btn btn-sm btn-warning" onclick="markAsPending(${record.id})">Mark as Pending</button>
              <button class="btn btn-sm btn-info" onclick="editPayment(${record.id})">Edit Payment</button>
            </td>
          </tr>
        `;
      });
    }

    document.getElementById('addFeeForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('studentName').value.trim();
      const amount = parseFloat(document.getElementById('amountPaid').value);
      if (name && amount >= 0) {
        feeRecords.push({ id: Date.now(), name, amountPaid: amount, feeStatus: amount > 0 ? 'Paid' : 'Pending' });
        renderFeeTable();
        this.reset();
      }
    });

    function markAsPaid(id) {
      const record = feeRecords.find(r => r.id === id);
      if (record) { record.feeStatus = 'Paid'; renderFeeTable(); }
    }

    function markAsPending(id) {
      const record = feeRecords.find(r => r.id === id);
      if (record) { record.feeStatus = 'Pending'; renderFeeTable(); }
    }

    function editPayment(id) {
      const record = feeRecords.find(r => r.id === id);
      if (record) {
        const newAmount = prompt("Enter new payment amount:", record.amountPaid);
        if (newAmount !== null) {
          record.amountPaid = parseFloat(newAmount);
          record.feeStatus = record.amountPaid > 0 ? 'Paid' : 'Pending';
          renderFeeTable();
        }
      }
    }

    function searchFee() {
      const input = document.getElementById("searchFee").value.toLowerCase();
      document.querySelectorAll("#feeTable tbody tr").forEach(row => {
        const name = row.cells[0].textContent.toLowerCase();
        row.style.display = name.includes(input) ? "" : "none";
      });
    }

    window.onload = renderFeeTable;