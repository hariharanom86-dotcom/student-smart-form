function addStudent() {
    var name = document.getElementById("name").value.trim();
    var age = document.getElementById("age").value.trim();
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value.trim();
    var gender = document.querySelector('input[name="gender"]:checked').value;

    if (!name || !age || !email) {
        alert("Please fill in all details");
        return;
    }

    var tbody = document.getElementById("student-list");
    var row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${gender}</td>
        <td>${email}</td>
        <td><button class="delete-btn" onclick="deleteStudent(event)">Delete</button></td>
    `;

    tbody.appendChild(row);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
}

function deleteStudent(event) {
    event.target.parentElement.parentElement.remove();
}