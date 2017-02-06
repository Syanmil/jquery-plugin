(function( $ ) {
  $.fn.cekEmail = function() {
    let pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return pattern.test(this.val())
  };
})(jQuery);
