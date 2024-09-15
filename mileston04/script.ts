//getting refrence to the form and display area
const form = document.querySelector("#resume-form") as HTMLFormElement;
const displayArea = document.querySelector("#resume-display") as HTMLDivElement;

//Handle form submission
form.addEventListener("submit", (event: Event) => {
  event.preventDefault(); // it prevent page to load

  // collect input values
  const name = (document.querySelector("#name") as HTMLInputElement).value;
  const email = (document.querySelector("#email") as HTMLInputElement).value;
  const contact = (document.querySelector("#contact") as HTMLInputElement).value;
  const education = (document.querySelector("#education") as HTMLInputElement).value;
  const skills = (document.querySelector("#skills") as HTMLInputElement).value;
  const experience = (document.querySelector("#experience") as HTMLInputElement).value;

  // generate the resume dynamically

  const resumeHTML = `
    <h2><b>Editable and Dynamic Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
    <p><b>Email:</b><span contenteditable="true"> ${email}</span>}</p>
    <p><b>Contact:</b><span contenteditable="true"> ${contact}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

      <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>

       <h3>Experince</h3>
        <p contenteditable="true">${experience}</p>
`
if(displayArea){
  displayArea.innerHTML = resumeHTML
}



})
