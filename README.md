# LinkedIN-Rest-API-with-React-JS-and-Express
Here I have created a component for Login with LinkedIn, which in return provides the data of the logged in LinkedIn user.

In this Package you will find a component file wherein i have created a function that fires the axios request for receiving access tokens and Linkedin User details.

Just To ensure that the request do not failed due to CORS issue, I have added server.js file that fires the request for access token and Linkedin User details.

In server.js file i have created two routes 
1. http://..../linkedinaccesstoken
2. http://..../linkedinuserdetails

#1 has the details related to access token and #2 has the details related to user logged in using linkedin credentials.

This two routes are called from client side usign axios request, this ensures that the request completes successfully without CORS issue.

Now, to use this package user needs to:
1. Copy the file(CustomLinkedIn.jsx) and import that file wherever needed. 
2. Copy the code from server.js and paste it into the their own server.js file.
3. Copy paste the image folder, but make sure to give the image path proper in CustomLinkedIn.jsx.
4. Copy paste the Config folder which has the config.js file. Ensure that you have your own CLIENT_KEY AND SECRET_KEY pasted in congfig file.

You are now good to go.....................
