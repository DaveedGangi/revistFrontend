


### My thought
previously i have implemented a backend is sending jwt token to 
fronted i am utilizing that token and stored it into the cookies 
based on that cookie removed on logout session and cookie is inserted in 
login session store jwt token based on that i am showing different routes 
but i have thought in my mind like if any one access our token in machine by 
using cookies.get(), and they can access our cookies they login 
based on that issue , i changed my mind automatically stores cookies in browser 
and backend .env file

### developed
i have developed a frontend with react and backend with nodejs and express js 
created a backend rest api and deployed on render 
and frontend created with react and it is deployed on netlify 


### app install on your device 

you can install on your device which looks similar to other apps 
live link: https://shoppingdaveedgangi.netlify.app/ 
once opend the link click on the three dots add to screen click 
it will create a app on your mobile 
else if you have a laptop it shows directly app is availble click on 
install it will create the shopping app


backend deployed url is used in frontend part 
like adding category , deleting category, edit category, login ,logout 
showing all categories, get specific category based on id 

### features
shopping category will be create, update, delete,
spinner is showing while fetching the resource on server 
login and logout functionalities added shown with errors 

### code improvement and fixed issues

try and catch blocks implented for better error handling on backend and frontend 
sql injection will happen for that puropse i have used parametrized quires 
while uploading into the git hub we need to remove .env file 
and .gitignore file create then upload to github for security purpose 
on cookie part faced issues on backend solved those issues 
by ching secure: true, sameSite:"None" 

cookies are not stored intially on fronted on browser it takes so much to understand 
used a debugging tools fixed that with 
on frontend part credential we must give a value credintial:"include" 
while fetching resource on the server 

left side navbar  is not increased based on the right side items 
fixed issue with (left side nav bar and items) parent element set to  min height 100vh and display flex 



### frontend packages
create-react-app (third party package developed by facebook)
it simplifies you no need to setting configuration it automatically taken care 

react-router-dom@5.2.0
react-spinners

### backend packages 
express
sqlite
sqlite3
bcrypt
jsonwebtoken
cors
cookie-parse



## if you want to run backend on your machine
open your vs code and open the terminal copy paste this 

git clone https://github.com/DaveedGangi/revistBackend.git
npm install 
node index.js 


but you need to change some syntax 
on local machine use this 
const allowedOrigins = ['http://localhost:3000', 'https://localhost:3000'];

on deploying puropse use this
const allowedOrigins = ["https://shoppingdaveedgangi.netlify.app"];

on cookies 
 secure:false,
 sameSite:"Lax",// will you work with local machine
 secure:true,
 sameSite:"None", // will you work with different diploying sites 
secure:true,
sameSite:"strict", // will you work backend and frontend deploying on same platform
app.use(cors({origin:allowedOrigins,credentials:true}));

you need to create a .env file 
setup this are essential
SECRET_TOKEN_KEY="your_very_secret_key";
REFRESH_TOKEN_KEY="your_very_refresh_key"


### if you want to run frontend on your machine 
git clone https://github.com/DaveedGangi/revistFrontend.git
cd shopping
npm install 
npm start

### finally done 

live link: https://shoppingdaveedgangi.netlify.app/ 
frontend link : https://github.com/DaveedGangi/revistFrontend.git
backend link: https://github.com/DaveedGangi/revistBackend.git

app logo 
![Screenshot 2025-04-13 103608](https://github.com/user-attachments/assets/1e36751e-77c5-4805-8d31-014b8a66883f)

login page
![Screenshot 2025-04-13 163759](https://github.com/user-attachments/assets/52f0fb29-9628-4bf7-a2c1-c951aa04cc32)

dashboard
![Screenshot 2025-04-13 163953](https://github.com/user-attachments/assets/a5bb4af8-ca37-46a1-a444-55c448f75909)

dashboard added categories 
![Screenshot 2025-04-13 164904](https://github.com/user-attachments/assets/1b96eed8-9ad7-4208-aeee-f3baced6a582)

categories page 
![Screenshot 2025-04-13 164924](https://github.com/user-attachments/assets/28b82b6f-f010-4880-bc81-97f9bba01fa6)

logout page
![Screenshot 2025-04-13 164936](https://github.com/user-attachments/assets/ce3afcc6-f275-48d6-ace3-dd0b4224fc46)


edit page
![Screenshot 2025-04-13 164957](https://github.com/user-attachments/assets/5948822e-3fa3-4ea9-8923-99898932ae33)

delete page
![Screenshot 2025-04-13 165019](https://github.com/user-attachments/assets/b3d7ef0c-0e52-4a28-9a60-c231331bc1dc)













































































# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
