const chips = $('#chips-wrapper');
chips.remove();
const contents = $('#contents');
const contentsParent = contents.parent();
contents.remove();
contentsParent.prepend('<img id="theImg" />');
contentsParent.prepend('<div id="message"><p>Get back to achieving your dreams</p></div>');
const message = $('#message');
message.addClass('beautText');
$.get('https://unsplash.it/list', function(result) {
  result.id = getRandomArbitrary(1, 999);
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  document.getElementById("theImg").src = 'https://unsplash.it/1200/800?image=' + result.id;
});