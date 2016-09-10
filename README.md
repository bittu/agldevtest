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
├── README.md
├── SpecRunner.html
└── index.html
```

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

## Built with

```
* Javascript - functionality and jsonp call
* lodash - util for array and object parsing and templating
* Jasmine - Test suite
```

## Authors
* [Sandeep Kumar Vemula](https://github.com/bittu)