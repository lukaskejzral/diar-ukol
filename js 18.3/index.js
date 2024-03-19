function pridatAkci() {
    var udalostInput = document.getElementById("event");
    var datumInput = document.getElementById("date");
    var udalost = udalostInput.value;
    var datum = datumInput.value;
 
    if (udalost.trim() === "" || datum.trim() === "") {
        alert("Vyplň všechna pole pro zapsání");
        return;
    }
    var seznamUdalosti = document.getElementById("events-list");
 
    var li = document.createElement("li");
    li.className = "event-item";
    li.textContent = udalost + " - " + datum;

    var tlacitkoOdebrat = document.createElement("button");
    tlacitkoOdebrat.textContent = " Odebrat";
    tlacitkoOdebrat.onclick = function() {
        li.remove();
    };
    li.appendChild(tlacitkoOdebrat);
    seznamUdalosti.appendChild(li);
}