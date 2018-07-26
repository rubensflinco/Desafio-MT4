
var PaginaAtual = 0;
var paginas = 0;

var token_gerado = "";
$.post( "https://www.mt4.com.br/vagas/desenvolvedor-frontend-junior/api/token", function( data ) {
var token_gerado = data.token;
}, "json");

get_paginas();
get_lista(1);

function get_lista(pagina){
PaginaAtual = pagina;
$("#ListaContatos").html(' ');
$('#Alertas').html('<div class="alert alert-info"><i class="fa fa-spinner fa-pulse fa-fw"></i>Carregando...</div>');
$.get({url: "https://www.mt4.com.br/vagas/desenvolvedor-frontend-junior/api/listar",data: { token: token_gerado, page: pagina },success:  function( data ) {
jQuery.each( data.data, function( i, contato ) {
var btns = " <a href='javascript:Modal_Detalhes("+contato.id+");' class='btn btn-info btn-circle'> <i class='fa fa-info' style='margin: 4px;'></i> </a> ";
btns = btns+" <a href='javascript:Modal_Editar("+contato.id+");' class='btn btn-warning btn-circle'><i class='fa fa-pencil'></i></a>  ";
btns = btns+" <a href='javascript:Modal_Remover("+contato.id+");' class='btn btn-danger btn-circle'><i class='fa fa-times'></i></a>  ";
$("#ListaContatos").append("<tr><th scope='row'>"+contato.id+"</th><td width='80%'>"+contato.name+"</td><td>"+btns+"</td></tr>");
$('#Alertas').html("");
});
setTimeout(function(){
$(".pg_ativo").removeClass("pg_ativo");
$("#"+pagina).addClass("pg_ativo");
if (pagina <= 1){$("#left").addClass("disabled").removeAttr("href");}else{$("#left").removeClass("disabled").attr("href", "javascript:get_lista(PaginaAtual-1);");}
if (pagina >= paginas){$("#right").addClass("disabled").removeAttr("href");}else{$("#right").removeClass("disabled").attr("href", "javascript:get_lista(PaginaAtual+1);");}
}, 100);
},error: function( data ) {
$('#Alertas').html("<div class='alert alert-danger'>ERRO: não conseguimos estabelecer uma conexão com a API.</div>");
$("#ListaContatos").append("<tr><th scope='row'>0</th><td width='80%'>ERRO: não conseguimos estabelecer uma conexão com a API.</td><td>ERRO</td></tr>");
},dataType: "json"});
}

function get_paginas(){
$('#Alertas').html('<div class="alert alert-info"><i class="fa fa-spinner fa-pulse fa-fw"></i>Carregando...</div>');
$.get({url: "https://www.mt4.com.br/vagas/desenvolvedor-frontend-junior/api/listar",data: { token: token_gerado},success:  function( data ) {
var contatos = data.data.length;
var i = 0;
while (i < contatos){
if (i => 10){
paginas = paginas+1;
i = 0;
contatos = contatos-10;
$("#Paginas").append("<li><a href='javascript:get_lista(\""+paginas+"\");' id='"+paginas+"'>"+paginas+"</a></li>");
}
}
$('#Alertas').html("");

},error: function( data ) {
$('#Alertas').html("<div class='alert alert-danger'>ERRO: não conseguimos estabelecer uma conexão com a API.</div>");
$("#ListaContatos").append("<tr><th scope='row'>0</th><td width='80%'>ERRO: não conseguimos estabelecer uma conexão com a API.</td><td>ERRO</td></tr>");
},dataType: "json"});
}