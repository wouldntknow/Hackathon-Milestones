var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var Name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var education = document.getElementById('Education').value;
    var exp = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHtml = "<h2><b>Dynamic Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b>".concat(Name, "</p>\n<p><b>email:</b>").concat(email, "</p>\n<p><b>number:</b>").concat(number, "</p>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience</h3>\n<p>").concat(exp, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n");
    // display generarted resunme
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error('Missing field.');
    }
});
