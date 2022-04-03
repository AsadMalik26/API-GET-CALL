$(function () {
  $("#addBtn").click(addRecipie);
});

function addRecipie() {
  var title = $("#title").val();
  var body = $("#body").val();
  $.ajax({
    url: "https://usman-recipes.herokuapp.com/api/recipes",
    method: "POST",
    data: { title, body },
    success: function (response) {
      console.log(response);
    //   loadRecipies();
    },
  });
}

function loadRecipies() {
    $.ajax({
      url: "https://usman-recipes.herokuapp.com/api/recipes",
      method: "GET",
      error: function(response) {
        var recipes = $("#recipes");
        recipes.html("An Error has occured");
      },
      success: function(response) {
        console.log(response);
        var recipes = $("#recipes");
        recipes.empty();
        for (var i = 0; i < response.length; i++) {
          var rec = response[i];
          recipes.append(
            `<div class="recipe" data-id="${rec._id}"><h3>${rec.title}</h3><p><button class="btn btn-danger btn-sm float-right">delete</button><button class="btn btn-warning btn-sm float-right">Edit</button> ${rec.body}</p></div>`
          );
          // recipes.append("<div><h3>" + rec.title + "</h3></div>");
        }
      }
    });
  }
