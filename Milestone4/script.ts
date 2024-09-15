const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
event.preventDefault();

const Name = (document.getElementById('name') as HTMLInputElement).value
const email = (document.getElementById('email') as HTMLInputElement).value
const number = (document.getElementById('number') as HTMLInputElement).value
const education = (document.getElementById('Education') as HTMLInputElement).value
const exp = (document.getElementById('experience') as HTMLInputElement).value
const skills = (document.getElementById('skills') as HTMLInputElement).value

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

if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHtml;
}
else {
    console.error('Missing field.');
}
});