// Function to generate a clickable hyperlink based on user input
function generateLink() {
  // Retrieving user input and checkbox status that user has chosen
  const urlInput = document.getElementById('urlInput').value.trim();
  const textInput = document.getElementById('textInput').value.trim();
  const newTabCheck = document.getElementById('newTabCheck').checked;

  // URL validation pattern to ensure it starts with http:// or https://
  const urlPattern = /^(https?:\/\/).+$/; 

  // Alerting the user if the URL or link text fields are empty
  if (!urlInput || !textInput) {
    alert('Please fill in both the URL and the link text.');
    return;
  }
  
  // Alerting the user if the entered URL is invalid
  if (!urlPattern.test(urlInput)) {
    alert('Please enter a valid URL, including the "http://" or "https://" at the beginning.');
    return;
  }

  // Create the anchor tag for the website user has entered
  const linkElement = document.createElement('a');
  linkElement.href = urlInput;
  linkElement.textContent = textInput;

  // If the "Open in new tab?" checkbox is checked, set the target and rel attributes
  if (newTabCheck) {
    linkElement.target = "_blank";
    linkElement.rel = "noopener noreferrer";
  }

  // Clear the previous preview and display the new hyperlink
  const preview = document.getElementById('preview');
  preview.innerHTML = ''; 
  preview.appendChild(linkElement); 

  // Display the anchor tag on screen
  const htmlCode = document.getElementById('htmlCode');
  htmlCode.textContent = linkElement.outerHTML; // Display the HTML code
}

//Function to fetch and display a random fact about hyperlinks
function fetchFact() {
  // An array of facts about hyperlinks
  const hyperlinkFacts = [
      "Tim Berners-Lee, the inventor of the World Wide Web, also created the first hyperlink.",
      "The concept of hyperlinks predates the web, inspired by the idea of 'memex' proposed by Vannevar Bush in 1945.",
      "Hyperlinks can link to different types of resources, including web pages, images, documents, and email addresses.",
      "Links have different states, including: unvisited, visited, active, and hover.",
      "The first website ever created, which still exists, is located at <a href='http://info.cern.ch/hypertext/WWW/TheProject.html' target='_blank' rel='noopener noreferrer'>http://info.cern.ch/hypertext/WWW/TheProject.html</a>.",
      "Hyperlinks can be styled using CSS to improve usability and visual appeal.",
      "The introduction of hyperlinks led to the development of search engines, allowing users to find information through web connections.",
      "Hyperlinks are crucial for SEO (Search Engine Optimization), influencing a page's ranking in search engine results.",
      "The color blue, often used for hyperlinks, was one of the few colors that were legible on early computer screens.",
      "JavaScript can be used to dynamically create or modify hyperlinks based on user actions.",
      "Hyperlinks can have a target attribute, which specifies where to open the linked document.",
      "The rel='nofollow' attribute tells search engines not to follow a link, used often in user-generated content to prevent spam.",
      "Hyperlinks have played a significant role in social media, enabling the sharing of content across platforms.",
      "The term 'hyperlink' is often used synonymously with 'URL,' but a URL is technically the address a hyperlink points to.",
      "Email clients and word processors use hyperlinks to link to web pages or other documents."
  ];

  // Generate a random index to select a fact
  const randomIndex = Math.floor(Math.random() * hyperlinkFacts.length);
  // Retrieve the fact using the random index
  const fact = hyperlinkFacts[randomIndex];

  // Display the fact in the HTML element with id 'factDisplay'
  document.getElementById('factDisplay').innerHTML = fact; 
}

// Elements from the DOM are stored in variables for later use.
const catImageButton = document.getElementById('fetchCat');
const catImage = document.getElementById('catImage');
const loadingIndicator = document.getElementById('loadingIndicator'); // Ensure you have this element in HTML.

// Function to display an error message when something goes wrong.
function displayError(message) {

  catImage.textContent = ''; 
  const errorMessage = document.createTextNode(`Error: ${message}`);
  catImage.appendChild(errorMessage);
}

// Function to show a loading spinner while fetching the cat image
function showLoadingIndicator() {
  const loadingIndicator = document.getElementById('loadingIndicator');
  loadingIndicator.style.display = 'block';
  catImage.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; // Transaparent GIF is added to prevent spinner and generated image from showing up at the same time.
}


// Function to hide the loading spinner
function hideLoadingIndicator() {
  const loadingIndicator = document.getElementById('loadingIndicator');
  loadingIndicator.style.display = 'none';
}


// Function to fetch a new cat image from the API and display it.
function fetchAndDisplayCatImage() {
  showLoadingIndicator(); 
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => {
      if (!response.ok) {
        throw new Error('Bad Network Response, try again later');
      }
      return response.json();
    })
    .then(data => {
      hideLoadingIndicator(); 
      catImage.src = data[0].url; 
      catImage.alt = 'Random cat image'; 
      catImage.style.display = 'block'; 
    })
    .catch(error => {
      hideLoadingIndicator(); 
      displayError('Error fetching cat image, try again later.'); 
      console.error('Error:', error); 
    });
}

// Adding a click event listener to the button to fetch and display a new cat image
catImageButton.addEventListener('click', fetchAndDisplayCatImage);
