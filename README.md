# mech-web

Mech-web provides access to the DOM (document object model).

See [Mechanisms Home][mech-home-link] for more information and other libraries.

# Documentation

# In This Library

* *[elemById](#elembyid-mechanism)*, [e$](#elembyid-mechanism) - returns access to a single DOM element (#id).

## <a name="filter-mechanism"></a> elemByID, e$

```elemByID``` returns access to a single DOM element (id).

```id``` can be:

* a primitive value
  * ```m.elemByID("hello")```
  * ```m.elemByID(0)```
* a mechanism
  * ```m.elemByID(m.str("hello"))```
  * ```m.elemByID(m.num(3))```

### Examples

Get an element.

```
mw.elemByID("left").go;
```

Get the value of an element with the id "left":

```
m.propGet("value",m.e$("left")).go;
```

Set the value of an element with the id "left" to 23:

```
m.propSet("value",m.e$("left"),23).go;
```

# Setup

## Using In Your Projects

Change directory to your node project.

```
$ npm install mech-web --save
```

## Development

## Get Involved!

There are **a lot** of core mechanisms just waiting to be created. Many of them can be created in a few hours including in-depth tests. Clone [mech-library][mech-library-link] to get started!

### Setup

Install:

```
$ npm install
```

Continuous test:

```
$ gulp
```

Test:

```
$ gulp webtests
```

#### Test Server

Read documentation in gulpfile.js to see how to setup automated web testing.

```
$ gulp webserver
```

[mech-library-link]: https://github.com/mechanismsjs/mech-library "Clone to easily create new mechanism libraries"
[mech-web-link]: https://github.com/mechanismsjs/mech-web "Web centric DOM mechanisms"
[mech-core-link]: https://github.com/mechanismsjs/mech-core "Core mechanisms"
[mech-home-link]: https://github.com/mechanisms/mech "Home repository for mechanisms"
