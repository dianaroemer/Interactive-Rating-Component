# [Frontend Mentor - Interactive rating component solution](https://dianaroemer.github.io/Interactive-Rating-Component/)

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

 - Desktop Ratings Screen
![The desktop ratings screen, with rating buttons 1-5](https://raw.githubusercontent.com/dianaroemer/Interactive-Rating-Component/main/FEM%20starter%20components/design/my_screenshots/screen1.png)
 - Desktop Thank you Screen
![The desktop thank you screen, showing which rating you selected and a calculator](https://raw.githubusercontent.com/dianaroemer/Interactive-Rating-Component/main/FEM%20starter%20components/design/my_screenshots/screen2.png)
 - Mobile Ratings Screen
![A mobile view of the ratings screen, with rating buttons laebeled 1-5](https://raw.githubusercontent.com/dianaroemer/Interactive-Rating-Component/main/FEM%20starter%20components/design/my_screenshots/screen3.png)

### Links

- [Solution URL: ](https://github.com/dianaroemer/Interactive-Rating-Component)
- [Live Site URL: ](https://dianaroemer.github.io/Interactive-Rating-Component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid (for centering)
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Sass](https://sass-lang.com//) - CSS Extension Language


### What I learned

Using Sass with React provided a mild challenge for implementation, as multiple .scss files are spread across the project - however Sass's ability to share heirarchical styling and CSS variables makes keeping consistent color data across every individual React component quite easy. I can see this being very powerful later on down the line.

```css
@use '_colors' as _colors;
.exampleDiv {
  color: _colors.$MediumGray;
}
```

In additional, creating modular class state objects in React has been a challenge in the past - I remember solving the problem by storing individual classNames in the components' state, and upon state updates, updating the components' class name in their respective render() calls, and allowing React to redraw each component. In this implementation, I was able to solve modular classNames based on state by creating an array that stores the button objects, which in turn creates the new objects variably as they get selected and de-selected, which cooperate with CSS's basic :hover pseudoclass. 

```js
    let valueButtons = [];
    for(let i = 1; i <= 5; i++){
        let className = (i === parseInt(props.clickedRating) ? 'valueButtonSelected' : 'valueButton');
        let valueButton = <button className={className}
                                value={i}
                                key={i}
                                onClick={(e) => {
                                    props.handleSetClickedRating(e, e.target.value)
                                }}>{i}</button>
        valueButtons.push(valueButton);
    }
    // And later, in the component's render or return
    <div>
      {valueButtons}
    </div>
```

I can see the above becoming a problem at scale - redrawing an array of five buttons is fairly straightforward, but imagine redrawing an entire movie database on Netflix when you want to update a single element's state. In that case, there's something to be said about calculating the optimal Big O across size - is re-rendering five elements over and over faster than rendering each element individually with slightly higher complexity and storage space, but with less calls over the lifetime of the sum of the objects (for example, individually managing button state and only updating singular buttons, as opposed to mapping across a large spread of buttons).

Also, learned that `event.target.value` automatically types as a `string`. While multiple source recommend converting that to a number at function call time by instead running `event.target.valueAsNumber`, I was unable to find success with that method. Instead, simply running a `parseInt(event.target.value)` brought success and appropriately typed my incoming value as an Int, though it may be computationally more expensive than otherwise.


Sneaky Radial-Gradient and 1px wide box-shadow on the bottom and right! These designs are really making you work for it, getting these colors right. I also feel like this is the second or third project in a row that has almost deliberately given all of the colors except for one (like the two in the color gradient background here).


I learned that using space-between when spacing different elements across a row or column can be an enormous pain the butt when trying to match a pre-made design. When using flexbox to space elements, I've found in the pasts two projects, that it is much easier to anchor my elements to one specific location - for example, flexbox-end, start, or center. When spacing elements using space-around, space-between, and space-evenly, minor adjustments to one element's margin or padding have ripple effects that apply across ALL of the remaining elements, as the spacing is calculated for all of them based on the space available. In that way, it seems like a better idea to anchor to one end of the flexbox, and space one item at a time to match the given design pattern, so that a minor modification to one single element ONLY EFFECTS SUBSEQUENT ELEMENTS and not the ENTIRE list of elements. 


### Continued development

Future goals for learning and developement are fairly straightforward.
 - Continue practicing with Sass. When styling the ratingModal and the thankModal, I found that, despite ratingModal not importing Thanked.scss, making any changes to similarly named classes in a different component that isn't being rendered STILL rippled down through to project to modify the Rating Component, resulting in my renaming of my class system in the Thanked component from .ratingModal to .thankModal (among others, including .thankHeader, etc.). It seems like there should be a way for the .scss you're righting for a specific component to ONLY affect the component that uses it, while still sharing class names with a different component.
 - Practice using grid layout. I'm becoming fairly comfortable (as comfortable as I can be) with using Flexbox to positioning elements, but still feel woefully inadequate what using exclusively grid for placement and spacing.
 - I would like to start implementing Typescript into my projects. I feel comfortable enough with base-level React, from functional Components to class-based Components, that adding strict typing would make my data safer (or whatever it is that Typescript is supposed to do for me).

### Useful resources

- [devDocs.io](https://devdocs.io/) - Developer documentation for nearly everything I'm using, listed in one place and stored locally, so I don't have to google around to find the specific documentation relevant to whatever function I want to use (ex: does line-height use pixels or scale?)
- [Pixlr](https://pixlr.com/) - Photoshop in a browser. Useful for checking specific sizes of elements, getting exact color palettes, etc.
- [Pixlr](https://pixlr.com/) - Photoshop in a browser. Useful for checking specific sizes of elements, getting exact color palettes, etc.
- [How to keep your Footer where it belongs?](https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/) - A short FreeCodeCamp article about how to place a footer so that it goes where it's supposed to without ruining the rest of the document. While helpful, I still haven't quite resolved the `#content-wrap {padding-bottom: 1rem;} #footer Height` issue, in which including this line creates an additional bit of padding on the bottom the page which creates a vertical scroll bar in some environments, despite space being available for the footer. Still, quite helpful for understanding how to get better Footer placement.

## Author

- Website - [Diana Roemer](https://github.com/dianaroemer)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/dominicroemer)