
$(document).ready(function(){
  for (i = 0; i < tasks.length; i++) {
     $('.tasks').append("<h1>" + tasks[i].description + "</h1>");
    }
});
