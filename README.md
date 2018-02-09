# Cross-Site-Scripting (XSS) Example

This repo can demonstrate a benign cross-site-scripting attack through and HTML `input` element.

## Installation

The server is Node/Express, so you will need to have [Node](https://nodejs.org/en/) installed on your machine.

1. Clone down this repo and change into the cloned repo
2. Run the command `npm install`

## Testing the Attack

1. Run the command `npm start` to start the Express server
2. Navigate to `localhost:3000` in your browser to view the homepage
3. In the input field, enter the text: `<script>alert('Uh oh!')</script>` and click **Submit**