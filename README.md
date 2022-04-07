# Scroley
A lightweight dependency free scrolling carousel. 

**DEMO:** https://ohcolar.github.io/scroley/

## What is Scroley?
Scroley is a pure CSS scroller used to display any number of cards in a row with the option to enable horizontal scroll controls on either desktop or mobile... or both! Using checkbox interaction Scroley lets your users click through previous and next items within the row.

All HTML elements are wrapped within the `.scroley-contain` class and are required to be setup using the structure and DOM order as explained below.

## SASS variables
Scroley uses sass variables to configure the layout. These variables also have custom mobile sizes for you to fine tune the mobile experience.  You need to set the **number of items** at the top as this configures your sass loops.

```scss
// Variables
$numberOfItems: 5;
$itemWidth: 460px;
$itemHeight: 300px;
$itemMargin: 24px;
$itemTotal: $itemWidth + $itemMargin;

// Mobile sizes
$itemWidthMob: 260px;
$itemHeightMob: 300px;
$itemMarginMob: 24px;
$itemTotalMob: $itemWidthMob + $itemMarginMob;
```

## HTML Layout
There are three areas we need to explain **input pairs**, **controls**, and **scroley items**. In short, the **controls** check the **inputs** and the **inputs** determine what **item** is scrolled to.


### Inputs
The inputs all should have the `hidden` attribute on them as we don't want the user seeing these. Each input pair relates to a scroll item, one for previous and one for next interactions, example below:

```html
<!-- Item #1 - input pairs -->
<input class="scroley-btn" hidden disabled type="radio" name="controls" id="prev-1" checked />
<input class="scroley-btn" hidden  type="radio" name="controls" id="next-1" />

<!-- Item #2 - input pairs -->
<input class="scroley-btn" hidden  type="radio" name="controls" id="prev-2" />
<input class="scroley-btn" hidden  type="radio" name="controls" id="next-2" />
```

The first input needs the attribute `checked` to tell the scroller to start here. Other than that the input pairs can be copied and pasted for the number of items you have - just keep in mind that the `ids` will need to increment.

### Controls
In a similar method to the input pairs your controls will need to be created on set per scroll item. The `.scroley-controls` container holds two `labels` both with a `for` attribute that links up with the input pairs from the step above. An example can be seen here:

```html
<!-- Item #1 - controls -->
<div class="scroley-controls scroley-controls-1">
    <label for="prev-1">&lsaquo;</label>
    <label for="next-1">&rsaquo;</label>
</div>

<!-- Item #2 - controls -->
<div class="scroley-controls scroley-controls-2">
    <label for="prev-2">&lsaquo;</label>
    <label for="next-2">&rsaquo;</label>
</div>
```

### The scroller and items
Below is the mark up to display your scroller and items. You can put any HTML inside a `.scroley-item` as the content will be bound to the Scroley variables defined as CSS. I'll explain the configuration later on.

```html
<div class="scroley">
    <div class="scroley-item">1</div>
    <div class="scroley-item">2</div>
    <div class="scroley-item">3</div>
    <div class="scroley-item">4</div>
    <div class="scroley-item">5</div>
</div>
```

### Mobile only Scroley
Simply add the class `.scroley-mob` to the `.scroley-container` and your scroller will only kick in on smaller screens (less than 1024px)

### Mobile Swipe enabled
Simply add the class `.scroley-swipe` to the `.scroley-container` and your scroller will enable touch swipe controls on smaller screens (less than 1024px)



## HTML example
```html
<!-- Scroley container -->
<div class="scroley-contain">

    <!-- Item #1 - input pairs -->
    <input class="scroley-btn" hidden type="radio" name="controls" id="prev-1" checked />
    <input class="scroley-btn" hidden  type="radio" name="controls" id="next-1" />

    <!-- Item #2 - input pairs -->
    <input class="scroley-btn" hidden  type="radio" name="controls" id="prev-2" />
    <input class="scroley-btn" hidden  type="radio" name="controls" id="next-2" />

    <!-- Item #3 - input pairs -->
    <input class="scroley-btn" hidden  type="radio" name="controls" id="prev-3" />
    <input class="scroley-btn" hidden  type="radio" name="controls" id="next-3" />

    <!-- Item #1 - controls -->
    <div class="scroley-controls scroley-controls-1">
        <label for="prev-1">&lsaquo;</label>
        <label for="next-1">&rsaquo;</label>
    </div>

    <!-- Item #2 - controls -->
    <div class="scroley-controls scroley-controls-2">
        <label for="prev-2">&lsaquo;</label>
        <label for="next-2">&rsaquo;</label>
    </div>

    <!-- Item #3 - controls -->
    <div class="scroley-controls scroley-controls-3">
         <label for="prev-3">&lsaquo;</label>
        <label for="next-3">&rsaquo;</label>
    </div>


    <!-- The front end scroller with scroll items -->
    <div class="scroley">
        <div class="scroley-item">1</div>
        <div class="scroley-item">2</div>
        <div class="scroley-item">3</div>
    </div>
</div>
```
