
function Modal_Editar(get_id){
$('#Alertas').html('<div class="alert alert-info"><i class="fa fa-spinner fa-pulse fa-fw"></i>Carregando...</div>');
$.get({url: "https://www.mt4.com.br/vagas/desenvolvedor-frontend-junior/api/detalhes",data: { token: token_gerado, id: get_id },success: function( data ) {
if (document.getElementById('Modal_Editar_'+data.data.id) == null)
$("body").append('<div id="Modal_Editar_'+data.data.id+'" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog"><div class="modal-dialog modal-lg" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><form method="post" action="javascript:Editar_Contato('+data.data.id+');" id="Form_Modal_Editar_'+data.data.id+'"><div class="modal-body"><input value="'+data.data.id+'" type="hidden" class="form-control" id="id" name="id" required><input value="'+token_gerado+'" type="hidden" class="form-control" id="token" name="token" required><br><strong>Nome:</strong><input value="'+data.data.name+'" type="text" class="form-control" id="name" name="name" placeholder="Nome" required><br><strong>Email:</strong><input value="'+data.data.email+'" type="text" class="form-control" id="email" name="email" placeholder="Email" required><br><strong>Telefone:</strong><input value="'+data.data.phone+'" type="text" class="form-control" id="phone" name="phone" placeholder="Telefone " required><br></div><div class="modal-footer"><button type="submit" class="btn btn-mt4 btn-circle"><i class="fa fa-floppy-o"></i></button><button type="button" class="btn btn-default btn-circle" data-dismiss="modal"><i class="fa fa-times"></i></button></div></form></div></div></div>');
$('#Modal_Editar_'+data.data.id+'').modal("show");
$('#Alertas').html("");
},error: function( data ) {
$('#Alertas').html("<div class='alert alert-danger'>ERRO: não conseguimos estabelecer uma conexão com a API.</div>");
}, dataType: "json"});
}

function Editar_Contato(get_id){
$('#Alertas').html('<div class="alert alert-info"><i class="fa fa-spinner fa-pulse fa-fw"></i>Carregando...</div>');
$.post({url: "https://www.mt4.com.br/vagas/desenvolvedor-frontend-junior/api/salvar",data: $("#Form_Modal_Editar_"+get_id).serialize(),success: function( data ) {
$('#Modal_Editar_'+get_id+'').modal("hide");
setTimeout(function(){$('#Modal_Editar_'+get_id+'').remove();}, 500);
$('#Alertas').html("<div class='alert alert-success'>OK: atualizamos os dados.</div>");
setTimeout(function(){get_lista(PaginaAtual);}, 1000);
},error: function( data ) {
$('#Alertas').html("<div class='alert alert-danger'>ERRO: "+data.responseJSON.error+".</div>");
$('#Modal_Editar_'+get_id+'').modal("hide");
setTimeout(function(){$('#Modal_Editar_'+get_id+'').remove();}, 500);
}, dataType: "json"});
}
