#### To reproduce the bug

1. download or clone the repository
1. run `npm install`
1. run `npm start`
1. navigate to `http://localhost:3000/`
1. navigate between the pages by clicking the links

#### Expected behavior

Clicking "Go Back" should always take you to the previous page within the app

#### Actual behavior

Works as expected on Chrome, but not in Firefox, Internet Explorer, and Edge. In those three, clicking "Go Back" always takes you to the first page in the application.
