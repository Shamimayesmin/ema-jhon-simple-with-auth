/**
 1. Auth setup:
 1. create firebase prokect
 2. enable web
 3. enable sign in method
 4. install firebase
 5. get firebase config in your firebase.js file
 6. export app from firebase.config.js 
 7.
 * 
 * 
 */

 /**
  * 
  1.create userContext (Auth context): userContext ---> component name, userContext provides AuthContext
  2. create AuthContext
  3. set AuthContext.provider
  4. make sure you set the children
  5. export AuthContext to be used inside useContext hook
  6.get form data
  7. getAuth in the UserContext
  * 
  */


  /**
   * 
   1. Firebase Hosting 
   -------------------------------
   1. one time for each computer
   2. npm install -g firebase-tools
   3. firebase login

   // for each project one time
   3. firebase init
   
   Make sure : for public directory : you select : build
   single page application : y


   // for every deploy
   4. npm run build
   5. firebase deploy
   */