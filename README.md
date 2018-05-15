# Script Injection Example

This repo can demonstrate a benign cross-site-scripting attack through an HTML `input` element.

To keep this application as simple as possible, most error handling and edge-case handling has been intentionally left out.

## Installation

The server is Node/Express, so you will need to have [Node](https://nodejs.org/en/) installed on your machine.

1. Clone down this repo and change into the cloned repo
2. Run the command `npm install`

## Testing the Attack

1. Run the command `npm start` to start the Express server
2. Navigate to `localhost:3000` in your browser to view the homepage
3. In the input field, enter the text: `<script>alert('Uh oh!')</script>` and click **Submit**
4. Refresh the page to see the unexpected alert

To stop the server, go back into your command line and enter `control + c`