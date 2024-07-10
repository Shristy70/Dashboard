async function fet() {
  let res = await fetch("http://localhost:3000/emp");
  let con = await res.json();
  let show = document.getElementById("showdata");

  let d = con
    .map(
      (e) => `
    
    <tr>
        <td>  ${e.id} </td>
        <td>  ${e.emp_name} </td>
        <td>  ${e.course} </td>
        <td>  ${e.location} </td>
          <td> <button onclick="mydata(${e.id})">Delete</button> </td>
    </tr>
    
    
    `
    )
    .join(" ");
  show.innerHTML = d;
}
fet();

function mydata(id) {
  fetch(`http://localhost:3000/emp/${id}`, {
    method: "DELETE",
  }).then((RES) => alert("SUCCESSFUL delete"));
}

function insert1() {
  let data = {
    id: document.getElementById("id").value,
    emp_name: document.getElementById("name").value,
    course: document.getElementById("course").value,
    location: document.getElementById("location").value,
  };
  fetch("http://localhost:3000/emp", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
