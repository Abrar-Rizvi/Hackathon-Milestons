//accessing toggle button of personal info
const toggleBtn: HTMLInputElement | null = document.querySelector("#toggle-checkbox") as HTMLInputElement | null;

// div of h1 and para of personal info
const subDiv = document.querySelector("#sub-divof-personal") as HTMLElement | null;
// console.log(subDiv);
const body = document.querySelector("body") as HTMLElement | null;
console.log(body);

const hideDiv = (): void => {
    if (toggleBtn) {
        toggleBtn.checked = false;
        toggleBtn.addEventListener("change", (): void => {
            if (toggleBtn.checked) {
                // subDiv!.style.visibility = "visible"
                subDiv?.classList.add("animationClass");
                subDiv?.classList.remove("removeAnimationClass");



            } else {
                // subDiv?.classList.add("removeAnimationClass")
                subDiv?.classList.add("removeAnimationClass");
                subDiv?.classList.remove("animationClass");


            }

        });
    }
}

hideDiv()

//accessing toggle button of Education
const tgButton: HTMLInputElement | null = document.querySelector("#toggle2-checkbox") as HTMLInputElement | null;
// console.log(tgButton);

// div of h1 and para of Education
const educationDetail: HTMLElement | null = document.querySelector("#sub-div-of-edu") as HTMLElement | null;
// console.log(educationDetail);




const hideAndDisplayDetail = (): void => {
    tgButton?.addEventListener("change", () => {
        if (tgButton.checked) {
            educationDetail?.classList.add("animationClass");
            educationDetail?.classList.remove("removeAnimationClass");

        } else {
            educationDetail?.classList.add("removeAnimationClass");
            educationDetail?.classList.remove("animationClass");
        }
    })
}
hideAndDisplayDetail()

const tgSkillsBtn: HTMLInputElement | null = document.querySelector("#toggle3-checkbox") as HTMLInputElement | null;
// console.log(tgSkillsBtn);

const subDivSkills: HTMLElement | null = document.querySelector(".sub-skill")
// console.log(subDivSkills);

const hideAndDisplayDetail3 = (): void => {
    tgSkillsBtn?.addEventListener("change", () => {
        if (tgSkillsBtn!.checked) {
            subDivSkills?.classList.add("animationClass3");
            subDivSkills?.classList.remove("removeAnimationClass3");

        } else {
            subDivSkills?.classList.add("removeAnimationClass3");
            subDivSkills?.classList.remove("animationClass3");
        }
    })
}

hideAndDisplayDetail3()

const tgBtnWork: HTMLInputElement | null = document.querySelector("#toggle4-checkbox") as HTMLInputElement | null;
// console.log(tgBtnWork);

const subWork: HTMLInputElement | null = document.querySelector(".sub-div-work") as HTMLInputElement | null;

 

const HideAndDisplayWork = () => {
    tgBtnWork?.addEventListener("change", () => {
        if(tgBtnWork.checked){
       subWork?.classList.add("animationClass5")
       subWork?.classList.remove("removeAnimationClass5")
        }else{
            subWork?.classList.add("removeAnimationClass5");
            subWork?.classList.remove("animationClass5");
        }
    })
}

HideAndDisplayWork()