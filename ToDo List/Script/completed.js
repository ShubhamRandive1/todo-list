var Completed = JSON.parse(localStorage.getItem("completedTodo"));
console.log(Completed);


Completed.map(function (elem) {
    var tr = document.createElement("tr");

    var td = document.createElement("td");
    td.innerText = elem.itemName;

    var td1 = document.createElement("td");
    td1.innerText = elem.itemQty;

    var td2 = document.createElement("td");
    td2.innerText = elem.itemPriority;


    tr.append(td, td1, td2);

    document.querySelector("#body").append(tr);
});