var apiKey = require('./../.env').apiKey;

function Doctor(){

}

Doctor.prototype.GetDoctors = function (medicalIssue, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      displayDoctors(result.data);
    })
   .fail(function(error){
      console.log("fail");
    });
};

Doctor.prototype.GetProfile = function (name, displayProfile) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?name='+ name +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     console.log(result);
      displayProfile(result.data[0].profile), result.data[0].specialties;
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
