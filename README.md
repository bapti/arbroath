# arbroath
Http API testing library that is fully configuration driven and asynchronous

[![Build Status](https://travis-ci.org/bapti/arbroath.svg)](https://travis-ci.org/bapti/arbroath)

#### To do

- [x] Implement CI with [travis](https://travis-ci.org/)
  - [x] Unit tests reporting
  - [x] Integration tests reporting
- [ ] Implement [Greenkeeper](http://greenkeeper.io/)
- [ ] Get request
  - [ ] Status code checking
  - [ ] Fake data in query string

#### Design Goals

- [ ] Run from command line
- [ ] Run as library
- [ ] Define tests and logic from configuration files
- [ ] Stream all the things
- [ ] Everything should be able to be asynchronous

#### Learning goals for me

- [ ] Good understanding of YAML
- [ ] Configuration based DSL
- [ ] Better understanding of streams

#### Diagrams

- [Architecture Diagrams](./diagrams/README.md) are available here

#### Inspiration

- [Blog](https://developer.atlassian.com/blog/2015/11/scripting-with-node/) about building a node js cli
- [Blog](http://martinfowler.com/articles/refactoring-adaptive-model.html) about the adaptive model and pushing behaviour into configuration

#### Libraries

- [Coffee Script](http://coffeescript.org/) language because I love it
- [Request](https://github.com/request/request) HTTP library
- [Highland](http://highlandjs.org/) streaming made easy

#### Testing

```sh
npm test
```

- [Mocha](https://mochajs.org/) - test framework and cli
- [Should](http://shouldjs.github.io/) - assertions
