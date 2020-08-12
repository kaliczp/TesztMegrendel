/*
<tr>
                    <td>1</td>
                    <td>Kiss</td>
                    <td>János</td>
                    <td>55</td>
                    <td>
                        <div class="btn-group">
                            <button class="btn-info btn">
                                módosítás
                            </button>
                            <button class="btn btn-danger">
                                törlés
                            </button>
                        
                        </div>
                    </td>
                </tr>
                */
let users = [
    {surname: "Berger", firstname: "Whitney", age: 22},
    {surname: "Nagy", firstname: "Árpád", age: 44},
    {surname: "Kiss", firstname: "Bence", age: 33},
    {surname: "Doe", firstname: "John", age: 42},
    {surname: "Vadölő", firstname: "Jack", age: 32},
    {surname: "Rostás", firstname: "Márió", age: 45},
    {surname: "Fehér", firstname: "Péter", age: 54},
    {surname: "Piros", firstname: "Gizella", age: 12}
];
let tableBody = document.querySelector("#userTable tbody")
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};
let createButtonGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn-group";
    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = "módosítás";
    let btnDanger = document.createElement("button");
    btnDanger.className = "btn btn-danger";
    btnDanger.innerHTML = "törlés";

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);
    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}

for(let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for(let value of Object.values(users[k])) {
        createTD(value, tr);
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);
}