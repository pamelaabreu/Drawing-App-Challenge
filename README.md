# [**Drawing App Challenge**]

| | Table of Contents 🗂|
|:-:|:--:|
|1|**[Usage and Installation](#usage-and-installation)**|
|2|**[Q&A](#Q&A)**|
|3|**[Additional Notes](#additional-notes-)**|


#### Usage and Installation 📄
1. `npm install`

6. `npm start`

#### Q&A 💬
**1. What aspect of your submission are you most proud of, and why?**
Getting the Stamp panel functionality to work because it was the hardest and most time-consuming component to build. The first challenge was getting the image file to show on the page from the file input. I learned about the Image constructor and how it creates a new HTMLImageElement instance. 

The second challenge was drawing the image on the Canvas component in a different way from how the Pen and Eraser tool worked. At first the image constantly rendered through the onMouseDown and onMouseMove event listener. I had to create an onClick event listener that targeted the stamp tool. Afterwards I had to use the Canvas drawImage function to draw the image once and invoke the end function to stop the drawing.


**2. What would you work on if you had more time?**
Writing more tests that cover the file upload input and drawing on the Canvas component.


**3. Of all the resources (blog posts, tutorials, videos, mentors etc.) you referenced, what was most helpful for you?**
Googling the right question. This method led me to finding vey similar questions on Stack Overflow. This process helped a lot as I got more context to what I was trying to do.  As I learned new terms and keywords, I used MDN Web docs to find definitions for specific code methods.  Googling the question also helped find Medium articles that built very similar things to what I was trying to accomplish.

#### Additional Notes
Something that was challenging while building this app was how I should write my code. I was unsure if I should write one-liner ternary operators that was inline on the JSX versus calling a variable.