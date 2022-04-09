$(function () {
  loadRecipie();
  $("#recipie").on("click", ".btn-danger", handleDelete);
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
function handleDelete() {
  var btn = $(this);
  var parentDiv = btn.closest(".recipie");
  let id = parentDiv.attr("data-id");
  console.log(id);
  $.ajax({
    url:"https://usman-recipes.herokuapp.com/api/recipes/"+id,
    method: "DELETE",
    success: function(){
      loadRecipie();
    }
  });
  // console.log("handle Delete");
}
function loadRecipie() {
  $.ajax({
    url: "https://usman-recipes.herokuapp.com/api/recipes",
    method: "GET",
    success: function (response) {
      console.log(response);
      var recipie = $("#recipie");
      recipie.empty();
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        recipie.append(
          `<div class="recipie" data-id="${rec._id}"><h3>${rec.title}</h3><p><button class="btn btn-danger btn-sm float-right">Delete</button><button class="ml-3 btn btn-warning btn-sm float-right">Edit</button>${rec.body}</p></div>`
        );
      }
    },
  });
}
