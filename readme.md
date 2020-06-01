# React Apollo Environment

# Description

Custom React Apollo enviroment that includes node-server, SaSS support, Redux, Jest, live browser detection, Apollo-Boost and formatting support.

# Setup

1. git clone https://github.com/C-Birdwell/React-Apollo.git - install project
2. yarn install - install node dependencies
3. Setup server for devolopment
   1. yarn start - starts node server (keep this running in a seperate terminal window)
   2. yarn dev-server - starts enviroment for development (keep this running in a seperate terminal window)
4. Create a .env.production and .env.development files in the root of the folder with an CLIENT_URL key and an url value

# Extra Scripts

1. yarn build:dev - build for development (produced files are located in public/dist folder)
2. yarn build:prod - build for production (produced files are located in public/dist folder)
3. yarn destroy - removes dist folder
4. yarn test - Run Jest
