// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "jquery";
import "semantic-ui";
import "@hotwired/turbo-rails";
import "controllers";

$(document).on("turbo:load", () => {
  $(".ui.menu").tab();
  $(".ui.dropdown").dropdown();
  $(".ui.checkbox").checkbox();
  $(".ui.modal").modal();

  $(".message .close").on("click", function () {
    $(this).closest(".message").transition("fade");
  });
});
