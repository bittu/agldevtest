# AGL Developer Test

Code to consume json from a web service and output a list of all cats in aplhabetical order under a heading of the gender of their owner

### Installing

```
Clone or Download the source
```
```
.
├── lib
|   ├── jasmine-2.5.0
|   └── lodash.min.js
├── spec
|   └── AppSpec.js
├── src
|   └── app.js
├── css
|   └── style.css
├── README.md
├── SpecRunner.html
└── index.html
```

## Built with

```
* Vanilla Javascript (ES2015) - functionality and jsonp call
* lodash - util for array and object parsing and templating
* Jasmine - Test suite
```
(**Technical Note**: *Could also be built as a node project using tasker tools like grunt/gulp/webpack and unit tests with tools like karma*)

### Running App

```
open index.html in browser
```

### Running Test Suite

```
open SpecRunner.html in browser
```

This test suite contains following specs
```
* Validating jsonp response
* Validating modified and filtered response having only cat pets
* Validating alphabetical sorting of modified and filtered response
```


## Authors
* [Sandeep Kumar Vemula](https://github.com/bittu)
