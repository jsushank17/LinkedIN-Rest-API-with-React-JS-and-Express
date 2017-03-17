/* Configurations for Linkedin Api */

/* Client Id for Linkedin */
export const clienID = 'Your Client ID';

/* Secret Key for Linkedin */
export const secretKey = 'Your Secret Key';

/* Gets host name from the url */
const urlHost = window.location.host;

/* Callback url for Linkedin */
export const callBackUrl = `http://${urlHost}/job/callback/linkedin`;

/* Backend route for getting Linkedin Access Token */
export const accessTokenRoute = `http://${urlHost}/linkedinaccesstoken`;

/* Backend route for getting Linkedin User Details */
export const userDetailsRoute = `http://${urlHost}/linkedinuserdetails`;

