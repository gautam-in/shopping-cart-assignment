# XT Shopping Cart Assignment

This is the base folder for the shopping cart exercise. You will have all the static assets and mock server responses available in this repo.

## Getting Started

Clone this repo and run following command for starting the mock server:

```
#Simple Node/Express with EJS SASS  and Gulp

//Using Gulp(task runner) to compile scss to css and using live sass compiler extension in local
// using ejs as a template engine

$ npm install
$ npm install -g gulp
```
Run following command in terminal
gulp scss-css -> to run scss 
npm run start -> to compile code 

//Git branches
branches-> setup -> contains code setup 
branches->develop-> contains complete sabka bazaar assignment code


//Checked the api call using Advanced REST client in chrome extension

// wrong url will show error page content with error meta title

// key points for performance
**Used will-change:translate in carousel to reduce paint in layers
**Used async to load js scripts
**gzip compression
**gulp - to minimize css

// key points for seo
**canonical url
**robots.txt-> http://localhost:3000/robots.txt 
** robots meta tag that instructs web crawlers to index the page and to crawl any of the links on the page -> "index, follow" added in meta tag
**sitemap.xml
**schema- orgainzation and website
**meta title,description and keywords

// key points for accessibility
**aria-label & aria-labelledby
**skip to main content or Bypass blocks
**h1 tags
**tab click check
**alt tags
**tab-index = "0"
** role="button"
**outline-property
**semantic tags used like-header,footer,main,section
**aria-hidden="true" for svg images so screen readers cant read
AA OR AAA 
tab-index="-1"
5:1 contrast ratio



