# react-interview

Welcome to the Runway frontend exercise! We really appreciate you taking time to show us your
frontend development skills.

This repository is configured with a bunch of widely-used tools that are part of our
frontend engineering stack at Runway: React, NextJS, TypeScript, and more. It also includes
[Chakra UI](https://chakra-ui.com/docs/getting-started), a flexible component library that contains
handy building blocks for creating React apps.

Along with the tooling, you'll find a few components to help get you up and running on the
exercise. Our goal with the repo is to save you time creating a modern development
environment and writing boilerplate code. You're welcome to use some,
all, or none of what's included here. If you prefer to start with something like
[create-react-app](https://github.com/facebook/create-react-app) and to
borrow selectively from this repo, please feel free to do so.

### Installation

You can install dependencies using `yarn install` and run the app using `yarn dev`.

-------
# Spreadsheet Exercise

The goal of this exercise is to create a simple spreadsheet for a financial application.

## Requirements
- Add row and column labels to the spreadsheet.
- Display numeric cell values as comma-ized dollars (e.g. 1000 → $1,000).
- Add single-cell selection functionality, and allow user to move the selection with arrow keys.
- If you have time remaining, feel free to add whatever you like beyond the given requirements, or to outline in the README what you would have liked to add with additional time.


### Understand
- The starter repo is a great starting point. No interest in reinventing the tooling or style.
- Chakra has a great deal of components to work with which have a lot of flexibility. Adding row and
column labels to the spreadsheet should be relatively straightforward.
- Displaying cell values as currency should be a feature chakra can handle. Number input, I believe,
will do the trick.
- Adding single cell selection shoudl be possible using ARIA accessibility standards.




### Plan
- Figure out how to add row and column lables to the spreadsheet. I may just have the first
row and column styled differently and not be strictly currency inputs.
- Currency values idea in cell using Number Input:
```tsx
import {
  NumberInput
} from '@chakra-ui/react'

<NumberInput
	defaultValue={0}
	precision={1}
	step={0.1}
	format={(value) =>
		String(value).replace(".", ",")
	}
	parse={(value) => value.replace(",", ".")}
>
```
- Will complete the first two objectives and circle back to keyboard navigation. 
Not exactly sure how to implement. 



> Reflect
- Money input is something I have solved in the past, but spent time trying to use built in
functionality of chakra to make it work. Here is my codesandbox for my moneyt input:
https://codesandbox.io/s/money-input-ocvhf?file=/src/MoneyInput/index.tsx

It uses some antd components but the core functionality could be adapted into the parse method
of NumberInput from Chakra.

- I didn't complete the keyboard up down left right functionality. Though tab and shift tab functions.
To accomplish arrow keys, I believe something like this would work  (adapted to the tech stack Runway uses):

```js
document.onkeydown = (function(e){
    if (e.which == 39) { 
       F2();
    }
    if (e.which == 37) { 
       F1();
    }
});

function F1() {
  document.getElementById("right").focus();
  document.getElementById("left").blur();
}

function F2() {
  document.getElementById("right").blur();  
  document.getElementById("left").focus();
}
```