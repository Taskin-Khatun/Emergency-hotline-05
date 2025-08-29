1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans: getElementById(id) : Returns one element with the given unique ID.
getElementsByClassName(class) : Returns  HTMLCollection of all elements with that class.
querySelector(selector) : Returns the first element that matches a CSS selector.
querySelectorAll(selector) : Returns a static NodeList of all elements that match a CSS selector.


2. How do you **create and insert a new element into the DOM**?
Ans: Use document.createElement() to create a new element.
Set its text or attributes.
Insert it into the DOM using methods.


3. What is **Event Bubbling** and how does it work?
Ans: When an event happens on an element, it first runs on that element, then bubbles up to its parent, then grandparent, and so on until it reaches the document.


4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans: A technique where you add an event listener to a parent element instead of every child. The event then “bubbles up” from the child to the parent, and you handle it there.
It is useful for:
Fewer event listeners (better performance). and
Works for dynamically added elements.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans: preventDefault() : Stops the default browser action from happening.
stopPropagation() : Stops the event from bubbling (going to parent elements).


