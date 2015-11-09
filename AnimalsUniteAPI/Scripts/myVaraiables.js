this.help1TitleVar = function () {
    var help1Title = '<span style="font-size: 15px; color: white;" class="glyphicon glyphicon-question-sign"></span>  Upload my pet'
    return help1Title;
};

this.help1messsageVar = function () {
    var helpmesssage = 'This module is at the heart of the application and allows you to: ';
    helpmesssage += '<ul class="ulspecialanimal">';
    helpmesssage += '<li class="lispecialanimal">Register every pet you have at your house.</li>';
    helpmesssage += '<li class="lispecialanimal">Upload as many photos as you want of each pet.</li>';
    helpmesssage += '<li class="lispecialanimal">Describe each pet especially any feature that will allow someone else to identify the pet if found. We generate lost pster based on this information.</li>';
    helpmesssage += '<li class="lispecialanimal">Keep your pet\'s information up to date and share. This is similar to Facebook timeline.</li>';
    helpmesssage += '</ul>';
    return helpmesssage;
};

this.help2TitleVar = function () {
    var help1Title = '<span style="font-size: 15px; color: white;" class="glyphicon glyphicon-question-sign"></span>  Lost my pet'
    return help1Title;
};

this.help2messsageVar = function () {
    var helpmesssage = 'If you lose your pet we will help you find it by: ';
    helpmesssage += '<ul class="ulspecialanimal">';
    helpmesssage += '<li class="lispecialanimal">Generating Lost Posters you can print and circulate.</li>';
    helpmesssage += '<li class="lispecialanimal">Notifying all the members within your communicty so that they can look out for your pet.</li>';
    helpmesssage += '<li class="lispecialanimal">We will publish on your behalf on your Facebook community network to get even more help.</li>';
    helpmesssage += '<li class="lispecialanimal">Whenever someone report a pet found we will cross check.</li>';
    helpmesssage += '</ul>';
    return helpmesssage;
};

this.help3TitleVar = function () {
    var help1Title = '<span style="font-size: 15px; color: white;" class="glyphicon glyphicon-question-sign"></span>  Found a lost pet'
    return help1Title;
};

this.help3messsageVar = function () {
    var helpmesssage = 'If someone finds a lost pet we aim to do the following: ';
    helpmesssage += '<ul class="ulspecialanimal">';
    helpmesssage += '<li class="lispecialanimal">Cross check with your pet features so we may even notify you that your pet is lost before you even know.</li>';
    helpmesssage += '</ul>';
    return helpmesssage;
};

this.help4TitleVar = function () {
    var help1Title = '<span style="font-size: 15px; color: white;" class="glyphicon glyphicon-question-sign"></span>  Messages'
    return help1Title;
};

this.help4messsageVar = function () {
    var helpmesssage = 'This module will be used to communicate with you.  Sometimes we will send you emails but keep an eye on messages for:';
    helpmesssage += '<ul class="ulspecialanimal">';
    helpmesssage += '<li class="lispecialanimal">New features added to application</li>';
    helpmesssage += '<li class="lispecialanimal">General information related to your type of pet</li>';
    helpmesssage += '<li class="lispecialanimal">Community information.</li>';
    helpmesssage += '</ul>';
    return helpmesssage;
};

this.checkifuserloggedin = function () {
    var checkifuserloggedinVar = true;
    if (getCookie("yourname") == 'undefined' || getCookie("yourname") == null || getCookie("yourname") == "") {
        checkifuserloggedinVar = false;
    }
    return checkifuserloggedinVar;
};