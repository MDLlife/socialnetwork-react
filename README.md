# MDL REACT SSR Redux

# Install
`yarn install`

# (Required step for Production deployments) Install Bower dependencies & Prepare CSS/JS
`npm run build`

# Run
`npm run dev`


# Webstorm:
```
When resolving modules, WebStorm uses NODE_PATH environment variable defined in Default Node.js run configuration:
 on the main menu "Run | Edit Configurations..."
 expand "Defaults" node and select Node.js
 specify NODE_PATH in "Environment variables" field to ./app, so NODE_PATH=./app
 This will enable the right click feature within webstorm for quick navigation around files
 https://youtrack.jetbrains.com/issue/WEB-19476
```

# System Requirements
## NodeJS latest
## NPM latest
## Gulp
## Mocha to run the tests
## Bower to download css/js dependencies like bootstrap