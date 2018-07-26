
function Modal_Detalhes(get_id){
$('#Alertas').html('<div class="alert alert-info"><i class="fa fa-spinner fa-pulse fa-fw"></i>Carregando...</div>');
$.get({url: "https://www.mt4.com.br/vagas/desenvolvedor-frontend-junior/api/detalhes",data: { token: token_gerado, id: get_id },success: function( data ) {
var html_Email = "";
jQuery.each( data.data.email, function( i, Email ) {
html_Email = html_Email+"<a href='mailto:"+Email+"'>"+Email+"</a><br>";
});
var html_Telefone = "";
jQuery.each( data.data.phone, function( i, Telefone ) {
html_Telefone = html_Telefone+"<a href='tel:"+Telefone+"'>"+Telefone+"</a><br>";
});

if (document.getElementById('Modal_Detalhes_'+data.data.id) == null)
$("body").append('<div id="Modal_Detalhes_'+data.data.id+'" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog"><div class="modal-dialog modal-lg" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><strong>ID:</strong><p>'+data.data.id+'</p><strong>Nome:</strong><p>'+data.data.name+'</p><strong>Email:</strong><br>'+html_Email+'<br><strong>Telefone:</strong><br>'+html_Telefone+'<br></div><div class="modal-footer"><button type="button" class="btn btn-default btn-circle" data-dismiss="modal"><i class="fa fa-times"></i></button></div></div></div></div>');
$('#Modal_Detalhes_'+data.data.id+'').modal("show");
$('#Alertas').html("");

},error: function( data ) {
$('#Alertas').html("<div class='alert alert-danger'>ERRO: não conseguimos estabelecer uma conexão com a API.</div>");
}, dataType: "json"});
}
