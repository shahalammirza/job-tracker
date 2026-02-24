1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById select one element and uses id also return single element.
        getElementsByClassName select elements by class name and return html collection.
        querySelector select first matching element uses css selector and return a single element.
        querySelectorAll select all matching elements and return nodeList.

2. How do you create and insert a new element into the DOM?

Answer: 
        create element: const div = document.createElement('div');
        insert element: document.body.appendChild(div);

3. What is Event Bubbling? And how does it work?

Answer: Event Bubbling is a process where an event starts from the target element and then bubbles up to its parent elements.

its works when you click a child element then it moves to the parent then the higher ancestors until it reach the document.

4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event Delegation is a technique where you attach a single event listener to a parent element instead of adding listeners to multiple child elements.

It is useful because improves performance, works for dynamically added elements, easier to manage

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:  
        preventDefault() stop the default browser behavior, doest not stop event bubbling.
        stopPropagation() stop the event bubbling up. doest not stop default browser behavior.
