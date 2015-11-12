
app.controller('faqController', function ($scope, $location, userService) {


});


app.controller('wallofheroesController', function ($scope, $location, userService, $http) {
    $http.get("/api/Heroes/GetHeroes")
   .success(function (response) {
       $scope.names = response;
       //$scope.nameofspca = response[0].Name;
       //$scope.office = response[0].Office;
       //$scope.afterhours = response[0].Afterhours;
       //$scope.emailaddress = response[0].emailaddress;
       //$scope.physicaladdress = response[0].physicaladdress;
   });

    var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
    ];

    var d = new Date();
    $scope.month = monthNames[d.getMonth()];

});

app.controller('editimageController', function ($scope, $location, userService) {

    //Go back
    $scope.goBack = function (hash) {
        console.log(hash);
        $location.path(hash);
    }
});

app.controller('uploadimageController', function ($scope, $location, userService) {

    //Go back
    $scope.goBack = function (hash) {
        console.log(hash);
        $location.path(hash);
    }

    //$scope.show = function () {
    //    ModalService.showModal({
    //        templateUrl: 'Modal.html',
    //        controller: "uploadimageController"
    //    }).then(function (modal) {
    //        modal.element.modal();
    //        modal.close.then(function (result) {
    //            $scope.message = "You said " + result;
    //        });
    //    });
    //};









    if (getCookie("petname") == 'undefined' || getCookie("petname") == null || getCookie("petname") == "") {
    }
    else {
        $scope.petname = getCookie("petname");
    }




});


app.controller('LoginController', function ($scope, $http, $location, $route, $window, userService) {
    // create a blank object to hold our form information
    // $scope will allow this to pass between controller and view
    $scope.formData = {};


    //// process the form
    $scope.processLogin = function () {
        $http({
            method: 'POST',
            url: '../Login.ashx',
            data: $.param($scope.formData),  // pass in data as strings
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        })
        .success(function (data) {
            console.log(data);

            if (data == "1") {
                var types = [BootstrapDialog.TYPE_SUCCESS];

                $.each(types, function (index, type) {
                    BootstrapDialog.show({
                        type: type,
                        title: 'Login succeeded',
                        cssClass: 'login-dialog',
                        message: "Congratulations, you have sucessfully logged in",
                        buttons: [{
                            label: 'Ok',
                            cssClass: 'btn btn-primary-orange-home',
                            action: function (dialogItself) {
                                dialogItself.close();
                            }

                        }]
                    });
                });


                userService.setlogin(true)
                $location.path('/');
                //                $window.location.href = "StaticViews/Index.html#";
                //               $window.location.reload();



            }
            else {
                var types = [BootstrapDialog.TYPE_DANGER];

                $.each(types, function (index, type) {
                    BootstrapDialog.show({
                        type: type,
                        title: 'Login failed',
                        cssClass: 'login-dialog',
                        message: data,
                        buttons: [{
                            label: 'Ok',
                            cssClass: 'btn btn-dialog-alert',
                            action: function (dialogItself) {
                                dialogItself.close();
                            }

                        }]
                    });
                });
            }

            //if (!data.success) {
            //    // if not successful, bind errors to error variables
            //    $scope.errorName = data.errors.name;
            //    $scope.errorSuperhero = data.errors.superheroAlias;
            //} else {
            //    // if successful, bind success message to message
            //    $scope.message = data.message;
            //}
        });
    };

});

