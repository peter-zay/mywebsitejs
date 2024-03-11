i want to achieve this with js not html: 


    Peter Zay
    About Me
    Projects
    Contact


👋About Me


    Peter, Construction Project Manager & BCIT Grad. Passionate about construction, coding, & learning new
        technologies. Building software solutions to enhance project management, communication, & collaboration.
        Always seeking new challenges & growth opportunities!



🏗Projects


    
        Please select a project
        2004 One Harbour Green Vancouver, BC
        2005 Two Harbour Green Vancouver, BC
        2005 Tribeca Lofts Yaletown Vancouver, BC
        2007 Northern Rockies Recreation Centre Fort Nelson, BC
        
        2007 Axton Industrial Custom Fabrications Shop Delta, BC
        2008 Hotel Georgia and Residential Tower Vancouver, BC
        2012 YVR Domestic Terminal Airport Operations Center Richmond, BC
        2013 Golder Associates Office TI at Broadway Tech Center Burnaby, BC
        
        2014 Christian Dior Boutique at Hotel Vancouver, Vancouver, BC
        2015 Western Forest Products Office TI Vancouver, BC
        2015 WorkSafeBC Office TI Port Moody, BC
        2017 The Windsor on Elbow Drive Calgary, AB
        2017 National Block on 17th Ave Calgary, AB
        2019 Steps Bridgeland Calgary, AB
        2021 Plaza Apartments Calgary, AB
        2023 Attainable Homes Downtown West End Calgary, AB
    


🛠Construction and 💻 Dev Skills


    
        
        
        
        
        
        
    



// Create meta elements
const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'utf-8');

const metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1');

const metaDescription = document.createElement('meta');
metaDescription.setAttribute('name', 'description');
metaDescription.setAttribute('content', "Peter Zay's Personal Portfolio Page");

const metaKeywords = document.createElement('meta');
metaKeywords.setAttribute('name', 'keywords');
metaKeywords.setAttribute('content', 'Peter Zay, project_management, web design, construction management software');

const metaAuthor = document.createElement('meta');
metaAuthor.setAttribute('name', 'author');
metaAuthor.setAttribute('content', 'Peter Zay');

// Create link element for stylesheet
const linkStylesheet = document.createElement('link');
linkStylesheet.setAttribute('rel', 'stylesheet');
linkStylesheet.setAttribute('href', './style.css');

// Create title element
const title = document.createElement('title');
title.textContent = "Peter Zay's Website";

// Append meta elements, link element, and title element to the head
document.head.append(metaCharset, metaViewport, metaDescription, metaKeywords, metaAuthor, linkStylesheet, title);

// Create body element and set class attribute
const body = document.createElement('body');
body.setAttribute('class', 'index-body');

// Create navbar elements
const navbar = document.createElement('div');
navbar.setAttribute('class', 'navbar');

const brand = document.createElement('div');
brand.textContent = 'Peter Zay';

const aboutMeLink = document.createElement('a');
aboutMeLink.setAttribute('href', '#about-me');
aboutMeLink.setAttribute('class', 'nav-link');
aboutMeLink.textContent = 'About Me';

const projectsLink = document.createElement('a');
projectsLink.setAttribute('href', './projects.html');
projectsLink.setAttribute('class', 'nav-link');
projectsLink.textContent = 'Projects';

const contactLink = document.createElement('a');
contactLink.setAttribute('href', './contact.html');
contactLink.setAttribute('class', 'nav-link');
contactLink.textContent = 'Contact';

// Append navbar elements to navbar
navbar.append(brand, aboutMeLink, projectsLink, contactLink);

// Create h2 element for About Me section
const aboutMeHeader = document.createElement('h2');
aboutMeHeader.innerHTML = '👋About Me';

// Create section for About Me content
const aboutMeSection = document.createElement('section');
aboutMeSection.setAttribute('class', 'about-me');
aboutMeSection.setAttribute('id', 'about-me');

const aboutMeParagraph = document.createElement('p');
aboutMeParagraph.textContent = "Peter, Construction Project Manager & BCIT Grad. Passionate about construction, coding, & learning new technologies. Building software solutions to enhance project management, communication, & collaboration. Always seeking new challenges & growth opportunities!";

// Append About Me content to section
aboutMeSection.appendChild(aboutMeParagraph);

// Create h2 element for Projects section
const projectsHeader = document.createElement('h2');
projectsHeader.innerHTML = '🏗Projects';

// Create section for Projects dropdown
const projectsSection = document.createElement('section');
projectsSection.setAttribute('class', 'project-list-items');
projectsSection.setAttribute('id', 'project-list-items');

const projectsDropdown = document.createElement('select');
projectsDropdown.setAttribute('id', 'projects-dropdown');

// Array of project options
const projectOptions = [
    { value: "", text: "Please select a project" },
    { value: "projects.html#one-harbour-green", text: "2004 One Harbour Green Vancouver, BC" },
    { value: "projects.html#two-harbour-green", text: "2005 Two Harbour Green Vancouver, BC" },
    // Add more project options here
];

// Create and append options to the dropdown
projectOptions.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    projectsDropdown.appendChild(optionElement);
});

// Append dropdown to section
projectsSection.appendChild(projectsDropdown);

// Create h2 element for Skills section
const skillsHeader = document.createElement('h2');
skillsHeader.innerHTML = '🛠Construction and 💻 Dev Skills';

// Create section for Skills content
const skillsSection = document.createElement('section');
skillsSection.setAttribute('class', 'skills');
skillsSection.setAttribute('id', 'skills');

// Create div for skills images
const skillsImagesDiv = document.createElement('div');

// Array of image sources
const imageSources = [
    "/home/peter/projects/my website/images/constructionSoftware/Procore_Logo_1C_Black_RGB.png",
    "/home/peter/projects/my website/images/constructionSoftware/Bluebeam-CorporateLogos-2022/RGB-ForDigital/PNG/BB-Logo-Horizontal-Black-1x.png",
    // Add more image sources here
];

// Create and append image elements to div
imageSources.forEach(src => {
    const imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.width = '20%'; // Adjust width as needed
    imgElement.height = '20%'; // Adjust height as needed
    // Add alt text based on image content
    if (src.includes('Procore')) {
        imgElement.alt = 'Procore';
    } else if (src.includes('Bluebeam')) {
        imgElement.alt = 'Bluebeam';
    } 
    // Add more alt text conditions here if needed

    skillsImagesDiv.appendChild(imgElement);
});

// Append skills images div to skills section
skillsSection.appendChild(skillsImagesDiv);

// Append all elements to the body
body.append(navbar, aboutMeHeader, aboutMeSection, projectsHeader, projectsSection, skillsHeader, skillsSection);

// Create footer element
const footer = document.createElement('footer');
footer.setAttribute('class', 'footer');

const footerText = document.createElement('p');
footerText.innerHTML = "made in Calgary by Peter Zay with ♥ in 2024";

footer.appendChild(footerText);

// Append footer to body
body.appendChild(footer);

// Link external JS file
const scriptElement = document.createElement('script');
scriptElement.src = 'script.js';

// Append body and script element to the document
document.body.appendChild(body);
document.body.appendChild(scriptElement);