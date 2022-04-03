app.controller('RegisterController', function($scope,$http){

    $scope.name = "";
    $scope.email = "";
    $scope.password = "";
    $scope.statusHiddenError = true;
    $scope.statusHiddenSuccess = true;

    $scope.register = function()
    {
        if($scope.name == "" || $scope.name == undefined || $scope.password == "" || $scope.password == undefined || $scope.email == "" || $scope.email == undefined)
        {
            $scope.statusHiddenError = false;
            $scope.messageError = "Preencha todos os campos!";
        }
        else
        {
            var data = 
            {
                name: $scope.name,
                email: $scope.email,
                password: $scope.password
            }

            $http({
                method: "POST",
                url: URL_API + 'register',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;application/json'
                },
                data: JSON.stringify(data)
            }).then(function(response){
                if(typeof response.data.success == "string")
                {
                    $scope.statusHiddenError = true;
                    $scope.statusHiddenSuccess = false;
                    $scope.messageSuccess = response.data.success;
                }
                if(typeof response.data.error == "string")
                {
                    $scope.statusHiddenError = false;
                    $scope.statusHiddenSuccess = true;
                    $scope.messageError = response.data.error;
                }
            }).catch(function(err){
                $scope.statusHiddenError = false;
                $scope.statusHiddenSuccess = true;
                $scope.messageError = "Erro ao cadastrar";
            })

        }
    }

});