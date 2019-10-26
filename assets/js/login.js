const LOGIN_USUARIO = "admin@email.com.br";
const SENHA_USUARIO = "123logar";

function loginPagina(){

    var email = $("#emailUsuario").val();
    var passoword = $("#passwordUsuario").val();

    if ((email === LOGIN_USUARIO) && (passoword === SENHA_USUARIO))  {        
        toastr.success('Usuario encontrado');
        setTimeout(function(){location.href="index.html"} , 5000);   
    }else if (email != LOGIN_USUARIO){
        toastr.error('Email inválido!');
    } else if(passoword != SENHA_USUARIO){
        toastr.error('Senha inválida!');
    }        

}

