app.controller('LoginController', function($scope,$http){

    $scope.email = '';
    $scope.password = '';
    $scope.statusHiddenError = true;
    $scope.statusHiddenSuccess = true;

    $scope.login = function(){
        if($scope.email == "" || $scope.email == undefined || $scope.password == "" || $scope.password == undefined)
        {
            $scope.statusHiddenError = false;
            $scope.messageError = "Preencha todos os campos";
        }
        else
        {
            var data = {
                email: $scope.email,
                password: $scope.password,
            }
            $http({
                method: "POST",
                url: URL_API + "login",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;application/json'
                },
                data: JSON.stringify(data)
            }).then(function(response){
                console.log(response);
                    $scope.statusHiddenError = true;
                    $scope.statusHiddenSuccess = false;
                    $scope.messageSuccess = 'Você foi logado com sucesso.' + 
                    '\n Seu Tokem JWT -> : ' + response.data.access_token;
            }).catch(function(err){
                    $scope.statusHiddenSuccess = true;
                    $scope.statusHiddenError = false;
                    $scope.messageError = "E-mail ou senha incorreto.";
            });
        }
          
    }

});