var backgroundImage;

function addPost() {
  let title = document.getElementById("title");
  let description = document.getElementById("description");
  console.log("bgImage",backgroundImage)
  console.log(title.value, description.value);
  let posts = document.getElementById("posts");
  if (title.value.trim() && description.value.trim()) {
    // Template String

    posts.innerHTML += `<div class="card mb-2">
    <div class="card-header">
        @Post
    </div>
    <div style="background-image: url(${backgroundImage} class="card-body">
        <blockquote class="blockquote mb-0">
            <p>${title.value}</p>
            <footer class="blockquote-footer">${description.value}</footer>
        </blockquote>
    </div>
</div>`;

title.value = "";
description.value = "";
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter title & description!",
    });
  }
}

function selectImage(src){
    backgroundImage = src;
    var bgImage = document.getElementsByClassName("bg-image");
    for(var i = 0; i < bgImage.length; i++){
        bgImage[i].className = "bg-image"
        event.target.className += " img-list-selected"
    }
} 