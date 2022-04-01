// URLs --------------------------------------------------------------------------------------------------------------------
const url = "http://localhost:1337/api/";
const userUrl = "http://localhost:1337/api/users";
const postsUrl = "http://localhost:1337/api/posts";

// Variaveis de Utilizador -------------------------------------------------------------------------------------------------
var userNam = "";
var userMail = "";
var userPass = "";
var userToken = "";

if (userToken == "" || userToken == null) {
  document.getElementById("menu").innerHTML = Menu("", "Login");

  setTimeout(() => {
    document.querySelector("#btn-modal-Log").click();
  }, 1000);
} else {
  document.getElementById("menu").innerHTML = Menu(userNam, "Log out");
}

function login() {
  userMail = document.getElementById("inputEmail").value;
  userPass = document.getElementById("inputPassword").value;

  const resp = async () => {
    try {
      console.log(userMail);
      console.log(userPass);

      const resposta = await axios.post(`${url}auth/local`, {
        identifier: userMail,
        password: userPass,
      });

      userToken = resposta.data.jwt;
      userNam = resposta.data.user.username;
      document.querySelector("#close-L").click();
      document.getElementById("menu").innerHTML = Menu(userNam, "Log out");
      getPosts();

      console.log(resposta);
    } catch (err) {
      console.log(err);
    }
  };

  resp();
} // login -> getPosts
function getPosts() {
  const resp = async () => {
    try {
      const postes = await axios.get(`${postsUrl}?populate=*`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      var postsArray = postes.data.data;
      console.log(postsArray);
      //var postsPag = res.data.meta.pagination;

      //console.log(userToken);

      document.getElementById("conteudo").innerHTML = formPostCreate();

      postsArray.forEach((post) => {
        var title = post.attributes.Titulo;
        var content = post.attributes.Conteudo;
        var updatedAt = formatDate(post.attributes.updatedAt);

        // console.log(updatedAt);
        document.getElementById("conteudo").innerHTML += makePost(
          title,
          content,
          updatedAt
        );
      });
    } catch (err) {
      console.log(err);
    }
  };

  resp();
} // getPosts -> makePost - formatDate
function createPosts() {
  tituloL = document.getElementById("titPost").value;
  texto = document.getElementById("textPost").value;
  identificador = createIdent(tituloL);

  console.log(tituloL);
  console.log(texto);
  console.log(identificador);

  const resp = async () => {
    try {
      const poste = await axios.post(`${postsUrl}`, {
        data: {
          Titulo: tituloL,
          Conteudo: texto,
          Identificador: identificador,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
} // createPosts ->
