setInterval(() => {
  let dt = new Date();
  let a = dt.toLocaleTimeString();
  let time = document.getElementById("time");

  time.innerHTML = a;
}, 1000);

// let b = document.getElementById('black');
// // b.classList.toggle('.main')

async function fet() {
  let res = await fetch("http://localhost:3000/emp");
  let con = await res.json();
  let show = document.getElementById("showdata");

  let d = con
    .map(
      (e) => `
    
    <tr>
        <td>  ${e.id} </td>
        <td>  ${e.customer_name} </td>
        <td>  ${e.food_item} </td>
        <td>  ${e.total_price} </td>
          <td> <button onclick="mydata(${e.id})">Delete</button> </td>
           <td> <button onclick="update(${e.id} )">Edit</button> </td>
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

function insert() {
  let data = {
    id: document.getElementById("id").value,
    customer_name: document.getElementById("name").value,
    food_item: document.getElementById("item").value,
    total_price: document.getElementById("price").value,
  };
  fetch("http://localhost:3000/emp", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => alert("data inserted"))
    .catch((err) => alert("error"));
}

let storied = 0;
async function update(id) {
  storied = id;
  let res = await fetch(`http://localhost:3000/emp/${id}`);
  let r = await res.json();
  let p = `<input type = "text" value = ${r.id} placeholder = "enter your id" id = "id1" /></br></br>
  <input type = "text" value = ${r.customer_name} placeholder = "enter your name" id = "name1"  /></br></br>
  <input type = "text" value = ${r.food_item} placeholder = "enter your item" id = "item1"   /></br></br>
  <input type = "text" value = ${r.total_price} placeholder = "enter your price" id = "price1"   /></br></br>
  <input type = "submit" onclick = "finalupdate()" value = "update" id="btn"/>
  
  `;
  document.getElementById("demo").innerHTML = p;
}

function finalupdate() {
  let mydata = {
    id: document.getElementById("id1").value,
    customer_name: document.getElementById("name1").value,
    food_item: document.getElementById("item1").value,
    total_price: document.getElementById("price1").value,
  };
  fetch(`http://localhost:3000/emp/${storied}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(mydata),
  })
    .then((res) => alert("update data"))
    .catch((err) => alert("delete data"));
}
