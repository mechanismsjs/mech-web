mech-web
=========

Mechanisms are plugins for open source.

Mech-web mechanisms are mechanisms specific to accessing the DOM (document object model).

We currently support:

* elemById, e$ - mechanism which gives you access a single dom element (#id).

See [Mechanisms Home](https://github.com/mechanisms/mech) for more information.

# Documentation

## elemByID, e$

elemByID returns access to a single DOM element (id).

* id can be a primitive value like "hello" or 0.
* id can be another mechanism like str("hello")

### Examples

Returns the element.

    mw.elemByID("left").go;
    
Returns the value of an element with the id "left":

    m.propGet("value",m.e$("left")).go;

Sets the value of an element with the id "left" to 23:

    m.propSet("value",m.e$("left"),23).go;

# Setup

## Using From Npm

Change directory to your node project.

    $ npm install --save mech-core
    $ npm install --save mech-web

## Development

## Get Involved!

There are **a lot** of core mechanisms to add. Many of them are easy to create and can be done in an hour (including in-depth tests).

### Setup

You need a node development environment setup [What We Did](https://github.com/erichosick/nodebox).

[Git mech-core](https://github.com/mechanismsjs/mech-core) latest version.
[Git mech-web](https://github.com/mechanismsjs/mech-web) latest version.

#### Install

    $ npm install // may need sudo
    
#### Continuous rebuild

Will rebuild mech-web.min.js and mech-web.brow.js (created for convenience).

    $ gulp

#### Test

Right mouse click on index.html and open in browser.

At this time, to keep dependencies small, we did not setup automatic reload of the browser on changes.