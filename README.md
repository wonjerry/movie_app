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

## What I learned from it
1. Smart dumb component
2. Fetch
3. Life cycle
4. ES6
6. Structure of react

## What I didn't learned from it yet
I know about basic concept of redux but I want to know how to manage state in react project by using redux. but I didn't know that

In nomad-coder course, There is  '[Make Timer App](https://academy.nomadcoders.co/courses/enrolled/235420)' course and That use redux and react native. So I'm going to see that course


## Reference
I learned it from [nomad-coder](https://academy.nomadcoders.co/courses)
