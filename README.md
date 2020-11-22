# GOCO React Web Boilerplate ⚙️

#### Engine: `v12.16.*`
#### React-version `=<16.8`
#### AWS CLI `2`
#### npm `6.14.*`
#### amplify cli `~4.27.2`


`npm i` to install the project

`npm run start` to start the project

## Components
 - ALL Components must be in a file that starts with a capital letter
 - atoms should be files that are purely styled components 
 - molecules are components that are small, but contain more than just styled components
 - organisms are more complex components that contain multiple molecules/atoms

 ## Pages
 - All pages should have a folder inside content that encapsulates page specific code.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

 ## Design
 - This project uses [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/)
 
## Notable documentation
- [React](https://reactjs.org/docs/getting-started.html)
- [Amplify](https://docs.amplify.aws/lib/q/platform/js)

## Available Scripts

In the project directory, you can run:

### `npm i` 
This command install the project


### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Security 🛡
Never ever enclude any .env files, api keys or equvilant
