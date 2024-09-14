//accessing toggle button of personal info
var toggleBtn = document.querySelector("#toggle-checkbox");
// div of h1 and para of personal info
var subDiv = document.querySelector("#sub-divof-personal");
// console.log(subDiv);
var body = document.querySelector("body");
console.log(body);
var hideDiv = function () {
    if (toggleBtn) {
        toggleBtn.checked = false;
        toggleBtn.addEventListener("change", function () {
            if (toggleBtn.checked) {
                // subDiv!.style.visibility = "visible"
                subDiv === null || subDiv === void 0 ? void 0 : subDiv.classList.add("animationClass");
                subDiv === null || subDiv === void 0 ? void 0 : subDiv.classList.remove("removeAnimationClass");
            }
            else {
                // subDiv?.classList.add("removeAnimationClass")
                subDiv === null || subDiv === void 0 ? void 0 : subDiv.classList.add("removeAnimationClass");
                subDiv === null || subDiv === void 0 ? void 0 : subDiv.classList.remove("animationClass");
            }
        });
    }
};
hideDiv();
//accessing toggle button of Education
var tgButton = document.querySelector("#toggle2-checkbox");
// console.log(tgButton);
// div of h1 and para of Education
var educationDetail = document.querySelector("#sub-div-of-edu");
// console.log(educationDetail);
var hideAndDisplayDetail = function () {
    tgButton === null || tgButton === void 0 ? void 0 : tgButton.addEventListener("change", function () {
        if (tgButton.checked) {
            educationDetail === null || educationDetail === void 0 ? void 0 : educationDetail.classList.add("animationClass");
            educationDetail === null || educationDetail === void 0 ? void 0 : educationDetail.classList.remove("removeAnimationClass");
        }
        else {
            educationDetail === null || educationDetail === void 0 ? void 0 : educationDetail.classList.add("removeAnimationClass");
            educationDetail === null || educationDetail === void 0 ? void 0 : educationDetail.classList.remove("animationClass");
        }
    });
};
hideAndDisplayDetail();
var tgSkillsBtn = document.querySelector("#toggle3-checkbox");
// console.log(tgSkillsBtn);
var subDivSkills = document.querySelector(".sub-skill");
// console.log(subDivSkills);
var hideAndDisplayDetail3 = function () {
    tgSkillsBtn === null || tgSkillsBtn === void 0 ? void 0 : tgSkillsBtn.addEventListener("change", function () {
        if (tgSkillsBtn.checked) {
            subDivSkills === null || subDivSkills === void 0 ? void 0 : subDivSkills.classList.add("animationClass3");
            subDivSkills === null || subDivSkills === void 0 ? void 0 : subDivSkills.classList.remove("removeAnimationClass3");
        }
        else {
            subDivSkills === null || subDivSkills === void 0 ? void 0 : subDivSkills.classList.add("removeAnimationClass3");
            subDivSkills === null || subDivSkills === void 0 ? void 0 : subDivSkills.classList.remove("animationClass3");
        }
    });
};
hideAndDisplayDetail3();
var tgBtnWork = document.querySelector("#toggle4-checkbox");
// console.log(tgBtnWork);
var subWork = document.querySelector(".sub-div-work");
var HideAndDisplayWork = function () {
    tgBtnWork === null || tgBtnWork === void 0 ? void 0 : tgBtnWork.addEventListener("change", function () {
        if (tgBtnWork.checked) {
            subWork === null || subWork === void 0 ? void 0 : subWork.classList.add("animationClass5");
            subWork === null || subWork === void 0 ? void 0 : subWork.classList.remove("removeAnimationClass5");
        }
        else {
            subWork === null || subWork === void 0 ? void 0 : subWork.classList.add("removeAnimationClass5");
            subWork === null || subWork === void 0 ? void 0 : subWork.classList.remove("animationClass5");
        }
    });
};
HideAndDisplayWork();
