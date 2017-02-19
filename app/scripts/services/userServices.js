(function () {
    'use strict';
    angular.module('app')
    .service('userService', function ($rootScope, $location, $mdToast) {
    /*Esta função faz o papel de validação que seria feito no backend */
    this.validaLogin = function(user){
    
        //usuários fictícios que possam ser usados pela página e pra validar o login
        var usuarios = [
            {"id": 10, "name":'Jhon Doe', "cpf": '11111111111', "agencia": 1010, "conta_corrente": 101010, "password":'123', "valor_conta": 1000},
            {"id": 10, "name":'Katherine Wilson', "cpf": '22222222222', "agencia": 1010, "conta_corrente": 202020, "password":'321', "valor_conta": 2000}
        ]
    
        //Nesse trecho, um for para validar o login
        angular.forEach(usuarios, function(value, index){
            if(value.agencia == user.agencia &&
                value.conta_corrente == user.conta_corrente &&
                value.password == user.password){
                delete value.password;
                $rootScope.usuarioLogado = value;
                $location.path('/logado')
            }else if(!($rootScope.usuarioLogado)){
                $mdToast.show(
                $mdToast.simple()
                    .textContent('Dados incorretos. Tente novamente.')
                    .position('top right' )
                    .hideDelay(3000)
                );
            }
        })
    }
    this.logout = function(){
        $rootScope.usuarioLogado = null;
        $location.path('/logout')
    }
    })
})();