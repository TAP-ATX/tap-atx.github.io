# Webpage

https://www.tap-atx.org

# Requirements

- `node` - 4.15.5
- `yarn` - 1.22.10

# Infrastructure

The TAP-ATX Homepage was created with https://github.com/facebook/create-react-app as the base boilerplate.

- [React](https://reactjs.org/)
- [Sass](https://sass-lang.com/)
- [Prettier](https://prettier.io/)
- [gh-pages](https://github.com/gitname/react-gh-pages)

# Useful Scripts

## `yarn install`

Installs all necessary dependencies including the `dev-dependencies`. This is necessary when deploying.

## `yarn start`

This starts up a localhost page that also watches for any changes in the code. Good for developing new pages

## `yarn deploy`

Deploys changes to `gh-pages`. The changes will be reflected in production (https://www.tap-atx.org). This will run
a prettier check to make sure that the pages follow the right style. If there's an issue, you can fix it by running
`yarn prettier --write .` from the root folder

# How to update the site

## Updating Officers

Take a look at (leadership.js)[https://github.com/TAP-ATX/tap-atx.github.io/blob/main/src/pages/leadership.js].

```javascript
import JustinPic from "../images/officers/justin.jpg"

...

<OfficerRow
  imgSrc={JustinPic}
  name="Justin Chang"
  title="Treasurer"
  description="I joined TAP because I never felt connected with my roots. By joining TAP-ATX, I expanded my knowledge of Taiwan as well as my circle of friends."
/>
```

To add a new officer, do the following

- Add the officer's picture into `src/images/officers`
- import the picture like above
- Fill in the name, title, and description of the officer

## Update Splash Page images

The images are currently pulled from the `src/images/instagram` folder. By default, it is pulling the first 12 images and then shuffling them to display. If you want to change the photos, you should switch an image by renaming the new file with the swapped out image's name. ex: `instagram_1.jpg`

## Creating a new Page

- Create a new page component under `src/pages`
  - `new_component.js`
  - `new_component.scss`
- Add the route and component to (App.js)[https://github.com/TAP-ATX/tap-atx.github.io/blob/main/src/App.js]
- Add new link to to (header.js)[https://github.com/TAP-ATX/tap-atx.github.io/blob/main/src/components/header.js]
