// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "jquery"
import "semantic-ui"
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener('DOMContentLoaded', () => {
  $('.ui.dropdown').dropdown();
  // inicialize aqui outros componentes Semantic UI que usar, ex:
  // $('.ui.modal').modal();
});