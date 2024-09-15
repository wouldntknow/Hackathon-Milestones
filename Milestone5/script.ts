const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

form.addEventListener('submit', (event: Event) => {
event.preventDefault(); //prevents page reloading

const username = (document.getElementById('username') as HTMLInputElement).value
const Name = (document.getElementById('name') as HTMLInputElement).value
const email = (document.getElementById('email') as HTMLInputElement).value
const number = (document.getElementById('number') as HTMLInputElement).value
const education = (document.getElementById('Education') as HTMLInputElement).value
const exp = (document.getElementById('experience') as HTMLInputElement).value
const skills = (document.getElementById('skills') as HTMLInputElement).value

const resumeData = {
    Name,
    email,
    number,
    education,
    exp,
    skills,
};

localStorage.setItem(username, JSON.stringify(resumeData)); // data locally saved

const resumeHtml =  
`<h2><b>Editable Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b><span contenteditable="true">${Name}</span></p>
<p><b>email:</b><span contenteditable="true">${email}</span></p>
<p><b>number:</b><span contenteditable="true">${number}</span></p>

<h3>Education</h3>
<p contenteditable="true">${education}</p>

<h3>Experience</h3>
<p contenteditable="true">${exp}</p>

<h3>Skills</h3>
<p contenteditable="true">${skills}</p>
`;
// display generarted resunme


    resumeDisplayElement.innerHTML = resumeHtml;
 const shareableUrl = `
 ${window.location.origin}?username=${encodeURIComponent(username)}`;
 
 //display the shareable link

 shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableUrl;
shareableLinkElement.textContent = shareableUrl;
});

//handle pdf 

downloadPdfButton.addEventListener('click', () => {
    window.print(); // This will open the print dialog and allow the user to save as PDF
    });

    // Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if (username) {

        // Autofill form if data is found in localStorage
        const savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
        const resumeData = JSON.parse(savedResumeData);
        (document.getElementById('username') as HTMLInputElement).value = username;
        (document.getElementById('Name') as HTMLInputElement).value = resumeData.name;
        (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
        (document.getElementById('number') as HTMLInputElement).value = resumeData.phone;
        (document.getElementById('Education') as HTMLTextAreaElement).value = resumeData.education;
        (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
        (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills;
        }
        }
        });