

## The Movie Quiz

------

This project is a fully functioning movie quiz, where users can test their knowledge about the seventh art. The website contains the quiz as well as a "Your Goals" section that sets a target for the number of questions answered right. Once the quiz is over, a container is displayed giving information about how the user did.  


The link to the deployed website can be found [here.](https://franciscobarreira.github.io/javascript-project/)

The link to the Github repository can be found [here.](https://github.com/FranciscoBarreira/javascript-project/)


![mockup site generator image](/assets/images/mockup-quiz.png "mockup preview")

## Table of Contents 

[User Experience](#user-experience)

   - [User Requirements](#user-requirements)
   - [User Stories](#user-stories)

[Design](#design)   

   - [Images](#images)
   - [Colour Scheme](#colour-scheme)
   - [Fonts](#fonts)

[Technologies Used](#technologies-used) 

[Features](#features)   

   - [Logo](#logo)
   - [Page Image](#page-image) 
   - [Quiz Section](#quiz-section)
   - [End Results Section](#ending-results-section)
   - [Footer](#footer)  


[Testing](#testing)   

   - [General Testing](#general-testing)
   - [Validator Testing](#validator-testing)
   - [Responsiveness Testing](#responsiveness-testing)

[Site Deployment](#site-deployment) 

[Credits](#credits)   

   - [Media](#media)
   - [Content](#content) 
  


## User Experience 
<a name="user-experience"></a>

------


### User Requirements 
<a name="user-requirements"></a>

- The website should be easy to navigate
- Restarting the Quiz should be intuitive
- The right answer should turn green or red depending on whether it is right or wrong
- The website's visuals should be centered around cinema
- The number of right answers should be shown at the end
- The website should adapt to different screen sizes on different devices


### User Stories
 <a name="user-stories"></a>

- I want the website to visually transmit the art of cinema 
- I want the text to be clean and legible
- I want to know how well i did in the quiz
- I want a way to restart the quiz in case I feel I can do better

## Design
 <a name="design"></a>

 ------

### Images 
<a name="images"></a>


The dark image that serves as a background for all the pages, including the quiz, was taken from unsplash.com and is meant to contrast with the gold, creating a color palette that is usually associated with the movie industry.

### Colour Scheme 
<a name="colour-scheme"></a>

Apart from background images, the main colours used were goldenrod rgb(218,165,32), white rgb(255,255,255), green rgb(0,128,0) and red rgb(255,0,0). Red and green were used for right or wrong answers. For the containers and backgrounds of both the heading and footer, goldenrod was the colour chosen. White was used as a background color for the answer buttons, and for the text in the rest of the buttons as well as the logo.  

### Fonts 
<a name="fonts"></a>

Tittillium Web is used for the headings due to its visual appeal. The rest of the text is in Lato, a font that improves readability.

## Technoligies Used
<a name="technologies-used"></a>

------

This site was deployed to GitHub pages. The steps to deploy it were:

-HTML for structural design of the website

-CSS for styling the pages 

-JavaScript for adding functionality to the quiz 

-GitHub for software hosting

-GitPod for development hosting


## Features  
<a name="features"></a>
------

### Logo
<a name="logo"></a>
  
At the top of the page lies the heading containing the Test Your Movie Knowledge logo. It is a constant in every page and serves the purpose of maintaining visual consistency.

![logo image](/assets/images/home-quiz.png "logo")



### Page Image
<a name="page-image"></a>

As shown in the image above, the home page contains two small containers, "Your Goals" and "Start Quiz". The first contains the information on how many right answers it would take to reach a certain tier. Users can choose to skip that information and just start the quiz right away, instead. 



### Quiz Section
<a name="quiz-section"></a>

This is the main page of the website. It is where users will take part in the quiz. It consists of a quiz container, that holds both the questions and the answers, and a home button underneath so that the home page is always within reach. On the bottom of the quiz container, there is a counter so users can know how many right answers they have so far. When a user clicks the right answer, it turns green, otherwise, it turns red. At that point, a next button (which is hidden by default), shows up. By clicking it, the next question will appear, the right answers counter will update, and the colors(red or green) will disappear.   

![quiz](/assets/images/quiz.png "quiz")


### End Results Section
<a name="end-results-section"></a>

After clicking the next button on the final question, the whole quiz container will be hidden, and the final results container will be displayed. It contains the final number of right answers out of 15, and it reminds the user of how many it was required to be in each tier. Finally, there is a home and a start the quiz button. 

![final results](/assets/images/end.png "final results")


### Footer
<a name="footer"></a>

This is where users can find all the social media links. The background color is goldenrod to maintain visual consistency. There are aria labels in all of the links for screen readers. 

All the icons were taken from "Font Awesome".

![footer section](/assets/images/footer-quiz.png "footer")


## Testing
<a name="testing"></a>

------

### General Testing
<a name="general-testing"></a>

Lighthouse was used to test Performance, Accessibility, Best Practices and SEO. The results were the following:

![lighthouse test](/assets/images/lighthouse-test.png "lighthouse test")

The colors and fonts are very easy to read all across the website.

### Validator Testing
<a name="validator-testing"></a>

HTML- No errors were shown when put through the [HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Ffranciscobarreira.github.io%2Fjavascript-project%2F)

CSS- No errors were shown when put through the [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ffranciscobarreira.github.io%2Fjavascript-project%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=pt-BR)

JavaScript - No errors were shown when put through JShint validator, as shown in the image below.

![jshint test](/assets/images/jshint.png "jshint test")

### Responsiveness Testing
<a name="responsiveness-testing"></a>

The website responsiveness was tested using Chrome Dev Tools and was physically tested on a Samsung S20. It generally responded well to the different devices, however, there was a need to implement some changes, such as:

-Reducing the Logo font size to keep it from overflowing into the body of the page

-restructuring the quiz answers to keep them from overflowing the container

-repositioning the home and next button as they were negatively affecting each other's position in smaller screens  

-making width and margin related adjustments to the scorecard page to prevent it from deforming

-making width and margin related adjustments to the hidden div in the quiz page to prevent it from deforming


## Site Deployment
<a name="site-deployment"></a>

------

This site was deployed to GitHub pages. The steps to deploy it were:

-In the GitHub repository, click on on settings 

-Scroll down to Github pages

-From the source section drop-down menu, select Main 

-After all these steps are followed successfully the page will refresh and provide a link to the deployed website.



## Credits
<a name="credits"></a>

------

### Media
<a name="media"></a>

The background image used in the website was taken directly from Unsplash.com.

All the icons were taken from "Font Awesome".

### Content
 <a name="content"></a>

For this project, the following sources of information were used:

-Stackoverflow and w3schools for various code related doubts

-The idea for the increment score functions was initially taken from the Love Math walkthrough project.
