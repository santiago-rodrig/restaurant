# Restaurant

A restaurant page made with JavaScript and webpack. This project showcases
webpack usage capabilities for frontend projects, especially the handling of
different file formats to create a single JavaScript file (the bundle in terms
of webpack). As a matter of context this is a website for promoting an
hipothetical restaurant, The page even has ficticios characters and a utterly
made up history.

![project gif demonstration](./doc/demo.gif)

## Features

### General

- A home section with restaurant's main dishes
- A contact section with restaurant's contact information
- An about section with restaurant's extra information
- Images everywhere
- Nice fonts for headings and paragraphs
- Footer with social network links
- Navigation tabs at the leftmost part of the site
- Credit is given to the picture's authors.
- Text is not lorem ipsum.

### Technical

- webpack
- Several file loaders
- Source code is neatly organized
- A `lib` folder with helper functions for loading images
- Raw data is contained on their own file
- Anything that might be a component is actually a component
- Sass handles the styling

## Setup

### Requirements

- [node](https://nodejs.org/en/) _or yarn_ if you want.

### Steps

1. `git clone https://github.com/santiago-rodrig/restaurant.git`
2. `cd restaurant`
3. `npm install`

To produce the source code output you need to execute `npm run build` (a script
instruction in `package.json`), but you can also run `npx webpack` instead.

To run a local server with the source code output just type `npm run server`
(another script instruction), as an alternative you can instead type
`npx webpack-dev-server --open`.

## License

This project is licensed under the
[MIT](https://github.com/santiago-rodrig/blob/LICENSE) license, which
basically means that you can do whatever you want with the code under the
condition of giving credit to its author and noticing the license.

## Credits

This project was developed by
[santiago-rodrig](https://github.com/santiago-rodrig).
