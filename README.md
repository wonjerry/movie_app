# Movie App for fun

URL : https://wonjerry.github.io/movie_app/

## Getting Started

This app is simple react movie app. I made it because of understanding react structure

### Need to know

1. JavaScript
2. HTML
3. CSS
4. Basic React Theory

### Installing and Running

First, clone this project
and
```
npm start
```
that's it!

## Deployment

1.  npm run build
	build compress html and css ,js files
2. npm install --save-dev gh-pages
	This comment create gh-page branch in your repository
3. Add some codes in package.json
> // ...
    "scripts": {
      // ...
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }

 4. npm run deploy
 5. wait a few minute
	 take few minute because of cache

## Reference
I learned it from [nomad-coder](https://academy.nomadcoders.co/courses)
