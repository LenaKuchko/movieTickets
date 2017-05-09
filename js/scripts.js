// function Theater() {
//   movies = ["titanic", "rogueOne", "thePickOfDestiny", "2012", "cars", "findingDori", "wall-e"];
//   // ticket
// }
function Ticket (movie, age, matinee) {
  this.movie = movie;
  this.age = age;
  this.matinee = matinee;

}
function Movie(name) {
  this.name = name;
  this.price = 5;
}

function getPrice (ticket){
  if (ticket.age === "1" || ticket.age === "4") {
    ticket.movie.price += 0.7;
  }
  else if (ticket.age === "2") {
    ticket.movie.price *= 0.9;
  }
  else  {
    ticket.movie.price *= 1;
  }

  if (ticket.matinee === "matinee") {
    ticket.movie.price*=0.8;
  } else {
    ticket.movie.price*=1.1;
  }
  return ticket.movie.price.toFixed(2);
}

$(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    var movie = new Movie ($("#movie").val());

    console.log(movie);
    var age = $("#age").val();
    var matinee = $("input:radio[name=matinee]:checked").val();


    var newTicket = new Ticket (movie, age, matinee);
    var outputPrice = getPrice(newTicket);

    $("#outputMovie").text(movie.name);
    $("#outputMatinee").text(newTicket.matinee);
    $("#outputPrice").text(outputPrice);
    $("#output").show();

  });
});
