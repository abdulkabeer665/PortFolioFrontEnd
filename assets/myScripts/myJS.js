$(document).ready(function() {

    function image() {
        alert("alter")
    }
    
    //#region  APIURL
    
    const urlIP = 'http://10.0.2.222:9000/';

    //#endregion

    //#region Constants

    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
    }

    //#endregion
    
    //#region  Dashboard API

    $.ajax({
        type: 'GET',
        dataType:"JSON",
        url: urlIP + 'api/PortFolio/GetTitle',
        headers:{         
            // 'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBWZXIiOiIwLjAuMCIsImV4cCI6NDcyNjM4OTEyMiwibG9jYWxlIjoiIiwibWFzdGVyVmVyIjoiIiwicGxhdGZvcm0iOiIiLCJwbGF0Zm9ybVZlciI6IiIsInVzZXJJZCI6IiJ9.QIZbmB5_9Xlap_gDhjETfMI6EAmR15yBtIQkWFWJkrg',
        },
        success: function (data, status) {
            $("#websiteTitle").text($("#websiteTitle").text().replace("", data[0]["title"].toString() + " - Index"));
            $("#myName").text($("#myName").text().replace("", data[0]["title"].toString()));
            $("#myNameFooter1").text($("#myNameFooter").text().replace("", data[0]["title"].toString()));
            $("#myNameFooter2").text($("#myNameFooter2").text().replace("", data[0]["title"].toString()));
            $("#myNameFooter3").text($("#myNameFooter3").text().replace("", data[0]["title"].toString()));
        }
    });

    //#endregion

    //#region  Animation Text

    $.ajax({
        type: 'GET',
        dataType:"JSON",
        url: urlIP + 'api/PortFolio/GetAnimationTexts',
        headers:{
            // 'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBWZXIiOiIwLjAuMCIsImV4cCI6NDcyNjM4OTEyMiwibG9jYWxlIjoiIiwibWFzdGVyVmVyIjoiIiwicGxhdGZvcm0iOiIiLCJwbGF0Zm9ybVZlciI6IiIsInVzZXJJZCI6IiJ9.QIZbmB5_9Xlap_gDhjETfMI6EAmR15yBtIQkWFWJkrg',
        },
        success: function (data, status) {
            var loop = "";
            for (var i = 0; i < data.length; i++) {
                if(i == 0) {
                    loop = loop + data[i]["name"]
                }
                else {
                    loop = loop + ',' + data[i]["name"]
                }   
            }
            const typed = select('.typed')
            if (typed) {
                let typed_strings = typed.getAttribute('data-typed-items')
                typed_strings = loop
                typed_strings = typed_strings.split(',')
                new Typed('.typed', {
                    strings: typed_strings,
                    loop: true,
                    typeSpeed: 100,
                    backSpeed: 50,
                    backDelay: 2000
                });
            }            
        }
    });

    //#endregion

    //#region  Social Media Links

    $.ajax({
        type: 'GET',
        dataType:"JSON",
        url: urlIP + 'api/PortFolio/GetSocialMediaLinks',
        headers:{         
            // 'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBWZXIiOiIwLjAuMCIsImV4cCI6NDcyNjM4OTEyMiwibG9jYWxlIjoiIiwibWFzdGVyVmVyIjoiIiwicGxhdGZvcm0iOiIiLCJwbGF0Zm9ybVZlciI6IiIsInVzZXJJZCI6IiJ9.QIZbmB5_9Xlap_gDhjETfMI6EAmR15yBtIQkWFWJkrg',
        },
        success: function (data, status) {
            $("#github").attr("href", data[2]["socialMediaLinks"].toString());
            $("#facebook").attr("href", data[0]["socialMediaLinks"].toString());
            $("#insta").attr("href", data[1]["socialMediaLinks"].toString());
            $("#skype").attr("href", "#");
            $("#linkedin").attr("href", "#");
            $("#githubFooter").attr("href", data[2]["socialMediaLinks"].toString());
            $("#facebookFooter").attr("href", data[0]["socialMediaLinks"].toString());
            $("#instaFooter").attr("href", data[1]["socialMediaLinks"].toString());
            $("#skypeFooter").attr("href", "#");
            $("#linkedinFooter").attr("href", "#");
        }
    });

    //#endregion

    //#region  About Info

    $.ajax({
        type: 'GET',
        dataType:"JSON",
        url: urlIP + 'api/PortFolio/GetAboutInfo',
        headers:{         
            // 'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBWZXIiOiIwLjAuMCIsImV4cCI6NDcyNjM4OTEyMiwibG9jYWxlIjoiIiwibWFzdGVyVmVyIjoiIiwicGxhdGZvcm0iOiIiLCJwbGF0Zm9ybVZlciI6IiIsInVzZXJJZCI6IiJ9.QIZbmB5_9Xlap_gDhjETfMI6EAmR15yBtIQkWFWJkrg',
        },
        success: function (data, status) {
            
            $("#aboutPara").text($("#aboutPara").text().replace("", data[0]["aboutPara"].toString()));
            $("#aboutParaHeading").text($("#aboutParaHeading").text().replace("", data[0]["aboutParaHeading"].toString()));
            $("#aboutParaDesc").text($("#aboutParaDesc").text().replace("", data[0]["aboutParaDesc"].toString()));
            $("#aboutParaDetailDesc").text($("#aboutParaDetailDesc").text().replace("", data[0]["aboutParaDetailDesc"].toString()));
        }
    });

    //#endregion
    
    //#region  Personal Info

    

    $.ajax({
        type: 'GET',
        dataType:"JSON",
        url: urlIP + 'api/PortFolio/GetPersonalInfo',
        headers:{         
            // 'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBWZXIiOiIwLjAuMCIsImV4cCI6NDcyNjM4OTEyMiwibG9jYWxlIjoiIiwibWFzdGVyVmVyIjoiIiwicGxhdGZvcm0iOiIiLCJwbGF0Zm9ybVZlciI6IiIsInVzZXJJZCI6IiJ9.QIZbmB5_9Xlap_gDhjETfMI6EAmR15yBtIQkWFWJkrg',
        },
        success: function (data, status) {
            // console.log(data)
            var image = new Image();
            var image123 = data[0]["image"].toString();
            console.log(image123)
            image.src = image123;
            console.log(image.src)
            $("#imageDiv").append(image);
            
            var city = data[0]["city"].toString();
            var myAddress = data[0]["address"].toString();
            var phoneNo = data[0]["phoneNo"].toString();
            var education = data[0]["education"].toString();
            var emailId = data[0]["emailId"].toString();
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = mm + '-' + dd + '-' + yyyy;
            const actualDate  = data[0]["birthday"].toString();
            const removingTime = actualDate.split("T");
            var finalDate = removingTime[0].split("-").reverse().join("-");
            var xx = today.replaceAll("-","/").split("/");
            var yy = finalDate.replaceAll("-","/").split("/");
            var zz = new Date(xx[2],xx[0]-1,xx[1]);
            var zz1 = new Date(yy[2],yy[1]-1,yy[0]);
            const date1 = new Date(zz1);
            const date2 = new Date(zz);
            var myAge = ((Math.ceil((Math.abs(date2 - date1)) / (1000 * 60 * 60 * 24)) / 365).toString().slice(0,2));
            $("#profileImg").attr('src', image123);
            $("#birthdayVal").text($("#birthdayVal").text().replace("", finalDate));
            $("#ageVal").text($("#ageVal").text().replace("", myAge));
            $("#cityVal").text($("#cityVal").text().replace("", city));
            $("#phoneNoVal").text($("#phoneNoVal").text().replace("", phoneNo));
            $("#educationVal").text($("#educationVal").text().replace("", education));
            $("#emailIdVal").text($("#emailIdVal").text().replace("", emailId));
            $("#contactAddress").text($("#contactAddress").text().replace("", myAddress));
            $("#contactEmailId").text($("#contactEmailId").text().replace("", emailId));
            $("#contactPhoneNo").text($("#contactPhoneNo").text().replace("", phoneNo));
        }
    });

    //#endregion
    
    //#region  Fact Info

    $.ajax({
        type: 'GET',
        dataType:"JSON",
        url: urlIP + 'api/PortFolio/GetFactsInfo',
        headers:{         
            // 'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBWZXIiOiIwLjAuMCIsImV4cCI6NDcyNjM4OTEyMiwibG9jYWxlIjoiIiwibWFzdGVyVmVyIjoiIiwicGxhdGZvcm0iOiIiLCJwbGF0Zm9ybVZlciI6IiIsInVzZXJJZCI6IiJ9.QIZbmB5_9Xlap_gDhjETfMI6EAmR15yBtIQkWFWJkrg',
        },
        success: function (data, status) {
            $("#factDesc").text($("#factDesc").text().replace("", data[0]["factDesc"].toString()));
            $("#happyClientCounter").attr("data-purecounter-end", data[0]["factHappyClient"].toString());
            $("#projects").attr("data-purecounter-end", data[0]["factProjects"].toString());
            $("#hoursofSupport").attr("data-purecounter-end", data[0]["factHoursofSupport"].toString());
            $("#awards").attr("data-purecounter-end", data[0]["awards"].toString());
        }
    });

    //#endregion

    //#region  Skills

    $.ajax({
        type: 'GET',
        dataType:"JSON",
        url: urlIP + 'api/PortFolio/GetSkillsInfo',
        headers:{         
            // 'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBWZXIiOiIwLjAuMCIsImV4cCI6NDcyNjM4OTEyMiwibG9jYWxlIjoiIiwibWFzdGVyVmVyIjoiIiwicGxhdGZvcm0iOiIiLCJwbGF0Zm9ybVZlciI6IiIsInVzZXJJZCI6IiJ9.QIZbmB5_9Xlap_gDhjETfMI6EAmR15yBtIQkWFWJkrg',
        },
        success: function (data, status) {
            for (var i = 0; i < data.length; i++) {
                var skill = data[i]["skills"].toString();
                var skillPercentValue = data[i]["skillPercentValue"].toString();
                $("#testing").append('<div class="col-lg-6"><div class="progress"><span class="skill">' + skill + ' <i class="val">' + skillPercentValue + '%</i></span><div class="progress-bar-wrap"><div class="progress-bar" role="progressbar" aria-valuenow="' + skillPercentValue + '" aria-valuemin="0" aria-valuemax="100"></div></div></div></div>');
            }
        }
    });

    //#endregion
    
    //#region Services Sections

    $.ajax({
        type: 'GET',
        dataType:"JSON",
        url: urlIP + 'api/PortFolio/GetServices',
        headers:{         
            // 'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBWZXIiOiIwLjAuMCIsImV4cCI6NDcyNjM4OTEyMiwibG9jYWxlIjoiIiwibWFzdGVyVmVyIjoiIiwicGxhdGZvcm0iOiIiLCJwbGF0Zm9ybVZlciI6IiIsInVzZXJJZCI6IiJ9.QIZbmB5_9Xlap_gDhjETfMI6EAmR15yBtIQkWFWJkrg',
        },
        success: function (data, status) {
            // console.log(data);
            for (let i = 0; i < data.length; i++) {
                var d_value = data[i]["d_Value"].toString();
                var serviceDesc = data[i]["serviceDescription"].toString();
                var serviceHeading = data[i]["serviceHeading"].toString();
                var serviceImageData = data[i]["serviceImageData"].toString();
                var iconColor = data[i]["iconboxColor"].toString();
                var delayValue = data[i]["delayValue"].toString();
                $("#servicesSection").append('<div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="' + delayValue + '"><div class="icon-box iconbox-' + iconColor + '"><div class="icon"><svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg"><path stroke="none" stroke-width="0" fill="#f5f5f5" d="' + d_value + '"></path></svg><i class="bx ' + serviceImageData + '" style="margin-right: 7px"></i></div><h4><a href="">' + serviceHeading + '</a></h4><p>' + serviceDesc + '</p></div></div>');    
            }
            
        }
    });

    //#endregion

    //#region Post Message 

    $("#btnSubmit").click(function () {
        var clientMessage = {
            clientName: $("#name").val(),
            clientEmail: $("#email").val(),
            subject: $("#subject").val(),
            clientMessage: $("#message").val(),
        }
        if (clientMessage.clientName == "" || clientMessage.clientEmail == "" || clientMessage.subject == "" || clientMessage.clientMessage == ""){}
        else {
            $(".loading").fadeIn("d-block");
            $.ajax({            
                url: urlIP + 'api/PortFolio/InsertMessage',
                type: 'POST',
                dataType: 'JSON',
                contentType: 'application/json',
                data: JSON.stringify(clientMessage),
                success: function (data) {
                    $(".loading").fadeOut("d-block");
                    $(".sent-message").fadeIn("d-block");
                    setTimeout(function() {
                        $('.sent-message').fadeOut('fast');
                    }, 3000); // <-- time in milliseconds  
                    $("#name").val('');
                    $("#email").val('');
                    $("#subject").val('');
                    $("#message").val('');                  
                },
            });
        }
     })

    //#endregion

    var base64String = "";
  
    function imageUploaded123() {
        var file = document.querySelector(
            'input[type=file]')['files'][0];
      
        var reader = new FileReader();
        console.log("next");
          
        reader.onload = function () {
            base64String = reader.result.replace("data:", "")
                .replace(/^.+,/, "");
      
            imageBase64Stringsep = base64String;
      
            // alert(imageBase64Stringsep);
            console.log(base64String);
        }
        reader.readAsDataURL(file);
    }
      
    function displayString() {
        console.log("Base64String about to be printed");
        alert(base64String);
    }

    $("#fileId").change(function(){
        alert("change hua");
        var file = document.querySelector(
            'input[type=file]')['files'][0];
      
        var reader = new FileReader();
        console.log("next");
          
        reader.onload = function () {
            base64String = reader.result.replace("data:", "")
                .replace(/^.+,/, "");
      
            imageBase64Stringsep = base64String;
      
            // alert(imageBase64Stringsep);
            console.log(base64String);
        }
        reader.readAsDataURL(file);
    })

    $("#displayFunction").click(function() {
        alert("CLick hogaya");
        console.log("Base64String about to be printed");
        alert(base64String);
    })

});