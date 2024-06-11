# WAPH-Web Application Programming and Hacking
## Instructor: Dr. Phu Phung

# Individual Project 1
## Front-end Web Development with a Professional Profile Website on github.io cloud service

## Student

**Name**: Emily Turcotte

**Email**: turcotea@mail.uc.edu  

![Emily's Headshot](assets/images/headshotEECE4005.jpg)

\pagebreak

## Overview and Requirements 

Site URL: [https://eturcotte270.github.io/](https://eturcotte270.github.io/)

In this project, you will expand front-end web development skills by developing a Professional Profile Website and deploying it on `github.io` cloud service. This project has general, non-technical, and technical requirements with grade distributions as follows.

Outcomes I learned:
+ Deploying a page on GitHub cloud
+ Linking to other HTML pages
+ Using a Bootstrap template
+ Using JavaScript jQuery and React
+ Integrating APIs both that update and use graphics
+ Using Cookies

### General requirements (30 pts): 

+ Create and deploy a personal website on GitHub cloud (github.io) as a professional profile with your resume, including your name, headshot, contact information, background, e.g., education, your experiences and skills.

I completed this task by my main page being my profile and then a link to a page that contains Individual Project 1 as I intended to use this long term. The below screenshot shows my main page:  

![Professional Profile](assets/images/Homepage-Portfolio.jpg)

\pagebreak

+ Create a link to a new HTML page to introduce this "Web Application Programming and Hacking" course and related hands-on projects

I completed this task by creating a button to link to waph.html, and I used the following code:
```HTML
<a href="waph.html" class="ds-button">Information</a>
```

![Link to waph.html](assets/images/LinkToWaph.jpg)

![waph.html page](assets/images/waph-html.jpg)

\pagebreak

### Non-technical requirements  

+ Use an open-source CSS template or framework such as Bootstrap  
[https://www.designstub.com/product/defolio-bootstrap-5-html-resume-template/](https://www.designstub.com/product/defolio-bootstrap-5-html-resume-template/)

I used the template above and added my code in index.html, works-details.html, and waph.html.

+ Include a page tracker,
[https://flagcounter.com/](https://flagcounter.com/).

To include the page tracker for location of visitors I added the following code:
```HTML
<a href="http://s11.flagcounter.com/more/g9y"><img src="https://s11.flagcounter.com/count2/g9y/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_4/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" border="0"></a>
```

![Page Tracker - Visitor Location](assets/images/PageTracker.jpg)

\pagebreak

### Technical requirements   

#### Basic JavaScript code   

Use jQuery and one more open-source JavaScript framework/library to implement JavaScript code introduced in Lab 2, including a digital clock, an analog clock, show/hide your email, and one more functionality of your choice.  

To add jQuery I added the following code:  
```HTML
<script src="https://code.jquery.com/jquery-3.7.1.min.js" 
  	integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" 
    crossorigin="anonymous"></script>
```

To add React I added the following code:  
```HTML
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
```

##### Show/hide email  

To show/hide my email I added the following HTML and JavaScript code:  
```HTML
<div id="email" onclick="showhideEmail()">Show my email</div>
```

```JavaScript
    var shown = false;
   	function showhideEmail(){
        if (shown){
            document.getElementById('email').innerHTML = "Show my email";
            shown = false;
        } else {
          	var myemail = "<a href='mailto:turcotea" + "@" + "mail.uc.edu'>turcotea" + "@" + "mail.uc.edu</a>";
            document.getElementById('email').innerHTML = myemail;
        	shown = true;
        }
  	}
```

![Show/Hide Email](assets/images/ShowEmail.jpg)

\pagebreak

##### Digital Clock

To add a digital clock I added the following HTML and JavaScript code:  
```HTML
<div id="digit-clock"></div>
```

```JavaScript
    var shown = false;
	function displayTime() {
        document.getElementById('digit-clock').innerHTML = encodeInput("Current time: " + new Date());
   	}

    setInterval(displayTime, 500);

    function encodeInput (input) {
        const encoded = document.createElement('div');
        encoded.innerText = input;
        return encoded.innerHTML;
    }

```

![Digital Clock](assets/images/DigitalClock.jpg)

\pagebreak

##### Analog Clock  

To add an analog clock I added the following HTML and JavaScript code:  
```HTML
<div id="digit-clock"></div>
```

```JavaScript
    var canvas = document.getElementById("analog-clock");
    var ctx = canvas.getContext("2d");
    var radius = canvas.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.90;
    setInterval(drawClock, 1000);

    function drawClock() {
        drawFace(ctx, radius);
        drawNumbers(ctx, radius);
        drawTime(ctx, radius);
    }

```

![Analog Clock](assets/images/AnalogClock.jpg)

\pagebreak

##### Like Button using React

To add the like button using React I added the following HTML and JavaScript code:  
```HTML
<div id="like_button_container"></div>
<script src="assets/js/like_button.js"></script>
```

```JavaScript
'use strict'; 
const e = React.createElement; 
class myButton extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { isliked: false }; 
  } 
 
  render() { 
    if (this.state.isliked) { 
      return 'I like this page!!!'; 
    } 
 
    return e( 
      'button', 
      { onClick: () => this.setState({ isliked: true }) }, 
      'Like Button' 
    ); 
  } 
} 
const domContainer = document.querySelector('#like_button_container'); 
ReactDOM.render(e(myButton), domContainer);
```

![Like Button Result](assets/images/LikeButton.jpg)

\pagebreak

#### Two public Web APIs integration  

##### Joke API
1. Integrate the jokeAPI ([https://v2.jokeapi.dev/joke/Any](https://v2.jokeapi.dev/joke/Any)) with `Any` category of joke to display a new joke in your page every 1 minute.  

To add the jokeAPI and have it update every minute I added teh following HTML and JavaScript code:  
```HTML
<div id="joke-response"></div>
```

```JavaScript
function apiCall() {
    var baseURL = "https://v2.jokeapi.dev/joke/Any";


    var xhr = new XMLHttpRequest();
    xhr.open("GET", baseURL);

    xhr.onreadystatechange = function() {
	    if(xhr.readyState == 4 && xhr.status < 300)
	    {
	      	var randomJoke = JSON.parse(xhr.responseText);

	        if(randomJoke.type == "single")
	        {
	            $("#joke-response").html("A programming joke of the day: " + randomJoke.joke);
	        }
	        else
	        {
	            $("#joke-response").html("A programming joke of the day: " + randomJoke.setup + " " + randomJoke.delivery);
	        }
	    }
	    else if(xhr.readyState == 4)
	    {
	        $("#joke-response").html("Error while requesting joke.\n\nStatus code: " + xhr.status + "\nServer response: " + xhr.responseText);
	    }
    };

    xhr.send();
}

apiCall();
setInterval(apiCall, 60000);
```

![JokeAPI updates every minute](assets/images/JokeApi.jpg)

\pagebreak

##### Dog API
2. Integrate a public API with graphics and display that graphic/image in your page.  
[https://dog.ceo/api/breeds/image/random](https://dog.ceo/api/breeds/image/random)  

To add the graphical API that displays images of dogs I added the following HTML and JavaScript Code:  
```HTML
<div id="dog-response"></div>
```

```JavaScript
$.get("https://dog.ceo/api/breeds/image/random",
    function(result) {
        if (result.length == 0) return;
        const imageElement = document.createElement("img");
        imageElement.src = result.message;
       	const container = document.getElementById("dog-response");
        container.appendChild(imageElement);
})
```

![Graphical API - Dogs](assets/images/DogApi.jpg)

\pagebreak

#### JavaScript Cookies
Use JavaScript cookies to remember the client: If first-time visit, display the message "Welcome to my homepage for the first time!"; otherwise, display the message "Welcome back! Your last visit was <the date/time of last visit>".  

To add the display message using JavaScript Cookies I added the following HTML and JavaScript code:  
```HTML
<div id="cookies-response"></div>
```

```JavaScript
if (document.cookie.indexOf("visit") <0 ){
    $("#cookies-response").html("Welcome to my homepage!");
    document.cookie = "visit=" + new Date();
} else {
    $("#cookies-response").html("Welcome back! Your last visit was " + document.cookie.substring(6, ));
    document.cookie = "visit=" + new Date();
}
```

![First Visit](assets/images/CookieDefault.jpg)

![Return Visit](assets/images/CookiesRevisit.jpg)


