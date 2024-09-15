//getting refrence to the form and display area
var form = document.querySelector("#resume-form");
var displayArea = document.querySelector("#resume-display");
//Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // it prevent page to load
    // collect input values
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var contact = document.querySelector("#contact").value;
    var education = document.querySelector("#education").value;
    var skills = document.querySelector("#skills").value;
    var experience = document.querySelector("#experience").value;
    // generate the resume dynamically
    var resumeHTML = "\n    <h2><b>Editable and Dynamic Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\"> ".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\"> ").concat(email, "</span>}</p>\n    <p><b>Contact:</b><span contenteditable=\"true\"> ").concat(contact, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n      <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n\n       <h3>Experince</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n");
    if (displayArea) {
        displayArea.innerHTML = resumeHTML;
    }
});
