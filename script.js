async function fet(){
    let res = await fetch("http://localhost:3000/emp")
    let con = await res.json()

    let d = con.map((e)=>`
    
    <tr>
        <th>  ${e.id} </td>
        <th>  ${e.emp_name} </td>
        <th>  ${e.location} </td>
    </tr>
    
    
    `).join(" ")
}
fet()