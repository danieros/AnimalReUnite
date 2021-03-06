﻿app.controller('drController', function ($scope, $http, $location) {

    $http.get("/api/DoortjieMessage/GetDoortjieMessage")
         .success(function (response) {
             $scope.names = response;
             //$scope.DateInserted = response.DateInserted;
         });

    $scope.formData = {};


    //$scope.processForm = function () {
    //    alert("myForm.$invalid = " + $scope.myForm.$invalid);
    //}

    //// process the form
    $scope.processFormComUs = function () {
        if ($scope.myForm.$invalid == false) {
            $http({
                method: 'POST',
                url: '../ComUs.ashx',
                data: $.param($scope.formData),  // pass in data as strings
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
            .success(function (data) {
                console.log(data);

                var types = [BootstrapDialog.TYPE_SUCCESS];

                $.each(types, function (index, type) {
                    BootstrapDialog.show({
                        type: type,
                        title: 'Thanks Barbie gekry',
                        cssClass: 'login-dialog',
                        message: "Sal so vinning kan antwoord.",
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

app.controller('comController', function ($scope, $http, $location) {

    $scope.mymessages = "(Saterdag) Jou gemis vandag :( Ek kan nie wag om jou te sien nie nie. Ek het jou gese ek jy sal saam besluit oor Londen. J is myne tensy jy ander besluit het .";

    $scope.formData = {};


    //$scope.processForm = function () {
    //    alert("myForm.$invalid = " + $scope.myForm.$invalid);
    //}

    //// process the form
    $scope.processFormComUs = function () {
        if ($scope.myForm.$invalid == false) {
            $http({
                method: 'POST',
                url: '../ComUs.ashx',
                data: $.param($scope.formData),  // pass in data as strings
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
            .success(function (data) {
                console.log(data);

                var types = [BootstrapDialog.TYPE_SUCCESS];

                $.each(types, function (index, type) {
                    BootstrapDialog.show({
                        type: type,
                        title: 'Thanks Barbie gekry',
                        cssClass: 'login-dialog',
                        message: "Sal so vinning kan antwoord.",
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


app.controller('diaryController', function ($scope, userService, $http, $location, $route, $timeout) {

    $scope.goBack = function (hash) {
        console.log(hash);
        $location.path(hash);
    }


    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    $scope.open = function ($event) {
        $scope.status.opened = true;
    };

    $scope.setDate = function (year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd MMMM yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[1];

    $scope.status = {
        opened: false
    };

    var memberid = getCookie("memberid");
    var petname = getCookie("petname");
    $scope.petname = petname;



    $http.get("/api/DiaryGet/GetDiary?memberid=" + memberid + "&petname=" + petname)
         .success(function (response) {
             $scope.names = response;
             //$scope.DateInserted = response.DateInserted;
         });

    //// process the form
    $scope.processDiaryInsert = function () {
        $scope.formData.memberid = memberid;
        $scope.formData.petname = petname;
        console.log("$scope.formData.mydate = " + $scope.formData.mydate);

        console.log(moment($scope.formData.mydate).format("D MMM YYYY"));
        $scope.formData.mydate = moment($scope.formData.mydate).format("D MMM YYYY");

        $http({
            method: 'POST',
            url: '../DiaryInsert.ashx',
            data: $.param($scope.formData),  // pass in data as strings
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        })
        .success(function (data) {
            console.log(data);

            $timeout(function () {
                // 0 ms delay to reload the page.
                $route.reload();
            }, 0);

            var types = [BootstrapDialog.TYPE_SUCCESS];

            $.each(types, function (index, type) {
                BootstrapDialog.show({
                    type: type,
                    title: 'Diary updated',
                    cssClass: 'login-dialog',
                    message: "Congratulations, you have update your pet's diary",
                    buttons: [{
                        label: 'Ok',
                        cssClass: 'btn btn-primary-orange-home',
                        action: function (dialogItself) {
                            dialogItself.close();
                        }

                    }]
                });
            });
        });
    }

    $scope.deleteEntry = function (y) {
        var types = [BootstrapDialog.TYPE_WARNING];

        $.each(types, function (index, type) {
            BootstrapDialog.show({
                type: type,
                title: 'Are you sure you want to delete the diary entry?',
                cssClass: 'login-dialog',
                message: "Once deleted the entry can not be recovered so please be sure you want to delete the entry.",
                buttons: [{
                    label: 'Delete',
                    cssClass: 'btn-primary',
                    action: function (dialogItself) {
                        console.log("you are about to delete " + y);



                        $http({
                            method: 'GET',
                            url: '../DiaryDelete.ashx?diaryid=' + y,
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
                        })
       .success(function (data) {
           console.log(data);

           $timeout(function () {
               // 0 ms delay to reload the page.
               $route.reload();
           }, 0);

           var types = [BootstrapDialog.TYPE_SUCCESS];

           $.each(types, function (index, type) {
               BootstrapDialog.show({
                   type: type,
                   title: 'Diary updated',
                   cssClass: 'login-dialog',
                   message: "You have successfully deleted the selected entry",
                   buttons: [{
                       label: 'Ok',
                       cssClass: 'btn btn-primary-orange-home',
                       action: function (dialogItself) {
                           dialogItself.close();
                       }

                   }]
               });
           });
       });





                        dialogItself.close();
                    }
                }, {
                    icon: 'glyphicon glyphicon-ban-circle',
                    label: 'No',
                    cssClass: 'btn-warning',
                    action: function (dialogItself) {
                        dialogItself.close();
                    }
                }]
            });
        });
        console.log("DiaryEntry = " + y);
    }

});

app.controller('faqController', function ($scope, $location, userService) {
    $scope.backgroundcolor = "purple";
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

    $scope.backgroundcolor = "purple";

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

    $scope.backgroundcolor = "purple";

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

    $scope.backgroundcolor = "purple";

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
                        title: 'We received your query',
                        cssClass: 'login-dialog',
                        message: "One of the team members will contact you with 24 hours.",
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

app.controller('mainController', function ($scope, notifications, $route, $location, userService, $window, $http) {


    $scope.backgroundcolor = "purple";

    console.log("userService.getlogin = " + userService.getlogin);
    if (userService.getlogin() == true) {
        $window.location.href = "StaticViews/Index.html#";
        $window.location.reload();
    }

    $scope.userloggedin = checkifuserloggedin(); //external js file

    //#region Begin Set up sponsor heading and context
    if ($scope.userloggedin == false) {
        console.log("not logged in");
        $scope.SponsorHeading = "Please register or log in. If you registering by using a sponsor please use the sponsorhip code provided."
    }
    else
    {
        $scope.SponsorHeading = "Thanks, you are now part of our pet society.  We are here to help each other because we love animals!"
    }
    //#regionend

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

    var message1 = "<i>\"Choose your favourite color"
    message1 += "<br />I will never move and not take you with me"
    message1 += "<br />I will never put you in a shelter and leave"
    message1 += "<br />I will never let you starve"
    message1 += "<br />I will never let you hurt"
    message1 += "<br />I will never desert you when you get old"
    message1 += "<br />If that time comes, I will be there to hold you"
    message1 += "<br />Because I love you and you are family\"</i>"
    message1 += "<br /><br />by unkown author and describes our mission. So how do we go about this?";

    var message2 = "<i>\"To my pet"
    message2 += "<br />I will never move and not take you with me"
    message2 += "<br />I will never put you in a shelter and leave"
    message2 += "<br />I will never let you starve"
    message2 += "<br />I will never let you hurt"
    message2 += "<br />I will never desert you when you get old"
    message2 += "<br />If that time comes, I will be there to hold you"
    message2 += "<br />Because I love you and you are family\"</i>"
    message2 += "<br /><br />by unkown author and describes our mission. So how do we go about this?";

    var message3 = "To help you find your baby when he/she gets lost you do the following:";
    message3 += "<ul class=\"ulspecial\">";
    message3 += "<li>Register using a valid email address.";
    message3 += "<li>Upload information of all your pets located at one address.";
    message3 += "<li>Upload photos of your pets as well as any distinct markings.";
    message3 += "<li>When your baby (pet) manage to get lost we will generate Lost Posters for you and activate the community as well as email every vet and animal shelter in your community to help look.";
    message3 += "</ul>";

    var message4 = "In South Africa we are very much a community based society.";
    message4 += "PetSociety want to access your location as we use Google maps to locate you and draw a 5 km radius around you.";
    message4 += "We then limit search to this area to focus efforts. Experience has shown this is where you will find your pet if they get lost.";
    message4 += "<div style=\"text-align: center;\"><img src=\"../Images/googlemapDialog.png\" height=\"120\"/></div>";

    var message5 = "So the question what will this cost you?";
    message5 += "The quick answer is nothing.";
    message5 += "However we would really appreciate a donation of R50 of which R10 is donated to your charity of choice";
    message5 += "We really feel we can make a difference but we have costs of course to maintain the code and to host it";
    message5 += "To make a donation see our pricing page";

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

    $scope.messages = function () {
        notifications.closeAll();
        $http.get("/api/UserMessages/GetUserMessages?memberid=1")
  .success(function (response) {
      $scope.names = response;
      notifications.showSuccess(response[0].MessageText);
  });
    };


   // $scope.messages();

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

    $scope.backgroundcolor = "purple";
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
    $http.get("/api/SPCAsingle/GetSPCA?spcaid=" + spcaidVal)
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

    $scope.backgroundcolor = "purple";


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

    $scope.backgroundcolor = "purple";

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

    $scope.UpdateDiary = function (x) {
        setCookie("petname", x);
        $location.path('\Diary');
    }

    $scope.UpdateAnimal = function (x) {
        setCookie("petname", x);
        $location.path('\RegisterPet');
    }

    $scope.LoadPhotos = function (x) {
        setCookie("petname", x);
        $location.path('\ImageManipulate');
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