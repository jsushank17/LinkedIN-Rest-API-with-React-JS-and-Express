/* Packages used for Linkedin Functionality */
var express = require('express');        // call express
var qs = require('qs');
var request = require('superagent');
var bodyParser = require('body-parser');

/* create app and port initialization */
const port = process.env.PORT || 8080;
const app = express();                 // define our app using express
const router   = express.Router();

/* Route for getting linkedin AccessToken */
app.post('/linkedinaccesstoken', function (req, res) {

  /* Gets the Authorization code */
  var reqAuthCode = req.body.code;
  var reqClientID = req.body.client_id;
  var reqSecretID = req.body.client_secret;

  /* Gets the Callback url */
  var reqCallbackUrl = req.body.redirect_uri;

  /* Data to be sent as body to linkedin */
  var data = {
    'grant_type': 'authorization_code',
    'code': reqAuthCode,
    'redirect_uri': reqCallbackUrl,
    'client_id': reqClientID,
    'client_secret': reqSecretID
  };

  /* Superagent request to get access token */
  request
    .post('https://www.linkedin.com/oauth/v2/accessToken')
    .send(qs.stringify(data))
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .accept('application/json')
    .end(function(err, resp){
      console.log("resp............", resp);
      const accessToken = resp.body.access_token;
      console.log("accessToken---->", accessToken);
      res.send(accessToken);
  });
});

/* Route for getting linkedin AccessToken */
app.post('/linkedinuserdetails', function (req, res) {

  var reqToken = req.body.oauth2_access_token;

  /* Data to be sent as body to linkedin */
  var data = {
    'oauth2_access_token': reqToken
  };

  /* Superagent request to get access token */
  request
    .get('https://api.linkedin.com/v1/people/~:(id,first-name,email-address,last-name,headline,picture-url,industry,summary,specialties,positions:(id,title,summary,start-date,end-date,is-current,company:(id,name,type,size,industry,ticker)),educations:(id,school-name,field-of-study,start-date,end-date,degree,activities,notes),associations,interests,num-recommenders,date-of-birth,publications:(id,title,publisher:(name),authors:(id,name),date,url,summary),patents:(id,title,summary,number,status:(id,name),office:(name),inventors:(id,name),date,url),languages:(id,language:(name),proficiency:(level,name)),skills:(id,skill:(name)),certifications:(id,name,authority:(name),number,start-date,end-date),courses:(id,name,number),recommendations-received:(id,recommendation-type,recommendation-text,recommender),honors-awards,three-current-positions,three-past-positions,volunteer)')
    // .send(qs.stringify(data))
    .query({
      'oauth2_access_token': reqToken,
      'format': 'json'
    })
    .end(function(err, resp){
      const dataFormat = resp.text;
      console.log("dataFormat", dataFormat);
      const linkedinData = JSON.parse(dataFormat);
      res.send(linkedinData);
    });
});

module.exports = router;
