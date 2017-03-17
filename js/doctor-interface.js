var Doctor = require("./../js/doctor.js").doctorModule;

$(document).ready(function(){
 $("form").submit(function(event){
   event.preventDefault();
   var medicalIssue = $("#medical-issues").val();
   var doctor = new Doctor();
   doctor.GetDoctors(medicalIssue);
 })
})
