var para = document.getElementById("para");
var inp = document.getElementById("inp");
var btn = document.getElementById("btn");

function findWord() {
    var searchTerm = inp.value.trim();

    if (searchTerm === "") {
        alert("Please enter a word to find");
        return;
    }

    var replacedContent = para.innerHTML.replaceAll(searchTerm, `<span style="background-color: black; color: white;">${searchTerm}</span>`);

    if (replacedContent === para.innerHTML) {
        alert("No matches found");
    }

    para.innerHTML = replacedContent;
}