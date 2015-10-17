app.controller('InstantSearchController', function ($scope, $http) {
    $http.get("http://localhost:18643/api/DogBreed/GetBreed?keyword=l")
    .success(function (response) { $scope.names = response; });
});