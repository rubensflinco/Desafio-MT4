
function Remover_Contato(get_id){
$('#Alertas').html('<div class="alert alert-info"><i class="fa fa-spinner fa-pulse fa-fw"></i>Carregando...</div>');
$.ajax({url: "https://www.mt4.com.br/vagas/desenvolvedor-frontend-junior/api/excluir",type: "DELETE", data:{ token: token_gerado, id: get_id },success: function( data ) {
$('#Status_Modal_Remover_'+get_id+'').html("<h2 style='color: #5cb85c'>OK: dados removidos!!!</h2><br>");
$('#Modal_Remover_'+get_id+'').modal("hide");
setTimeout(function(){$('#Modal_Remover_'+get_id+'').remove();}, 1000); 
$('#Alertas').html("<div class='alert alert-success'>OK: dados removidos.</div>");
setTimeout(function(){get_lista(PaginaAtual);}, 1000);
},error: function( data ) {
$('#Alertas').html("<div class='alert alert-danger'>ERRO: não conseguimos estabelecer uma conexão com a API.</div>");
$('#Modal_Remover_'+get_id+'').modal("hide");
setTimeout(function(){$('#Modal_Remover_'+get_id+'').remove();}, 500);
}, dataType: "json"});
}

function Modal_Remover(get_id){
if (document.getElementById('Modal_Remover_'+get_id) == null)
$("body").append('<div id="Modal_Remover_'+get_id+'" class="modal fade bs-example-modal" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body" align="center" id="Status_Modal_Remover_'+get_id+'"><h2>Você tem certeza que quer apagar isso??</h2><br><a href="javascript:Remover_Contato('+get_id+');" class="btn btn-mt4 btn-lg btn-circle"><i class="fa fa-check"></i></a> <button type="button" class="btn btn-default btn-lg btn-circle" data-dismiss="modal"><i class="fa fa-times"></i></button></div></div></div></div>');
$('#Modal_Remover_'+get_id+'').modal("show");
}
