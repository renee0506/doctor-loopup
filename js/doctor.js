var apiKey = require('./../.env').apiKey;

function Doctor(){

}

Doctor.prototype.GetDoctors = function (medicalIssue, distance, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=47.607384%2C-122.3364%2C%20'+ distance + '&user_location=47.607384%2C-122.3364&skip=0&limit=100&user_key=' + apiKey)
   .then(function(result) {
      displayDoctors(result.data);
    })
   .fail(function(error){
      displayError(error);
    });
};

Doctor.prototype.GetProfile = function (name, displayProfile) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?name='+ name +'&location=47.607384%2C-122.3364%2C%2050&user_location=47.607384%2C-122.3364&skip=0&limit=100&user_key=' + apiKey)
   .then(function(result) {
     console.log(result);
      displayProfile(result.data[0].profile, result.data[0].specialties);
    })
   .fail(function(error){
      displayError(error);
    });
};

exports.doctorModule = Doctor;
