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
.directive('numberOnly', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      var negativo = /\-/.test(attrs.numberOnly);
      var decimal = /\.|\,/.test(attrs.numberOnly) ? /\.|\,/.exec(attrs.numberOnly)[0] : null;

      var regExp = '^';
      regExp += negativo ? '[\\-]{0,1}' : '';
      regExp += '[\\d]+';
      if(decimal != null) {
        regExp += '[\\'+decimal+'][\\d]+|';
        if(negativo) {
          regExp += '[\\-]{0,1}'
        }
        regExp += '[\\d]+'
      }
      regExp += '';
      regExp = new RegExp(regExp);

      ngModel.$parsers.unshift(function(input) {
        if(input === undefined) return null;
        if(input === null) return;

        input = input.toString().replace(/\./, decimal);
        if(input == '-') return input;
        if(decimal !== null && input.charAt(input.length-1) == decimal) return input;

        input = regExp.test(input) ? regExp.exec(input)[0] : null;

        input = decimal != null ? parseFloat(tInput.replace(/\,/, '.')) : parseInt(input);

        var viewVal = isNaN(input) ? '' : input;

        ngModel.$setViewValue(decimal != null ? viewVal.toString().replace(/\./, decimal) : viewVal.toString());
        ngModel.$render();

        return isNaN(input) ? null : input;
      });

      ngModel.$formatters.unshift(function(value) {
        if(value !== undefined && value !== null) {
          return decimal != null ? value.toString().replace(/\./, decimal) : value.toString();
        }
      });
    }
  }
  })
})();