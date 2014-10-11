[mech-library-link]: https://github.com/mechanismsjs/mech-library "Clone to easily create new mechanism libraries"
[mech-web-link]: https://github.com/mechanismsjs/mech-web "Web centric DOM mechanisms"
[mech-core-link]: https://github.com/mechanismsjs/mech-core "Core mechanisms"
[mech-home-link]: https://github.com/mechanisms/mech "Home repository for mechanisms"

# mech-web

Mechanisms are plugins for open source.

Mech-web mechanisms are mechanisms specific to accessing the DOM (document object model).

See [Mechanisms Home][mech-home-link] for more information.

* [mech-core][mech-core-link] - Core mechanisms.
* [mech-web][mech-web-link] - This project. Web centric DOM mechanisms.
* [mech-library][mech-library-link] - Clone and start making your own mechanism libraries.

# Documentation

## Supported Mechanisms in this Library

* elemById, e$ - mechanism which gives you access a single dom element (#id).

## elemByID, e$

elemByID returns access to a single DOM element (id).

id can be:

* a primitive value
  * "hello"
  * 0
* another mechanism or policy
  * m.str("hello")
  * m.num(3)

### Examples

Get an element.

    mw.elemByID("left").go;
    
Get the value of an element with the id "left":

    m.propGet("value",m.e$("left")).go;

Set the value of an element with the id "left" to 23:

    m.propSet("value",m.e$("left"),23).go;

# Setup

## Using In Your Projects

Change directory to your node project.

    $ npm install mech-web --save

## Development

## Get Involved!

There are **a lot** of core mechanisms to add. Many of them can be created in a few hours including in-depth tests. Clone [mech-library][mech-library-link] to get started!

### Setup

Install:

    $ npm install

Continuous test:

    $ gulp

Test:

    $ gulp webtests

OR

Right mouse click on /testsweb/index.html and open in browser.