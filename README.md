

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

Apart from background images, the main colours used were goldenrod rgb(218,165,32), white rgb(255,255,255), green rgb(0,128,0) and red rgb(255,0,0). Red and green were used for right or wrong answers, while white was used for the text. For the containers and backgrounds of both the heading and footer, goldenrod was the colour chosen. 

### Fonts 
<a name="fonts"></a>

Tittillium Web is used for the headings due to its visual appeal. The rest of the text is in Lato, a font that improves readability.


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

This is the main page of the website. It is where users will take part in the quiz. It consists of a quiz container, that holds both the questions and the answers, and a home button underneath so that the home page is always within reach. On the bottom, there is a counter so users can know how many right answers they have so far. When a user clicks the right answer, it turns green, otherwise, it turns red. At that point, a next button (which is hidden by default), shows up. By clicking it, the next question will appear, the right answers counter will update, and the colors(red or green) will disappear.   

![quiz](/assets/images/quiz.png "quiz")


### End Results Section
<a name="end-results-section"></a>

After clicking the next button on the final question, the whole quiz container will be hidden, and the final results container will be dispolayed. It contains the final number of right answers out of 30, and it reminds the user of how many it was required to be in each tier. Finally, there is a home and a start the quiz button. 

![final results](/assets/images/end.png "final results")


### Footer
<a name="footer"></a>

This is where users can find all the social media links. The background color is Ggoldenrod to maintain visual consistency. There are aria labels in all of the links for screen readers. 

All the icons were taken from "Font Awesome".

![footer section](/assets/images/footer-quiz.png "footer")


## Testing
<a name="testing"></a>

------

### General Testing
<a name="general-testing"></a>

Lighthouse was used to test Performance, Accessibility, Best Practices and SEO. The results were the following:

![lighthouse test](/assets/images/lighthouse.png "lighthouse test")

The colors and fonts are very easy to read all across the website.

### Validator Testing
<a name="validator-testing"></a>

HTML- No errors were shown when put through the [HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Ffranciscobarreira.github.io%2FHTML-CSS-Project%2Findex.html)

CSS- No errors were shown when put through the [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ffranciscobarreira.github.io%2FHTML-CSS-Project%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

### Responsiveness Testing
<a name="responsiveness-testing"></a>

The website responsiveness was tested using Chrome Dev Tools and was physically tested on a Samsung S20. It generally responded well to the different devices, however, there was a need to implement some changes, such as:

-Reducing the Logo font size to keep it from overflowing into the navigation bar

-Increasing the Statement Height to keep text from spilling over

-Decreasing the width of the form to fot smaller devices

-In the selling points section of the website, there are four blocks of text, with two of them floating left and the other two floating right. In smaller screens, they form a column instead, with the four of them appearing below one another. 




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

All the images used in the website were taken directly from Unsplash.com, including the one that is used as a background in the logo.

All the icons were taken from "Font Awesome".

### Content
 <a name="content"></a>

For this project, the following sources of information were used:

-Stackoverflow for how to create an HTML button that acts like a link

-The idea for the text overlay used in both the home and how to play pages was taken from the Love Running walkthrough project.
