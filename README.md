# Description

The Study is an online food ordering application for the UCLA takeout dining hall The Study. There is a logon portal for UCLA students and faculty. A user can customize and place an order, as well as view previous orders.

## Key Features
1. User accounts with the ability to login, logout and have orders associated with valid user 
2. Customize and place your own Sandwich, Salad, European, Sausage or Pizza order with dynamic display of menu items 
3. Multiple toppings can be selected and a limit on number of toppings is placed on certain pages 
4. Caloric information of European and Sausage dishes is displayed 
5. Carbon Footprint of each menu item is displayed 
6. Dynamic history page that displays all past orders (including any incomplete ones) under the user account 
7. Navigation through the web app 

# Running the application

## Run Front End

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

Note: this is a one-way operation. Once you eject, you can't go back!
If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Set Up Backend
For our project we decided to use Google Firebase as the backend source where we push the order data for users and store menu data. Since the Google Firebase server is always up and running, there is no backend setup necessary to run our application. However if you would like to learn more about how we set up the backend, or want to modify or use an entirely new Firebase project with this repository, here’s some steps:  

1. Create a new firebase project 
2. Go to console.firebase.google.com, click Add Project
3. Enter the desired project name
4. In your project’s overview page, add firebase to a web app with the (‘</>’) icon  
5. Install the Firebase SDK using ‘npm install firebase’
6. Create a config.js file within your coding environment which will store useful firebase functions such as Auth, db, and logout 
7. Copy paste configuration information into config.js from the the Project Settings page
8. Add Collections and Documents to Firebase 
9. For our application we had many different collections representing different ingredient categories from The Study’s menu. For each ingredient/food item we included three separate fields: name, nutrition, and footprint. Footprint and name were stored as strings and nutrition was stored as a integer
10. Interact between Frontend and Backend
11. With the config file and database setup, you can interact between frontend and backend. You can push orders to the database, or pull from the database to get items. 

### Run Backend
For this project you do not need to set up the backend as it will be continuously operating through Firebase. As long as you have the frontend setup, you will be able to operate the application through localhost:3000 


