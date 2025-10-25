Document object model is a actual skeleton of html file in tree like structure 

1) whenever a web page is loaded in the browser then first it create a tree like structure for all the tags and this tree structure
called DOM 
2) By reading this dom only the browser display the elements


DOM ek programming interface hai jo web pages ko objects ki form me represent karta hai, 
jisse hum JavaScript ke through HTML elements ko access aur manipulate kar sakte hain.

Socho aapke HTML page ke sare elements (like <div>, <p>, <button>) ek tree structure me arranged hai.

Ye tree ko DOM kehte hain.

JavaScript use karke aap is tree ke elements ko read, modify, delete ya naye elements add kar sakte ho.


 DOM Tree Structure Example
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello World</h1>
    <p>This is DOM example</p>
  </body>
</html>


DOM Tree:

Document
 └─ html
     └─ body
         ├─ h1 ("Hello World")
         └─ p  ("This is DOM example")










































🔹 Most Asked DOM Interview Questions

DOM kya hai? Explain with example.

Difference between HTML DOM vs Browser DOM?

document.getElementById() vs querySelector()?

DOM me node types kya hote hain?

How to create and remove elements dynamically?

Difference between innerHTML, innerText, textContent?

Event bubbling vs event capturing kya hota hai?

Difference between document vs window?

Difference between live collections and static collections? (getElementsByTagName vs querySelectorAll)

What is DOM traversal? Explain parentNode, childNodes, firstChild, lastChild.

How to change CSS dynamically using JS DOM?

What is DOM manipulation? Examples.

Difference between appendChild, insertBefore, replaceChild.

How to remove an element using JS DOM?

Explain DOM ready / window.onload / DOMContentLoaded.

What is shadow DOM?

Difference between getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll.

How to handle events in dynamically added elements?

What is DOM performance optimization?

Explain document.createElement() vs innerHTML.         