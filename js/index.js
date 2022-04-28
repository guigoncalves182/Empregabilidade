// Modal and backdrop
$('body').prepend(`
    <div class='backDrop false'></div>
`);

$('body').append(`
<div class='modal'> 
    <div class='closeModal'> X </div>
    <div class='modalTitle'>
    <span class='titlePrimary modalTitleText'>Modal</span> 
    </div>

    <hr />

    <div class='modalBody'> 
    Modal Text 
    </div>

    <div class='modalFooter'> 
        <hr /> 
        <button class='buttonSecondary modalButton'>OK</button> 
    </div> 
</div>
`);

function closeModal() {
  $(".backDrop").removeClass("true").addClass("false");
  $(".modalButton").empty();
  $(".modalFooter").hide();
}

//string, string, ?string, ?string (positive, negative)
function openModal(title, content, buttonText, style) {
  if (!title || !content) return false;
  $(".backDrop").removeClass("false").addClass("true");
  $(".modalTitleText").text(title);
  $(".modal").removeClass("positive").removeClass("negative");
  if(style) $(".modal").addClass(style);

  $(".modalBody").text(content);
  if (buttonText) {
    $(".modalFooter").show();
    $(".modalButton").text(buttonText);
  }
}

$(".backDrop, .closeModal, .modalButton").click(() => {
  closeModal();
});
