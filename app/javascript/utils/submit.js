export const submitMessage = () => {
  $("#message_body").on("keydown", function (e) {
    if (e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault();
      $("button").click();
      e.target.value = "";
    }
  });
};
