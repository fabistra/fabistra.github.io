var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbxNpy8KJEqp_WyHp2OJJ9bCINWiOXQe4EIM1gq1nr96vu3E5OQ/exec'

$('#test-form').submit(function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    alert('Submitted! We will get back to you soon.')
  );
  $('#test-form')[0].reset();
})

$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};