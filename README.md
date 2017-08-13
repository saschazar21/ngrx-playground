# ngrx Playground
A sample app for demonstrating the extent of *@ngrx/store* and *@ngrx/effects* of the [@ngrx/platform package](https://github.com/ngrx/platform) on a simple todo list.  
Two demo todos are already contained and appear 2 seconds after the initial page loadin.

* Author: [Sascha Zarhuber](https://sascha.work)
* GitHub: [@saschazar21](https://github.com/saschazar21)
* Twitter: [@saschazar](https://twitter.com/saschazar)
* Source: [https://github.com/saschazar21/ngrx-playground](https://github.com/saschazar21/ngrx-playground)
* Issues: [https://github.com/saschazar21/ngrx-playground/issues](https://github.com/saschazar21/ngrx-playground/issues)
* Releases: [https://github.com/saschazar21/ngrx-playground/releases](https://github.com/saschazar21/ngrx-playground/releases)

## Prerequisites
* [Node.js](https://nodejs.org/en/) >= v6
* [Angular CLI](https://cli.angular.io) (optional)

## Installation
* `git clone https://github.com/saschazar21/ngrx-playground`
* `cd ngrx-playground`
* `npm start` or if *Angular CLI* is installed: `ng serve`

## Source code
The source code is nothing special and its main purpose is to show how @ngrx/store could be included into a project.  
The app was bootstrapped using the `ng new` command of *Angular CLI*, the different list components and sub modules were included using the `ng generate` commmand.

```
- src
  | - app
    | - demo-content
    | - list          // ListComponent
      | - list-form   // ListFormComponent
      | - list-item   // ListItemComponent

    | - models
    | - shared
      | - material    // sub module for exporting @angular/material
      | - store
        | - actions   // The ngrx actions
        | - effects   // The ngrx effects
        | - reducers  // The ngrx reducers
```

## Used libraries
* [@ngrx/store](https://github.com/ngrx/platform/blob/master/docs/store/README.md) and [@ngrx/effects](https://github.com/ngrx/platform/blob/master/docs/effects/README.md)
* [@angular/material](http://material.angular.io) and *@angular/cdk*
* and many more as sub-dependencies of the above

## Issues
Please report any bugs or issues to the [issues](https://github.com/saschazar21/metalsmith-pure-text/issues) section.

## Contribution
Contributors welcome!  
Please fork this repository, open a pull request and drop me a line on [twitter](https://twitter.com/saschazar/).

## License
MIT, Sascha Zarhuber, 2017