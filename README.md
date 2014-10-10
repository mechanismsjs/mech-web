# mech-web

Mechanisms are plugins for open source.

Mech-web mechanisms are mechanisms specific to accessing the DOM (document object model).

Supported Mechanisms:

* elemById, e$ - mechanism which gives you access a single dom element (#id).

See [Mechanisms Home](https://github.com/mechanisms/mech) for more information.

# Documentation

* [Git mech-core](https://github.com/mechanismsjs/mech-core) latest version.
* [Git mech-web](https://github.com/mechanismsjs/mech-web) latest version.

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

    $ npm install --save mech-web

## Development

## Get Involved!

There are **a lot** of core mechanisms to add. Many of them are easy to create and can be done in an hour (including in-depth tests).

### Setup

You need a node development environment setup ([What We Did](https://github.com/erichosick/nodebox)).

#### Install

    $ npm install
    
#### Continuous Rebuild and Testing

See ./dist for files we build.

    $ gulp

#### Test

    $ gulp webtests

OR

Right mouse click on /testsweb/index.html and open in browser.