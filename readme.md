
#Angular 7 Webcomponent example

Example as described 
- https://angular.io/guide/elements

#Pre-requisites: 

1. angular-cli
- see https://gist.github.com/greenstevester/3e32b00884af8d42b9506237652dffdf

2. https://www.npmjs.com/package/live-server
npm install -g live-server

#Steps to build and run

1. clone this repository
2. Run npm install
3. run ./buildWC.sh
4. Run the contents of the demo folder: 
   - npx live-server demo --port=8081

# Size of the end component
Even though 'ng build --prod' is used the resulting pop-webcomponent.js ends up at 289KB
