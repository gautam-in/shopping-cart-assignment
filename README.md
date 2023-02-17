# XT Shopping Cart Assignment

This is the base folder for the shopping cart exercise. You will have all the static assets and mock server responses available in this repo.

## Getting Started

Clone this repo and run following command for starting the mock server:

```
npm install
npm run start
# or yarn recommanded
yarn install
yarn start 

# to generate production build
# first run following commnd to make unglifyzs work on respective OS

# for Unix-like (Linux, macOS, Git bash, etc.):
export NODE_OPTIONS=--openssl-legacy-provider

#for windows
set NODE_OPTIONS=--openssl-legacy-provider

# for windwos powershell
$env:NODE_OPTIONS = "--openssl-legacy-provider"

# the generate prod build using following command
npm/yarn build:production

#run generated build using followig command
yarn server / npm run server

#open localhost:80 and BOOM!! Enjoy :D
```


## Following functionality completed with responsive
 - Home page 
 - Products page    
 - Login/Signup

## Future Implmentataion
 - Write Test Cases for handlebar as well as node js api
 - Authentication and Authorization
