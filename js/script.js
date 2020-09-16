// Generare una griglia 6x6 (36 boxes),
// ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.
function comparaNumero (num){
  var minore = false;
  if (num <= 5){
    minore = true;
  }else if (num > 5) {
    minore = false;
  }
  return minore;
}


$(".box").click(
  function() {
    $(".number").html("");
    $(this).removeClass("yellow");
    $(this).removeClass("green");
    var divClick = $(this);
    $.ajax(
      {
        "url": "https://flynn.boolean.careers/exercises/api/random/int",
        "method": "GET",
        "success": function (data, stato) {
        console.log(data);
        var comparato = comparaNumero(data.response);
        console.log(comparato);
        if(comparato == true){
          $(divClick).addClass("yellow");
        } else if (comparato == false) {
          $(divClick).addClass("green");
        }
        $(".number").append(data.response);
        },
        error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errore);
        }
      }
    );
  }
);
