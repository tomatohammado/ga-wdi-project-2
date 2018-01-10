# GA WDI20 Project 2: Star Wars Miniatures App

## Proposal

See `planning/` for proposal

## Presentation

_{**insert youtube link here**}_

## Technologies Used

_core technologies_
- node
- npm

_database_
- mongoDB
- mongoose

_web framework_
- express

_templating_
- express-handlebars

_important npm packages_
- body-parser
- method-override

## Installation Instructions

There is nothing to install. The database is hosted on mlab, and the site is deployed on heroku.

The user can utilize the site by navigating to <https://sheltered-coast-50052.herokuapp.com/>

## Features

When the user navigates to the homepage, they see all of the Miniatures in the Miniatures collection in the database.

On the same homepage, there is a form where the user can add new Miniature items.

Currently, there are only 10 images possible because I only have permission from rebelscum.com to use up to 10 of their assets.

From the homepage, the user can click on any Miniature (anywhere in the container, from the title to the card) to navigate to that Miniature's specific page.

On the Miniature's page, the user can update the name and imageUrl of that Miniature, or delete it entirely.

At any time, the user can click on the Main Header (rendered using a free custom Star Wars themed font) to navigate back to the home page.

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
5. users controller?

## Lingering problems

When updating a Miniature, if a field is left blank, then the original value is overwritten and made blank after updating.

For example, if you update the name but leave the Image Url blank, then no image will be displayed after updating.

An easy fix for this would be to automatically populate the Update form with the current values of the given Miniature, so that the user can leave it unchanged.

Definitely the simplest way to solve this issue.

## Bonus Goals

- [ ] User Authentication
- [ ] 2-factor authentication (twilio)
- [ ] tests

## Notes for Presentation video

- this is kinda obvious, but what was interesting about my code?
- what were the things I had to do to wrestle with materialize
- file structure: separate controller, routes files
- my...different way of seeding files (and why I prefer it)
- in video credits, include:
  - link to deployed site
  - link to github repo
  - vscode extensions?
  - link to rebelscum.com
  - link to custom font
  - link to gists of terminal windows
- possibly some sort of reference to my toggl timer metrics
