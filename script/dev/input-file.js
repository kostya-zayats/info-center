$('.input-file input[type=file]').on('change', function(){
  let file = this.files[0];
  $(this).next().html(file.name).addClass('uploaded');
});