Chat app 

Frontend: Built using ReactJS (React Hooks, React Router), Ant Design for React.

Backend: Using NodeJS, ExpressJS

Sending and receive messages was done using Socket.io.

Deployment: 
  + Server side: Heroku.
  + Client side: Surge.
  
 Function:
  +Send and receive messages.
  +Upload files: only show the detail in console (Haven't successfully shown to users)
  
How to use:

For normal user:
+) So far, the project has been deployed to heroku and surge, you can access it using this surge link: 
          
                ihatecors.surge.sh

But since I still haven't been able to bypass CORS (hence the link's name's name), you should be able to use the send and receive function by using a browser extension Moesif CORS
To use that extension, turn it from "off" to "on"; after that, you will be able to use the app.

For dev:
+) Clone the repo.
+) cd chat-app

+) Server:
    + cd to server
    + npm start
    
+) Client:
    + cd client
    + In Conversation.js file, change the ENDPOINT to localhost:5000
    + npm start
    
    
 
 Thank you for using :)) 
 This was a demo and a testimonial for my self learning ability (and copy, paste skill :b), it has been a fun ride.
 After this, I realized that I really hate styling website, it encourage me to move toward backend side of things.
 
 I may continue to improve this app, or move on with my intention of learning Python and do some fun stuff with it.
 
 Yeah, but this is fun :D
