# Truck configurator

[![](https://github.com/alexmozheyko/truck-configurator/workflows/Unit%20tests/badge.svg)](https://github.com/alexmozheyko/truck-configurator/actions?query=workflow%3A%22Unit+tests%22)
[![](https://github.com/alexmozheyko/truck-configurator/workflows/Linting/badge.svg)](https://github.com/alexmozheyko/truck-configurator/actions?query=workflow%3ALinting)
[![](https://github.com/alexmozheyko/truck-configurator/workflows/EditorConfig/badge.svg)](https://github.com/alexmozheyko/truck-configurator/actions?query=workflow%3AEditorConfig)

### A prototype of solution that helps the engineers to visualize which components can be combined in accordance with sales department.

#### For solution explanations please visit [Solution explanation file](./solution-explanation.md)

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
