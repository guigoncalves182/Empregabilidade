function openNav() {
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  document.getElementById("backdrop").style.display = "block";

  if (vw < 576) {
    document.getElementById("sidenav").style.width = "100%";
  } else {
    document.getElementById("sidenav").style.width = "370px";
  }
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("backdrop").style.display = "none";
}