# XT Shopping Cart Assignment

This is the base folder for the shopping cart exercise. You will have all the static assets and mock server responses available in this repo.

## Getting Started

Clone this repo and run following command for starting the mock server:

```
npm install
npm run start
# or
yarn install
yarn start
```

# Full install
```
npm install next react react-dom redux react-redux next-redux-wrapper bootstrap react-redux reactstrap --save
```
## Proxy Setting ./next.config.js
1. Add new entry to 
```javascript
module.exports = {
      /* config options here */
      async rewrites() {
            const server_routes = [
                  "/banners",
                  "/new-url" // <---- ADD HERE
            ]
            return server_routes.map((item) => {
                  return {
                        source: `${item}`,
                        destination: `${PROXY}/${item}`,
                  }
            })
      }
}
```