function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return;
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

setCookie("perfil", "Candidato", 10);

if (getCookie("perfil") == "Empresa") {
  $(".sidenavBody").prepend(`
        <h1> Empresa </h1>
        <a class="buttonNavRegular" href="#">Minhas vagas</a>
    `);
} else if (getCookie("perfil") == "Candidato") {
  $(".sidenavBody").prepend(`
        <h1> Candidato </h1>
        <a class="buttonNavMain" href="curriculo.html">Meu curriculo</a>
        <a class="buttonNavRegular" href="#">Minhas vagas</a>
    `);
}
