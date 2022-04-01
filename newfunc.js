function Menu(namUse, authState) {
  const menu = `
      <div class="container-fluid mt-0 mb-0 m-5 pt-0 pb-0 p-5">
          <a class="navbar-brand" href="#">Front</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Posts</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Users</a>
                  </li>
              </ul>
          </div>
  
          <div class="d-flex">
              <h5 class="text-light mb-0 mt-0">${namUse}</h5>
              <a href="newpage.html" class="text-primary mb-0 mt-0 m-3"><h6>${authState}</h6></a>
          </div>
      </div>`;

  return menu;
}

function makePost(title, content, updatedAt) {
  const htmlPost = `
      <div class="card mt-3 w-50 position-relative start-50 translate-middle-x">
          <div class="card-body">
              <div class="float-start">
                  <h5 class="card-title" >${title}</h5>
              </div>
              <div class="float-end ">
                  <a class="text-primary" href="editPost.html"><i class="bi bi-pencil"></i></a>
                  <a class="text-danger" href="deletePost.html"><i class="bi bi-trash" style="margin-right: 0;"></i></a>
              </div>
              <br>
              <br>
              <p class="card-text">${content}</p>
              <p class="card-text">
                  <small class="text-muted">Ultima atualização ${updatedAt}</small>
              </p>
          </div>
      </div>`;

  return htmlPost;
} // getPost

function formatDate(date) {
  var newDate = "";
  var hour = "";

  for (var i = 0; i < date.length; i++) {
    if (date[i] == "T") {
      newDate = date.slice(0, i);
    }
  }
  for (var i = 11; i < date.length; i++) {
    if (date[i] == ".") {
      break;
    }
    //console.log(date[i]);
    hour += date[i];
    //console.log(hour);
  }
  return newDate + " às " + hour;
} // getPost

function page(name) {
  if (name[0] == "l" || name[0] == "r") {
    // to uppercase
    name = name.charAt(0).toUpperCase() + name.slice(1);
  }

  if (name == "Login") {
    document.getElementById("conteudo").innerHTML = Login;
  } else if (name == "Registo") {
    document.getElementById("conteudo").innerHTML = Registo;
  } else {
    document.getElementById("conteudo").innerHTML =
      '<h1 class="position-relative start-50 translate-middle-x">404 Not Found</h1>';
  }
}

function changeModal(id) {
  if (id == "modalRegisto") {
    document.querySelector("#close-R").click();
    document.querySelector("#btn-modal-Log").click();
  } else if (id == "modalLogin") {
    document.querySelector("#close-L").click();
    document.querySelector("#btn-modal-Reg").click();
  }
}

function formPostCreate() {
  const htmlPost = `
        <form class="w-50 position-relative start-50 translate-middle-x">
            <div class="mb-3">
                <label for="titPost" class="form-label">Titulo</label>
                <input type="text" class="form-control" id="titPost">
            </div>
            <div class="mb-3">
                <label for="textPost" class="form-label">Texto</label>
                <textarea class="form-control" id="textPost" rows="3"></textarea>
            </div>
            <button onclick="createPosts()" class="btn btn-primary">Postar</button>
        </form>`;

  return htmlPost;
}

function createIdent(titulo) {
  return titulo.replace(" ", "-").toLowerCase();
}
