// check star on click
$(".fa").click(function () {
  $(this).addClass("checked");
});

// delete all div on clicking on X
$('img[alt="close icon"]').click(function () {
  $(this).parent().parent().parent().remove();
});

//show the social media div when clicking on share button
$('img[alt="sharing icon"]').click(function () {
  document.getElementById("socialMediaShare").style.display = "block";
});
// hide social media div on clicking on x button
document
  .getElementById("closeModalSocialMediaShare")
  .addEventListener("click", () => {
    document.getElementById("socialMediaShare").style.display = "none";
  });
