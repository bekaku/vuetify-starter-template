## Usage

### 1. Download this repository
```
git clone https://github.com/bekaku/vuetify-starter-template my-app
```
Repository will be downloaded into `my-app/` folder

### 2. Instal dependencies

Go to the downloaded repository folder and run:
```
npm install
```

### 3. Run the app

```
npm run dev
```
App will be opened in browser at `http://localhost:8080/`

### 4. Build app for production

```
npm run build-prod
npm run build
```
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
`npm run build` to build your app for production
`npm run lint` to run linting.


## Vuetify
Vuetify is developed exactly according to Material Design spec. Every component is hand crafted to bring you the best possible UI tools to your next great app. The development doesn't stop at the core components outlined in Google's spec. Through the support of community members and sponsors, additional components will be designed and made available for everyone to enjoy.


## Vuex

Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue's official [devtools](https://github.com/vuejs/vue-devtools) extension to provide advanced features such as zero-config time-travel debugging and state snapshot export / import.

## Vue-cli

We used the latest 3.x [Vue CLI](https://github.com/vuejs/vue-cli) which aims to reduce project configuration
to as little as possible. Almost everything is inside `package.json` + some other related files such as
`.babel.config.js`, `.eslintrc.js` and `.postcssrc.js`.

Let us know what you think and what we can improve below. And good luck with development!


#### Special thanks
During the development of this dashboard, we have used many existing resources from awesome developers. We want to thank them for providing their tools open source:
- [Vuetify](https://vuetifyjs.com/en/) for the wonderful framework


Let us know your thoughts below. And good luck with development!


## Demo

- [Start page](https://demos.creative-tim.com/vuetify-material-dashboard?ref=vtymdp-readme)
- [Notifications page](https://demos.creative-tim.com/vuetify-material-dashboard/#/components/notifications?ref=vtymdp-readme)

[View More](https://demos.creative-tim.com/vuetify-material-dashboard-pro?ref=vtymdp-readme).



## File Structure

Within the download you'll find the following directories and files:

```
vuetify-material-dashboard
├── README.md
├── CHANGELOG.md
├── babel.config.js
├── cypress.json
├── jest.config.js
├── now.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   └── vuetify.svg
│   ├── components
│   │   └── base
│   │       ├── Card.vue
│   │       ├── Item.vue
│   │       ├── ItemGroup.vue
│   │       ├── ItemSubGroup.vue
│   │       ├── MaterialAlert.vue
│   │       ├── MaterialCard.vue
│   │       ├── MaterialChartCard.vue
│   │       ├── MaterialSnackbar.vue
│   │       ├── MaterialStatsCard.vue
│   │       ├── MaterialTabs.vue
│   │       ├── MaterialTestimony.vue
│   │       ├── Subheading.vue
│   │       └── VComponent.vue
│   ├── i18n.js
│   ├── locales
│   │   └── en.json
│   ├── main.js
│   ├── plugins
│   │   ├── base.js
│   │   ├── chartist.js
│   │   ├── vee-validate.js
│   │   └── vuetify.js
│   ├── router.js
│   ├── sass
│   │   ├── main.scss
│   │   ├── overrides.sass
│   │   └── vuetify-material
│   │       └── _sidebar.sass
│   ├── store.js
│   └── views
│       └── dashboard
│           ├── Charts.vue
│           ├── Dashboard.vue
│           ├── Index.vue
│           ├── Widgets.vue
│           ├── component
│           │   ├── Buttons.vue
│           │   ├── Grid.vue
│           │   ├── Icons.vue
│           │   ├── Notifications.vue
│           │   ├── Tabs.vue
│           │   └── Typography.vue
│           ├── components
│           │   └── core
│           │       ├── AppBar.vue
│           │       ├── Drawer.vue
│           │       ├── Footer.vue
│           │       ├── Settings.vue
│           │       └── View.vue
│           ├── maps
│           │   └── GoogleMaps.vue
│           ├── pages
│           │   └── UserProfile.vue
│           └── tables
│               └── RegularTables.vue
├── tests
│   ├── e2e
│   │   ├── plugins
│   │   │   └── index.js
│   │   ├── specs
│   │   │   └── test.js
│   │   └── support
│   │       ├── commands.js
│   │       └── index.js
│   └── unit
│       └── example.spec.js
├── vue.config.js
```

##### Social Media


Facebook: <https://www.facebook.com/bekaku>

LinkedIn: <https://www.linkedin.com/in/bekaku/>

