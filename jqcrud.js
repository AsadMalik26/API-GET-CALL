$(function () {
  loadRecipie();
  //$("#addBtn").click(addRecipie);
});
/*
function addRecipie() {
  var title = $("#title").val();
  var body = $("#body").val();
  $.ajax({
    url: "https://usman-recipes.herokuapp.com/api/recipes",
    method: "POST",
    data: { title, body },
    success: function (response) {
      console.log(response);
    //   loadRecipie();
    },
  });
}
*/

function loadRecipie() {
  $.ajax({
    url: "https://usman-recipes.herokuapp.com/api/recipes",
    method: "GET",
    success: function (response) {
      console.log(response);
      var recipie = $("#recipie");
      recipie.empty();
      for(var i = 0; i<response.length; i++)
      {
        var rec = response[i];
        recipie.append(`<div class="recipie"><h3>${rec.title}</h3><p><button class="ml-3 btn btn-danger btn-sm float-right">Delete</button>${rec.body}</p></div>`)
      }
    },
  });
}
