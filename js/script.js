// Generare una griglia 6x6 (36 boxes),
// ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.
function comparaNumero (num){
  if (num <= 5){
    var minore = true;
  }else if (num > 5
  ) {
    var minore = false
  }
  return minore;
}


$(".box").click(
  function() {
    var divClick = $(this).index();
    $.ajax(
      {
        "url": "https://flynn.boolean.careers/exercises/api/random/int",
        "method": "GET",
        "success": function (data, stato) {
        console.log(data);
        var comparato = comparaNumero(data.response)
        console.log(comparato);
        if(comparato == true){
          $(this).addClass("yellow");
        } else if (comparato == false) {
          $(this).addClass("green");
        }
        },
        error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errore);
        }
      }
    );
  }
);
