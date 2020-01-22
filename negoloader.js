$( ".card-main_gate" ).append("<input type='submit' class='tombolnegonew' value='NEGO NOW'>");
$(document).ready(function() {
$(document).on('click', '.tombolnegonew', function(){
  // let linkterdekat = $(this).closest('.card').find('a').attr('href');
  let linkterdekat = $(this).closest('.card-main_gate').find('a').attr('href');
  $('#link1').val(linkterdekat);
  
  let tujuanhotel = $(this).closest('.card').find('.card-info').find('.card-hotel_name').text();
  $('#tujuan1').val(tujuanhotel);
  // alert(tujuanhotel);
  // .card-hotel_name__text
  
  
  
  // $(this).closest('.wrap').find('.Level3')
  let linkharga = $(this).closest('.card-main_gate').find('a').find('.main_gate-price_info').find('.main_gate-price').find('.currency_font.currency_font--idr').text();
  $('#harga1').val(linkharga);
  
  // let gambartujuan = $(this).closest('.card').find('.card-gallery').find('ul').find('li').hide();
  // alert(gambartujuan);
  
  
  
  
  //   let copyText = $(this).closest('.card').find('a').attr('href');
  // copyToClipboard(copyText);
  // window.open("https://cdn.statically.io/gh/abinyadihyah/diopt/094a203b/inputnego.html", '_blank');
})

function copyToClipboard(value) {
  var $tmpInput = $('<input>');
  $tmpInput.val(value);
  $('body').append($tmpInput);
  $tmpInput.select();
  document.execCommand('copy');
  $tmpInput.remove();
}
});