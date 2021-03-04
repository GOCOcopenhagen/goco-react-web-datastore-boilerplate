# GOCO React Web Datastore Boilerplate ⚙️

#### Engine: `v12.16.*` / `Erbium`
#### React-version `=<16.8`
#### AWS CLI `2`
#### npm `6.14.*`
#### amplify cli `~4.27.2`


`npm i` to install the project

`npm run start` to start the project

## Backend - Basic DataStore
Open the GraphQL schema in the amplify/backend/api/datasourcename/schema.graphql. You can use the sample or the one below that will be used in this example:

```graphql
type Click @model {
  id: ID!
  time: Int!
}
```
See more here: [Datastore example](https://github.com/dabit3/amplify-datastore-example/blob/master/README.md)

# Design
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
 
 ## Illegal stuff
 - Do not outcomment code. Use the vcs!
 - Try to make the code compact. Do not have lines with one symble. Fx:
 
 ```html
//Illegal 
<a 
    href="https://www.facebook.com/fundbrickscompany/"
    rel="nofollow noopener"
> 
    <FBIcon 
        name={"facebook"}
    />
</a> 

//Legal 
<a href="https://www.facebook.com/fundbrickscompany/" rel="nofollow noopener"><FBIcon name={"facebook"} /></a>

```

## Notable documentation
- [React](https://reactjs.org/docs/getting-started.html)
- [Amplify](https://docs.amplify.aws/lib/q/platform/js)
- [Datastore example](https://github.com/dabit3/amplify-datastore-example/blob/master/README.md)

## Available Scripts

In the project directory, you can run:

### `npm i` 
This command install the project


### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Security 🛡
Never ever enclude any .env files, api keys or equvilant
