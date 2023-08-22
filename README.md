# Truck configurator

[![](https://github.com/alexmozheyko/truck-configurator/workflows/Unit%20tests/badge.svg)](https://github.com/alexmozheyko/truck-configurator/actions?query=workflow%3A%22Unit+tests%22)
[![](https://github.com/alexmozheyko/truck-configurator/workflows/Linting/badge.svg)](https://github.com/alexmozheyko/truck-configurator/actions?query=workflow%3ALinting)
[![](https://github.com/alexmozheyko/truck-configurator/workflows/EditorConfig/badge.svg)](https://github.com/alexmozheyko/truck-configurator/actions?query=workflow%3AEditorConfig)


## Description
To search for the necessary truck elements (external or internal), type a keyword in the search bar at the top of the screen.
When user selects at least one of the results presented in the table, the `Your selection` section appears at the bottom of the page. It is possible to delete any of the selected elements or all at once (note, that the `Your selection` section is hidden if there are no selected elements).

The `View combinations` button enabled only if at least one internal and external element are selected (i.e. combinations can be made). When user clicks on `View combinations` button, a confirmation modal appears in accordance with the task. 

After clicking on `View combinations` button, user redirects to a page with possible combinations, which are shown in a table.
If combinations between the selected elements are not possible, the notification `No combinations found` appears. The search field on this page is blocked because search can only be done on the `Landing page`.

On this page, user can also delete one or more selected items. After each deletion, possible combinations are updated to show relevant data. If user deletes the last selected item, he returns to the `Landing page`. He can also get back to the `Landing page` by clicking on the `Back` button.

> The application is build using Vue.js (Vuex) and Bootstrap. It is fully mobile responsive and covered by unit tests.

## Build / run guide:

### Install all dependencies
```
yarn install
```

### Setup development environment
```
yarn server:run // Starts backend server on port 8080
yarn serve      // Starts frontend app on development server
```

### Production build
```
yarn build
```

### Run tests
```
yarn test:unit
```
