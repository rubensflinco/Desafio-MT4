
function get_pesquisa(){
$("#Nav_Paginas").html(' ');
$("#ListaContatos").html(' ');
$('#Alertas').html('<div class="alert alert-info"><i class="fa fa-spinner fa-pulse fa-fw"></i>Carregando...</div>');
$.get({url: "https://www.mt4.com.br/vagas/desenvolvedor-frontend-junior/api/listar",data: { token: token_gerado},success:  function( data ) {
jQuery.each( data.data, function( i, contato ) {
var Lista_name = contato.name;
var i_pesquisa = $("#i_pesquisa").val();
if (Lista_name.toLowerCase().includes(i_pesquisa.toLowerCase())){
var btns = " <a href='javascript:Modal_Detalhes("+contato.id+");' class='btn btn-info btn-circle'> <i class='fa fa-info' style='margin: 4px;'></i> </a> ";
btns = btns+" <a href='javascript:Modal_Editar("+contato.id+");' class='btn btn-warning btn-circle'><i class='fa fa-pencil'></i></a>  ";
btns = btns+" <a href='javascript:Modal_Remover("+contato.id+");' class='btn btn-danger btn-circle'><i class='fa fa-times'></i></a>  ";
$("#ListaContatos").append("<tr><th scope='row'>"+contato.id+"</th><td width='80%'>"+contato.name+"</td><td>"+btns+"</td></tr>");
setTimeout(function(){$('#Alertas').html("");}, 100);
}else{
$('#Alertas').html("<div class='alert alert-danger'>ERRO: nada encontrado com "+i_pesquisa.toLowerCase()+".</div>");
}
});
setTimeout(function(){$("#i_pesquisa").val("");}, 200);
},error: function( data ) {
$('#Alertas').html("<div class='alert alert-danger'>ERRO: não conseguimos estabelecer uma conexão com a API.</div>");
$("#ListaContatos").append("<tr><th scope='row'>0</th><td width='80%'>ERRO: não conseguimos estabelecer uma conexão com a API.</td><td>ERRO</td></tr>");
},dataType: "json"});
}
