//var app = angular.module('myApp', ['ngRoute', 'ngCookies', 'angularModalService', 'ngNotificationsBar', 'ngMessages']);
var app = angular.module('myApp', ['ngRoute', 'ngCookies',  'ngNotificationsBar', 'ngMessages']);

// configure our routes
app.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'Default.html',
            controller: 'mainController'
        })

        // route for the home page
        .when('/Home', {
            templateUrl: 'Default.html',
            controller: 'mainController'
        })

        // route for the home page
        .when('/Temp1', {
            templateUrl: 'UnderConstruction1.html',
            controller: 'temp1Controller'
        })

  // route for the home page
        .when('/Temp2', {
            templateUrl: 'UnderConstruction2.html',
            controller: 'temp2Controller'
        })

  // route for the home page
        .when('/Temp3', {
            templateUrl: 'UnderConstruction3.html',
            controller: 'temp3Controller'
        })

 // route for the wall of heroes page
        .when('/WallOfHeroes', {
            templateUrl: 'WallOfHeroes.html',
            controller: 'wallofheroesController'
        })

                // route for the about page
        .when('/PetAdoptionDetail', {
            templateUrl: 'PetAdoptionDetail.html',
            controller: 'PetAdoptionDetailController'
        })
  // route for the map page
        .when('/MyMap', {
            templateUrl: 'MyMap.html',
            controller: 'mymapController'
        })
        // route for the about page
        .when('/About', {
            templateUrl: 'About.html',
            controller: 'aboutController'
        })

        .when('/Lost', {
            templateUrl: 'Lost.html',
            controller: 'aboutController'
        })

        // route for the pricing page
        .when('/Pricing', {
            templateUrl: 'Pricing.html',
            controller: 'registerpetController'
        })

        // route for the Team
        .when('/Team', {
            templateUrl: 'TheTeam.html',
            controller: 'theteamController'
        })

        // route for the found pet
        .when('/Found', {
            templateUrl: 'FoundPet.html',
            controller: 'findpetController'
        })

        // route for pet adoption
        .when('/PetAdoption', {
            templateUrl: 'PetAdoption.html',
            controller: 'SPCAController'
        })

        // route for pet registered
        .when('/PetsRegistered', {
            templateUrl: 'PetsRegistered.html',
            controller: 'petsregisteredController'
        })

        // route for logging in
        .when('/Login', {
            templateUrl: 'Login.html',
            controller: 'LoginController'
        })
        // route for FAQ
        .when('/FAQ', {
            templateUrl: 'FAQ.html',
            controller: 'faqController'
        })

        // route for the about page
        .when('/RegisterPet', {
            templateUrl: 'RegisterPet.html',
            controller: 'registerpetController'
        })

         .when('/Uploadimages', {
             templateUrl: 'UploadImages.html',
             controller: 'uploadimageController'
         })
                 .when('/Editimage', {
                     templateUrl: 'Editimage.html',
                     controller: 'editimageController'
                 })
         .when('/Register', {
             templateUrl: 'Register.html',
             controller: 'formController'
         })
         .when('/ContactUs', {
             templateUrl: 'ContactUs.html',
             controller: 'contactUsController'
         })

        // route for the contact page
        .when('/dogbreedselect', {
            templateUrl: 'DogBreedSelect.html',
            controller: 'InstantSearchController'
        });


});

app.directive('loading', ['$http', function ($http) {
    return {
        restrict: 'A',
        link: function (scope, elm, attrs) {
            scope.isLoading = function () {
                return $http.pendingRequests.length > 0;
            };
            scope.$watch(scope.isLoading, function (v) {
                if (v) {
                    elm.show();
                } else {
                    elm.hide();
                }
            });
        }
    };
}]);

app.filter('searchFor', function () {

    // All filters must return a function. The first parameter
    // is the data that is to be filtered, and the second is an
    // argument that may be passed with a colon (searchFor:searchString)

    return function (arr, searchString) {

        if (!searchString) {
            return arr;
        }

        var result = [];

        searchString = searchString.toLowerCase();

        // Using the forEach helper method to loop through the array
        angular.forEach(arr, function (item) {

            if (item.Dogbreedname.toLowerCase().indexOf(searchString) !== -1) {
                result.push(item);
            }

        });

        return result;
    };

});

app.filter('searchForSPCA', function () {

    // All filters must return a function. The first parameter
    // is the data that is to be filtered, and the second is an
    // argument that may be passed with a colon (searchFor:searchString)

    return function (arr, searchString) {

        if (!searchString) {
            return arr;
        }

        var result = [];

        searchString = searchString.toLowerCase();

        // Using the forEach helper method to loop through the array
        angular.forEach(arr, function (item) {

            if (item.Name.toLowerCase().indexOf(searchString) !== -1) {
                result.push(item);
            }

        });

        return result;
    };

});

app.factory('userService', function () {
    var userData = [
        { yearSetCount: 0 }
    ];

    return {
        user: function () {
            return userData;
        },
        setEmail: function (email) {
            userData.email = email;
        },
        getEmail: function () {
            return userData.email;
        },
        setspcaid: function (spcaid) {
            userData.spcaid = spcaid;
        },
        getsetspcaid: function () {
            return userData.spcaid;
        },
        setphoto: function (photo) {
            userData.spcaid = photo;
        },
        getphoto: function () {
            return userData.photo;
        },
        setlogin: function (login) {
            userData.login = login;
        },
        getlogin: function () {
            return userData.login;
        }
    };
});


var compareTo = function () {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function (scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function (modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function () {
                ngModel.$validate();
            });
        }
    };
};

app.directive("compareTo", compareTo);