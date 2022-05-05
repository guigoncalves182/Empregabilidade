//document.addEventListener("DOMContentLoaded", function (e) {
  
  var customInput = document.getElementById("inputVagas");

  function s2open() {
    document.getElementById("contentSmall").style.marginTop = "2em";
    document.getElementById("listVagas").style.display = "block";
  }

  function s2close() {
    document.getElementById("contentSmall").style.marginTop = "";
    document.getElementById("listVagas").style.display = "none";
  }

  customInput.onfocus = () => {
    s2open();
  };

  customInput.onblur = () => {
    setTimeout(s2close, 100);
  };

  function s2filter() {
    var s2input, s2filter, s2list, s2item, i;

    s2input = document.getElementById("inputVagas");
    s2filter = s2input.value.toUpperCase();
    s2list = document.getElementById("listVagas");
    s2item = s2list.getElementsByClassName("listItem");

    for (i = 0; i < s2item.length; i++) {
      var txtValue = s2item[i].textContent || s2item[i].innerText;

      if (txtValue.toUpperCase().indexOf(s2filter) > -1) {
        s2item[i].style.display = "";
      } else {
        s2item[i].style.display = "none";
      }
    }
  }

  let url = "https://sganew.recode.org.br/api/publics/ceds";
  let select = document.getElementById("listVagas");

  fetch(url)
    .then((response) => response.json())
    .then((ceds) => {
      ceds.map((val) => {
        select.innerHTML =
          select.innerHTML +
          `<a class='listItem' href='#${val.id}'>${val.nome}</a>`;
        select.disabled = false;
        //customClose.disabled = false;
        customInput.disabled = false;
        customInput.placeholder = "Digite algo";
      });
    })
    .catch((err) => {
      console.log(err);
    });

//});
