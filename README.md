# Modal

A simple, quick, and accessible modal.

## Overview

There are several ways to trigger the modal (ie. programmatically, or via a click Event), as well as to dismiss the modal (programmatically, mouse Events or the escape key). You can also easily customize the default CSS for a particular interaction.

## Getting Started
With npm: ```npm i @apathetic/modal```

with ```git clone git@github.com:apathetic/modals.git```

There is an ES6 module you may consume however you wish. Then:

```javascript
<!-- modal -->
<div id="terms" class="modal">
	<div class="modal--content">
		<i class="modal--close icon-close"></i>
		<h3>Hello</h3>
		<p>Random text here, something important.</p>
	</div>
</div>

<!-- modal trigger -->
<button data-modal="#terms">show</button>

```

## Methods

| method | args | description |
| ------ | ----------- |
| show() | querySelector (String) | shows the modal that is referenced by the given querySelector |
| hide() | - | hides the currently-displaying modal |
| bind() | querySelector (String) | programmatically binds modal functionality to an element |

## Demo

After cloning the repo:
```
npm i
npm start
```

A server will spin up at ```http://localhost:8080```, where you may play with the various examples.

## Support
* IE9+
* Safari / Chrome
* Firefox
* iOS
* Android 4.0+

## Examples

Please see the _test / demo_ directory

## Release History

### 0.1
* first release
