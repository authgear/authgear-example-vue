# Getting Started with Authgear Vue Tutorial Demo App

This repo is the sample code of this tutorial: https://docs.authgear.com/tutorials/spa/vue

You can follow the tutorial to learn how to integrate Authgear with your Vue single page applications.

### Create Free Authgear Account
1. Goto [https://portal.authgear.com](https://portal.authgear.com) and create a free account (or login to your existing account).

2. Then navigate to Applications and create a new client application of type Single Page Application.

### Environment setup

Create a `.env` file on the root directory of your project then copy and paste the content of `.env.template` to it. 

Add the values for your own Authgear client application's Client ID and Endpoint in the corresponding key.

Ensure to add http://localhost:4000/auth-redirect as a redirect URI for your application in Authgear Portal.

### Available Scripts

First, run the following command from your project directory install all dependencies:
```
npm install
```
In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles Vue in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run preview`

Preview the app that built by `npm run build` to simulate the view in production!