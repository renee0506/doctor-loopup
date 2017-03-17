var Doctor = require("./../js/doctor.js").doctorModule;
var doctor = new Doctor();

var displayProfile = function(profile, specialties){
    var specialtiesStr = "";
    $("#name").text(profile.first_name + " " + profile.last_name);
    $("#title").text(profile.title);
    $("#image").html("<img src=\"" +  profile.image_url + "\" >");
    $("#bio").text(profile.bio);
    specialties.forEach(function(specialty){
      specialtiesStr = specialtiesStr + specialty.name + ", ";
    });
    $("#specialties").text(specialtiesStr.substring(0, specialtiesStr.length-2));
    $("#profile").removeClass("hidden");
};

var displayDoctors = function(results){
  $("#name-div").removeClass("hidden");
  $("#doctor-name").empty();
  results.forEach(function(doctor){
    $("#doctor-name").append("<li class='doctors' id='" + doctor.profile.first_name + " " + doctor.profile.last_name + "'>"+ doctor.profile.first_name + " " + doctor.profile.last_name + ", " + doctor.profile.title + "</li>");
  });
  $(".doctors").click(function(){
    doctor.GetProfile($(this).attr("id"), displayProfile);
  });
};

var displayError = function(error){
  $("#error").removeClass("hidden");
  $("#error").html("<h1>We are sorry. Errors happened during our search. Please try again or try a different keyword</h1><br><p>"+ error +"<p>");
};

$(document).ready(function(){
 $("form").submit(function(event){
   event.preventDefault();
   $("#searched").removeClass("hidden");
   $("#hero-image").addClass("hidden");
   var distance = $("#distance option:selected").val();
   var medicalIssue = $("#medical-issues").val();
   doctor.GetDoctors(medicalIssue, distance, displayDoctors);
 });
});
