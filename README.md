# GA WDI20 Project 2: Star Wars Miniatures App

## Proposal

See [proposal.md](resources/planning/proposal.md) for proposal

I was cautioned against the microservice approach for this project, as we will do something similar in project 3.

The [resources/](resources/) directory contains material I used during the project, includig:

- my vscode settings
- saved terminal windows
- links to the links I used for research

## Presentation

<https://youtu.be/tAner83YPx0>

## Technologies Used

### _core technologies_

- node
- npm

### _web framework_

- express

### _database_

- mongoDB
- mongoose

### _templating_

- express-handlebars

### _important npm packages_

- body-parser
- method-override

### _authentication_

- passport
- passport-local
- bcrypt-nodejs
- connect-flash
- cookie-parser
- express-session

### _development_

- nodemon
- morgan

### _deployment_

- heroku
- mlab

## Installation Instructions

Use `npm i` to install node package dependencies.

_Note_: nodemon is not included, as I have it installed globally. It is not vital to work with the source code, but very useful for developing. I may or may not include it as a dev dependency later.

The user can utilize the site by navigating to <https://sheltered-coast-50052.herokuapp.com/>

## Features

When the user navigates to the homepage, they see all of the Miniatures in the Miniatures collection in the database.

On the same homepage, there is a form where the user can add new Miniature items.

Currently, there are only 10 images possible because I only have permission from rebelscum.com to use up to 10 of their assets.

From the homepage, the user can click on any Miniature (anywhere in the container, from the title to the card) to navigate to that Miniature's specific page.

On the Miniature's page, the user can update the name and imageUrl of that Miniature, or delete it entirely.

At any time, the user can click on the Main Header (rendered using a free custom Star Wars themed font) to navigate back to the home page.

## Bonus Features

I have also implemented user authentication using Passport

A users can sign up, and register an unused email and any password. If a user tries to signup an email that is already registered, the signup page will reload and flash an error message.

Upon a successful signup, the now registered user is automatically logged in and redirected to the homepage.

Once logged in, the navbar changes to allow the authenticated user to log out.

The user can log out on any page via the navbar. The user can log in again using the same credentials. If the password is incorrect, the page will reload the login page and flash a warning.

If a user tries to log in with an email that hasn't been registered through the signup page first, the login page will reload and flash a different error.

## Approach

I originally wanted the Miniature model to be immutable, and for the CRUD operations to apply on a 'Collections' field for the User model.

So, the User can read, update, add, and delete Miniatures from their collection, but the Miniature models would be seeded once and left untouched.

In the interest of finishing the MVP, I made CRUD operations on the Miniatures model without implementing Users first.

User authentication is the first bonus feature I plan on adding.

## Implenation Strategy

### MVP

1. I started with the model and seeding the database
2. then I made sure index.js was working
3. preliminary views
4. controllers and routes

### User Authentication

1. npm packages
2. index.js
3. user model (/db/models/user.js)
4. config/passport.js
5. users controller
6. users routes
7. login and signup views

## Lingering problems

- [x] **"Unsafe" Updates**

When updating a Miniature, if a field is left blank, then the original value is overwritten and made blank after updating.

For example, if you update the name but leave the Image Url blank, then no image will be displayed after updating.

An easy fix for this would be to automatically populate the Update form with the current values of the given Miniature, so that the user can leave it unchanged.

Definitely the simplest way to solve this issue.

## Bonus Goals

- [x] User Authentication
- [ ] Other authorization strategies
  - [ ] Facebook
  - [ ] Twitter
  - [ ] Github
- [ ] 2-factor authentication (twilio)
- [ ] tests (I want to make this a higher priority in my process, but I need practice to write tests efficiently)

## Reach Goals (probably won't happen before presentations)

- [ ] Create 'secret' page for authenticated use, have dropdown to add Miniatures to a personal collection (some field belonging to a User document, probably an array)
- [ ] Store images in mongodb
- [ ] User Authorization - allows higher-privilege users to add to Miniatures collection
- [ ] Functionality without reloading the page (some actions will still need redirects)

## War Stories

That error I got because I didn't realize I had the same URI trying to do two different routing options

When I Googled the error, I only got three results from all of the internet, and two of them linked to the top hit.

Had to reaaaaally think about what my code was doing to find the solution.

---

When I had to go through materialize 1.0.0-alpha.3 javascript file because the implementation in their docs changed, and I had to figure out how to get the [Dialogs](http://materializecss.com/dialogs.html) to work.

Meaning, I had to come up with this:

```js
M.toast({ html: '{{message}}' }, 4000)
```

...instead of what was given in the documentation:

```js
Materialize.toast('{{message}}', 4000)
```

I had to do something similar to get the responsive navbar to work, but couldn't determine from the 1.0.0-alpha.3 source code what to use as `@params {Element} el`, and there were over 2200 instances of 'el' in the source so I had to drop it and go back to an earlier version.
