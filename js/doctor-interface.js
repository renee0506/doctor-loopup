var Doctor = require("./../js/doctor.js").doctorModule;
var doctor = new Doctor();

var displayDoctors = function(results){
  results.forEach(function(doctor){
    $("#doctor-name").append("<li class='doctors'>"+ doctor.profile.first_name + " " + doctor.profile.last_name + "</li>");
  });
  $(".doctors").click(function(){
    doctor.GetProfile($(this).html());
  });
};

$(document).ready(function(){
 $("form").submit(function(event){
   event.preventDefault();
   var medicalIssue = $("#medical-issues").val();
   doctor.GetDoctors(medicalIssue, displayDoctors);
 });
});