app.controller('formController', function ($scope, $http, $location) {
    // create a blank object to hold our form information
    // $scope will allow this to pass between controller and view
    $scope.formData = {};


    //$scope.processForm = function () {
    //    alert("myForm.$invalid = " + $scope.myForm.$invalid);
    //}

    //// process the form
    $scope.processForm = function () {
        if ($scope.myForm.$invalid == false) {
            $http({
                method: 'POST',
                url: '../Submitform.ashx',
                data: $.param($scope.formData),  // pass in data as strings
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
            .success(function (data) {
                console.log(data);

                if (data == "You successfully registered") {
                    var types = [BootstrapDialog.TYPE_SUCCESS];

                    $.each(types, function (index, type) {
                        BootstrapDialog.show({
                            type: type,
                            title: 'Registration succeeded',
                            cssClass: 'login-dialog',
                            message: "Congratulations, you have sucessfully registered",
                            buttons: [{
                                label: 'Ok',
                                cssClass: 'btn btn-primary-orange-home',
                                action: function (dialogItself) {
                                    dialogItself.close();
                                }

                            }]
                        });
                    });

                    $location.path('/');

                }
                else {
                    var types = [BootstrapDialog.TYPE_DANGER];

                    $.each(types, function (index, type) {
                        BootstrapDialog.show({
                            type: type,
                            title: 'Registration failed',
                            cssClass: 'login-dialog',
                            message: data,
                            buttons: [{
                                label: 'Ok',
                                cssClass: 'btn btn-dialog-alert',
                                action: function (dialogItself) {
                                    dialogItself.close();
                                }

                            }]
                        });
                    });
                }


            });
        }
    };

});

app.controller('contactUsController', function ($scope, $http, $location) {

    $scope.formData = {};


    //$scope.processForm = function () {
    //    alert("myForm.$invalid = " + $scope.myForm.$invalid);
    //}

    //// process the form
    $scope.processForm = function () {
        if ($scope.myForm.$invalid == false) {
            $http({
                method: 'POST',
                url: '../ContactUs.ashx',
                data: $.param($scope.formData),  // pass in data as strings
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
            .success(function (data) {
                console.log(data);

                var types = [BootstrapDialog.TYPE_SUCCESS];

                $.each(types, function (index, type) {
                    BootstrapDialog.show({
                        type: type,
                        title: 'Your request has been sent',
                        cssClass: 'login-dialog',
                        message: "We will be in contact with you within 24 hours",
                        buttons: [{
                            label: 'Ok',
                            cssClass: 'btn btn-primary-orange-home',
                            action: function (dialogItself) {
                                dialogItself.close();
                            }

                        }]
                    });
                });

                $location.path('/');

            });
        }
    };

});


app.controller('NavController', function ($scope, $location) {
    // console.log("username = " + getCookie("yourname"));
    if (getCookie("yourname") == 'undefined' || getCookie("yourname") == null || getCookie("yourname") == "") {
        console.log("NavController = 1");
        $scope.showlogin = true;
        $scope.showlogout = false;
    }
    else {
        console.log("NavController = 2");
        $scope.showlogin = false;
        $scope.showlogout = true;
    }
});


function delayedLoop() {
    // (3) do action
    alert(i);
    // (4) if the end of the array has been reached, stop
    if (++i == 6) {
        return;
    }

    // (5) recursively call the delayed loop function with a delay
    window.setTimeout(delayedLoop, 1000);
}

function resetall() {
    $('#1').css("background", "#016AA3");
    $('#2').css("background", "#016AA3");
    $('#3').css("background", "#016AA3");
    $('#4').css("background", "#016AA3");
    $('#5').css("background", "#016AA3");
    $('#6').css("background", "#016AA3");

    $('#b1').css("background", "#016AA3");
    $('#b2').css("background", "#016AA3");
    $('#b3').css("background", "#016AA3");
    $('#b4').css("background", "#016AA3");
    $('#b5').css("background", "#016AA3");
    $('#b6').css("background", "#016AA3");

    $('#p1').hide();
    $('#p2').hide();
    $('#p3').hide();
    $('#p4').hide();
    $('#p5').hide();
    $('#p6').hide();
}

app.controller('mainController', function ($scope, notifications, $route, $location, userService, $window) {

    console.log("userService.getlogin = " + userService.getlogin);
    if (userService.getlogin() == true) {
        $window.location.href = "StaticViews/Index.html#";
        $window.location.reload();
    }

    $scope.userloggedin = checkifuserloggedin();

    $scope.side = 'front';
    $scope.toggle = function () {
        $scope.side = $scope.side == 'back' ? 'front' : 'back';
    }

    var one_day = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = new Date(2015, 9, 1);
    console.log(date1_ms);
    var date2_ms = new Date();
    console.log(date2_ms);

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;

    // Convert back to days and return
    $scope.days = Math.round(difference_ms / one_day);

    var message1 = "<i>\"To my pet"
    message1 += "<br />I will never move and not take you with me"
    message1 += "<br />I will never put you in a shelter and leave"
    message1 += "<br />I will never let you starve"
    message1 += "<br />I will never let you hurt"
    message1 += "<br />I will never desert you when you get old"
    message1 += "<br />If that time comes, I will be there to hold you"
    message1 += "<br />Because I love you and you are family\"</i>"
    message1 += "<br /><br />by unkown author and describes our mission. So how do we go about this?";

    var message2 = "To help you find your baby when he/she gets lost you do the following:";
    message2 += "<ul class=\"ulspecial\">";
    message2 += "<li>Register using a valid email address.";
    message2 += "<li>Upload information of all your pets located at one address.";
    message2 += "<li>Upload photos of your pets as well as any distinct markings.";
    message2 += "<li>When your baby (pet) manage to get lost we will generate Lost Posters for you and activate the community as well as email every vet and animal shelter in your community to help look.";
    message2 += "</ul>";

    var message3 = "In South Africa we are very much a community based society.";
    message3 += "PetSociety want to access your location as we use Google maps to locate you and draw a 5 km radius around you.";
    message3 += "We then limit search to this area to focus efforts. Experience has shown this is where you will find your pet if they get lost.";
    message3 += "<div style=\"text-align: center;\"><img src=\"../Images/googlemapDialog.png\" height=\"120\"/></div>";

    var message4 = "So the question what will this cost you?";
    message4 += "The quick answer is nothing.";
    message4 += "However we would really appreciate a donation of R50 of which R10 is donated to your charity of choice";
    message4 += "We really feel we can make a difference but we have costs of course to maintain the code and to host it";
    message4 += "To make a donation see our pricing page";

    $scope.showintro = function () {
        var howManyDialogs = 5;
        var titles = ["5 titele <br /><span class=\"dialognumber\">5 of 5</span>", "Pricing!! <br /><span class=\"dialognumber\">4 of 5</span>", "Community? <br /><span class=\"dialognumber\">3 of 5</span>", "Assist you when your pet gets lost <br /><span class=\"dialognumber\">2 of 5</span>", "Why become part of Pet Society <br /><span class=\"dialognumber\">1 of 5</span>"];
        var messages = [
        "5",
        message4,
        message3,
        message2,
message1];
        var buttonlabels = ["5 of 5", "Next", "Next", "Next", "Next"];

        for (var i = 1; i <= howManyDialogs; i++) {
            if (i == 1) {
                var dialog = new BootstrapDialog({
                    title: titles[i - 1],
                    message: messages[i - 1],
                    cssClass: 'intro-dialog',
                    buttons: [{
                        label: 'Finish',
                        cssClass: 'btn-dialogcloseall',
                        action: function () {
                            // You can also use BootstrapDialog.closeAll() to close all dialogs.
                            $.each(BootstrapDialog.dialogs, function (id, dialog) {
                                dialog.close();
                            });
                        }
                    }]
                });
            }
            else {
                var dialog = new BootstrapDialog({
                    title: titles[i - 1],
                    message: messages[i - 1],
                    cssClass: 'intro-dialog',
                    buttons: [{
                        label: buttonlabels[i - 1],
                        cssClass: 'btn-dialogclose',
                        action: function (dialogRef) {
                            dialogRef.close();
                        }
                    }, {
                        label: 'Skip intro',
                        cssClass: 'btn-dialogcloseall',
                        action: function () {
                            // You can also use BootstrapDialog.closeAll() to close all dialogs.
                            $.each(BootstrapDialog.dialogs, function (id, dialog) {
                                dialog.close();
                            });
                        }
                    }]
                });
            }
            dialog.open();
        }
    }

    $scope.gotoPage = function (hash) {
        $location.path(hash);
    }

    if (getCookie("showintro") == 'undefined' || getCookie("showintro") == null || getCookie("showintro") == "") {
        $scope.showintro();
        setCookie("showintro", "true");
    }


    $scope.help1 = function () {
        BootstrapDialog.show({
            title: help1TitleVar(), //external myVariables.js
            message: help1messsageVar(), //external myVariables.js
            buttons: [{
                label: 'OK',
                cssClass: 'btn-dialogcloseall',
                action: function (dialog) {
                    dialog.close();
                }
            }]
        });
    };

    $scope.help2 = function () {
        BootstrapDialog.show({
            title: help2TitleVar(), //external myVariables.js
            message: help2messsageVar(), //external myVariables.js
            buttons: [{
                label: 'OK',
                cssClass: 'btn-dialogcloseall',
                action: function (dialog) {
                    dialog.close();
                }
            }]
        });
    };

    $scope.help3 = function () {
        BootstrapDialog.show({
            title: help3TitleVar(), //external myVariables.js
            message: help3messsageVar(), //external myVariables.js
            buttons: [{
                label: 'OK',
                cssClass: 'btn-dialogcloseall',
                action: function (dialog) {
                    dialog.close();
                }
            }]
        });
    };

    $scope.help4 = function () {
        BootstrapDialog.show({
            title: help4TitleVar(), //external myVariables.js
            message: help4messsageVar(), //external myVariables.js
            buttons: [{
                label: 'OK',
                cssClass: 'btn-dialogcloseall',
                action: function (dialog) {
                    dialog.close();
                }
            }]
        });
    };


    $scope.messages = function () {
        notifications.closeAll();
        notifications.showSuccess("Lorem ipsum dolor sit amet, te ipsum petentium instructior quo. Eu probo homero eam. Nec mollis epicuri placerat no, sed latine volutpat conceptam in. Populo legendos elaboraret eum te, inani nihil vidisse at cum. Mutat falli mea in, volutpat vituperatoribus mea eu. No cum error nemore tractatos.");
    };









    //$scope.showwiz = true;

    //resetcolors();


    //function resetcolors() {
    //    $scope.showbutton1 = "btn-lgsmall-fontsmall btn-primary-orange-home";
    //    $scope.showbutton2 = "btn-lgsmall-fontsmall btn-primary-orange-home";
    //    $scope.showbutton3 = "btn-lgsmall-fontsmall btn-primary-orange-home";
    //    $scope.disablebutton1 = false;
    //    $scope.disablebutton2 = false;
    //    $scope.disablebutton3 = false;
    //}

    //resetall();

    //$scope.hidewizard = function () {
    //    resetcolors();
    //    $scope.showbutton2 = "btn-lgsmall-fontsmall btn-primary-disable-home";
    //    $scope.showwiz = false;
    //    $scope.disablebutton2 = true;
    //}

    //$scope.hidewizard(); //Initialize on first load

    //$scope.showwizard = function () {
    //    resetcolors();
    //    $scope.showbutton1 = "btn-lgsmall-fontsmall btn-primary-disable-home";
    //    $scope.showwiz = true;
    //    $scope.disablebutton1 = true;
    //}



    //window.setTimeout(function () {
    //    resetall();
    //    $('#1').css("background", "#ff8300");
    //    $('#b1').css("background", "#ff8300");
    //    $('#p1').show();
    //}, 1000);

    //window.setTimeout(function () {
    //    resetall();
    //    $('#2').css("background", "#ff8300");
    //    $('#b2').css("background", "#ff8300");
    //    $('#p2').show();
    //}, 4000);

    //window.setTimeout(function () {
    //    resetall();
    //    $('#3').css("background", "#ff8300");
    //    $('#b3').css("background", "#ff8300");
    //    $('#p3').show();
    //}, 7000);

    //window.setTimeout(function () {
    //    resetall();
    //    $('#4').css("background", "#ff8300");
    //    $('#b4').css("background", "#ff8300");
    //    $('#p4').show();
    //}, 10000);

    //window.setTimeout(function () {
    //    resetall();
    //    $('#5').css("background", "#ff8300");
    //    $('#b5').css("background", "#ff8300");
    //    $('#p5').show();
    //}, 13000);

    //window.setTimeout(function () {
    //    resetall();
    //    $('#6').css("background", "#ff8300");
    //    $('#b6').css("background", "#ff8300");
    //    $('#p6').show();
    //}, 16000);

    //window.setTimeout(function () {
    //    resetall();
    //}, 20000);


    var username = getCookie("yourname");
    $scope.username = username;
    console.log("defaultcomntroller username = " + username);

    if (getCookie("yourname") == 'undefined' || getCookie("yourname") == null || getCookie("yourname") == "") {
        $scope.registermessage = "Register";
        $scope.show = false;
        $scope.showdefaultimages = true;
        $scope.firstimage = "https://petsocietyphotos.blob.core.windows.net/animalphotos/image.jpg";
        $scope.secondimage = "https://petsocietyphotos.blob.core.windows.net/animalphotos/FB_20150817_14_00_42_Saved_Picture.jpg";
        $scope.thirdimage = "../Content/genericCat.jpg";
        if (getCookie("loggedin") == 'true') {
            $scope.showlogout = true;
            setCookie("loggedin", "false");
        }
    }
    else {
        $scope.registermessage = "Upload pet photos";
        var checkloggedinshown = getCookie("loggedin");
        console.log("loggedin cookie = " + getCookie("loggedin"));
        if (getCookie("loggedin") == 'undefined' || getCookie("loggedin") == null || getCookie("loggedin") == "" || getCookie("loggedin") == 'false') {
            $scope.show = true;
            $scope.username = username;
            //alert("test");
            setCookie("loggedin", "true");
        }
        else {
            $scope.show = false; // only show logged in once
        }
    }
});

app.controller('mymapController', function ($scope) {
    //Google maps
    //function initialize() {


    var lat = -26.282623;
    var lng = 28.350689;
    var myLatLng = { lat: lat, lng: lng };

    $(function () {
        var mapOptions = {
            //center: new google.maps.LatLng(myLatLng),
            center: myLatLng,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            draggable: false,
            panControl: true,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            streetViewControl: true,
            overviewMapControl: true,
            rotateControl: true,
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hello World!'
        });

        var cityCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: 'Yellow',
            fillOpacity: 0.35,
            map: map,
            center: myLatLng,
            radius: 5000
        });

    });
});

app.controller('aboutController', function ($scope) {

});

app.controller('validateCtrl', function ($scope) {
    $scope.user = '';
    $scope.email = '';
});

app.controller('PetAdoptionDetailController', function ($scope, $http, $sce, $location, userService) {
    console.log(userService.getsetspcaid());

    var spcaidVal;
    if (userService.getsetspcaid() == undefined) {
        spcaidVal = localStorage.getItem("spcaidVal");
    }
    else {
        spcaidVal = userService.getsetspcaid();
        localStorage.setItem("spcaidVal", userService.getsetspcaid());
    }



    //  $http.get("http://localhost:18643/api/SPCA/GetSPCA?memberid=l")
    $http.get("http://petsupload.azurewebsites.net/api/SPCAsingle/GetSPCA?spcaid=" + spcaidVal)
   .success(function (response) {
       $scope.names = response;
       $scope.nameofspca = response[0].Name;
       $scope.office = response[0].Office;
       $scope.afterhours = response[0].Afterhours;
       $scope.emailaddress = response[0].emailaddress;
       $scope.physicaladdress = response[0].physicaladdress;
   });

    $scope.goBack = function (hash) {
        console.log(hash);
        $location.path(hash);
    }

    $scope.selection = [];

    //Google maps
    //function initialize() {


    //var lat = -26.282623;
    //var lng = 28.350689;
    //var myLatLng = { lat: lat, lng: lng };

    //$(function () {
    //    var mapOptions = {
    //        //center: new google.maps.LatLng(myLatLng),
    //        center: myLatLng,
    //        zoom: 12,
    //        mapTypeId: google.maps.MapTypeId.ROADMAP,
    //        scrollwheel: false,
    //        draggable: false,
    //        panControl: true,
    //        zoomControl: true,
    //        mapTypeControl: true,
    //        scaleControl: true,
    //        streetViewControl: true,
    //        overviewMapControl: true,
    //        rotateControl: true,
    //    };
    //    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    //    var marker = new google.maps.Marker({
    //        position: myLatLng,
    //        map: map,
    //        title: 'Hello World!'
    //    });
    //});
    // google.maps.event.addDomListener(window, 'load', initialize);

});

app.controller('SPCAController', function ($scope, $http, $sce, userService, $location) {
    $http.get("http://petsupload.azurewebsites.net/api/SPCA/GetSPCA?memberid=l")
   .success(function (response) { $scope.names = response; });

    $scope.selection = [];

    $scope.Detailofnspca = function (y) {
        console.log("id = " + y);
        userService.setspcaid(y);
        $location.path('\PetAdoptionDetail');
    }
});

app.controller('InstantSearchController', function ($scope, $http, $sce) {


    window.name = '';

    if (window.name == '') {
        //  $scope.loggedin = $sce.trustAsHtml("You are not registered or logged in. You can test functionality but nothing will be saved.");
        $scope.loggedin = $sce.trustAsHtml("<div class='alert alert-danger'><strong>Warning!</strong> You are either not registered or not logged in. You can test functionality but nothing will be saved.</div>");
    }

    //  $http.get("http://localhost:18643/api/DogBreed/GetBreed?keyword=l")
    $http.get("http://www.ecare4me.com/United/api/DogBreed/GetBreed?keyword=l")
    .success(function (response) { $scope.names = response; });

    $scope.selection = [];


    // toggle selection for a given employee by name
    $scope.toggleSelection = function toggleSelection(dogbreed) {
        var idx = $scope.selection.indexOf(dogbreed);
        var idx = $scope.selection.dogbreed;

        // is currently selected
        if (idx > -1) {
            $scope.selection.splice(idx, 1);
        }

            // is newly selected
        else {
            $scope.selection.push(dogbreed);
            if (window.name == '') {
                window.name = dogbreed;
            }
            else {
                window.name = window.name + ', ' + dogbreed;
            }
        }
    };
});


app.controller('registerpetController', function ($scope, $sce, $location, $http) {

    $scope.tasklist = []; //Array to hold all the tasks 

    if (getCookie("yourname") == 'undefined' || getCookie("yourname") == null || getCookie("yourname") == "") {
        $scope.showlogin = true;
        $scope.showlogout = false;
    }
    else {
        var memberid = getCookie("memberid");
        $scope.memberid = memberid; //set hidden field
        var petname = getCookie("petname");
        $scope.previouspetname = petname;

        $http.get("/api/PetDetails/getdetails?memberid=" + memberid + "&petname=" + petname)
.success(function (response) {
    $scope.names = response;
    $scope.petname = response[0].NameOfDog;
    $scope.breed = response[0].Description;
    $scope.color = response[0].Color;
    $scope.typeofanimal = response[0].AnimalTypeID;
    $scope.animalid = response[0].AnimalID;

    $http.get("/api/UniqueFeatures/GetUniquefeatures?animalid=" + response[0].AnimalID)
.success(function (response) {
    for (var feauture in response) {
        $scope.tasklist.push({ "name": response[feauture].Feature });
        console.log("features = " + response[feauture].Feature);
    }
});
});
    }

    // Cat and bird not added yet so force to dog
    $scope.changeradio = function () {
        $scope.typeofanimal = 1;
    }



    //Go back
    $scope.goBack = function (hash) {
        console.log(hash);
        $location.path(hash);
    }



    /*Invoked when a task is added*/
    $scope.addTask = function () {
        $scope.tasklist.push({ "name": $scope.taskName });
        $scope.taskName = "";
    }
    /*Invoked when a task is deleted*/
    $scope.deleteTask = function (index) {
        $scope.tasklist.splice(index, 1);
    }

    $scope.showcursor = function () {
        console.log("test");
    }

    $scope.breed = window.name;
});

app.controller('petsregisteredController', function ($scope, $location, $http, $sce, $anchorScroll, $timeout) {

    $scope.gotoPage = function (hash) {
        $location.path(hash);
    }

    $scope.gotoAnchor = function (x) {
        console.log("newHash = " + 'anchor' + x);
        var newHash = 'anchor' + x;

        var old = $location.hash();
        $location.hash(newHash).replace();
        $anchorScroll();

        //$timeout(function () {
        //    $location.hash(newHash);
        //    $anchorScroll();
        //})

        //if ($location.hash() !== newHash)
        //{
        //    console.log(1);
        //    // set the $location.hash to `newHash` and
        //    // $anchorScroll will automatically scroll to it
        //    $location.hash('anchor' + x);
        //}
        //else
        //{
        //    console.log(2);
        //    // call $anchorScroll() explicitly,
        //    // since $location.hash hasn't changed
        //    $anchorScroll();
        //}
    };

    $scope.userloggedin = checkifuserloggedin();

    if (getCookie("yourname") == 'undefined' || getCookie("yourname") == null || getCookie("yourname") == "") {
        $scope.showlogin = true;
        $scope.showlogout = false;
    }
    else {
        var memberid = getCookie("memberid");
        $http.get("/api/petsregistered/getanimals?memberid=" + memberid)
.success(function (response) { $scope.names = response; });



        $scope.selection = [];
    }

    $scope.UpdateAnimal = function (x) {
        setCookie("petname", x);
        $location.path('\RegisterPet');
    }

    $scope.LoadPhotos = function (x) {
        setCookie("petname", x);
        $location.path('\Uploadimages');
    }

    $scope.deleteAnimal = function (x) {
        console.log(x);

        BootstrapDialog.show({
            message: 'Are you sure you want to remove ' + x + ' from your list of registered animals. If he/she passed away our sincere condolences?',
            buttons: [{
                label: 'Button 2',
                cssClass: 'btn-primary',
                action: function (dialogItself) {
                    dialogItself.close();
                }
            }, {
                icon: 'glyphicon glyphicon-ban-circle',
                label: 'Button 3',
                cssClass: 'btn-warning',
                action: function (dialogItself) {
                    dialogItself.close();
                }
            }]
        });

    }

    //$http.get("http://localhost:18643/api/petsregistered/getanimals?memberid=1")

});

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    console.log(expires);
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function delete_cookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}