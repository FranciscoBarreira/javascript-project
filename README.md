

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
   - [Navigation Menu](#navigation-menu)
   - [Page Image](#page-image) 
   - [Statement Section](#statement-section)
   - [Selling Points Section](#selling-points-section)
   - [Footer](#footer)  
   - [How To Play Page](#how-to-play-page)
   - [Sign Up Page](#sign-up-page)

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
- All useful information about the game should be on display
- Signup should be accessible from any page
- The website's visuals should be enticing 
- It should be easy to understand what the game is
- External links should be opened in a different window 
- The website should adapt to different screen sizes on different devices


### User Stories
 <a name="user-stories"></a>

- I want the website to visually transmit the idea of the game 
- I want the text to be clean legible
- I want to know the main features of the game
- I want a way to start playing the game immediately

## Design
 <a name="design"></a>

 ------

### Images 
<a name="images"></a>


All the images resemble the the first person shooter genre, while respecting the colour scheme of the website. They were taken from unsplash.com

### Colour Scheme 
<a name="colour-scheme"></a>

Apart from background images, the main colours used were chocolate rgb(210,105,30), white rgb(255,255,255) and grey rgb(102,101,101). The chocolate was mostly used as a background color to contrast the white text and the background images. Grey was used with opacity in the text overlays present in all of the pages. White was used for plain text. 

### Fonts 
<a name="fonts"></a>

Tittillium Web is used for the headings due to its visual appeal. The rest of the text is in Lato, a font that improves readability.


## Features  
<a name="features"></a>
------

### Logo
<a name="logo"></a>
  
The top of the page includes the logo for The Arena that is present in all of the pages. This is meant to work as a constant reminder of the name of the game for those who are yet unfamiliar with it.

![logo image](/assets/images/logo.png "logo")


### Navigation Menu 
<a name="navigation-menu"></a>

The navigation menu consists of links to all of the website's pages (home, how to play and sign up). It is a feature in every single one of them, to make navigation easy and intuitive, thus promoting a good user experience.

![navigation bar image](/assets/images/navbar.png "navbar")


### Page Image
<a name="page-image"></a>

This image takes center stage in all the pages to entice potential players, while making the website maintain a clean look. It speaks of the type of game The Arena is, and contains the motto for the game, "100 players walk in. Only one walks out." There's also a call to action in the form of a pre-order message that links to the sign up page.

![arena image](/assets/images/headstatement.png "arena image")

### Statement Section
<a name="statement-section"></a>

This section is a short one. It contains text that supports the image above, briefly explaining what the genre of the game is. It also immediately states that the gameplay in The Arena differs form other battle royale games, as a way to grab the attention of potential players.

![arena statement](/assets/images/statement.png "arena statement")


### Selling Points Section
<a name="selling-points-section"></a>

The selling points section contains more detailed information about the main features of The Arena. It is comprised of short blocks of text spread out across the page. The main objective is to give potential players a better picture of what the game is. 

The section contains four blocks of text, two of which float left, with the remaining two floating right. This styling option makes for a cleaner section, in which there is never too much information clustered in one place. 

![selling points section top](/assets/images/sellingpointsone.png "selling points")
![selling points section bottom](/assets/images/sellingpointstwo.png "selling points bottom")

### Footer
<a name="footer"></a>

This is where users can find all the social media links, as well as The Arena's official Twitch channel and email. The six icons appear in one row in white to a chocolate colour background, and become opaque when the user hovers over them. Finally, there are aria labels in all of the links for screen readers. 

All the icons were taken from "Font Awesome".

![footer section](/assets/images/footer.png "footer")

### How to Play page
<a name="how-to-play-page"></a>

For players who are not very familiar with the Battle Royale genre, the how to play page provides a list of five steps to make sense of how the game works. Stylewise, it retains the colour scheme and some of the styling of the home page.

![how to play top](/assets/images/instructionsone.png "how to play")
![how to play bottom](/assets/images/instructionstwo.png "how to play bottom")


### Sign Up Page
<a name="sign-up-page"></a>

For potential players who want to play the game, or just receive updates about it via email. Apart from all the usual fields such as username and password, there is also a dropdown list that gives users three options to sign up. 

![sign up page](/assets/images/signup.png "sign up")

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
