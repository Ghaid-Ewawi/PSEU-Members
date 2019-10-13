const addMemberButton = document.getElementById("add-member-btn");
const membersCount = document.getElementById("members-count");
const memberTemplate = document.getElementById('member-templete');
const membersContainer = document.getElementById('content');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"');
const majorSelectList = document.querySelector('select[name=major]');
const roleSelectList = document.querySelector('select[name=role]');
const biographyInput = document.querySelector('textarea[name="biography"]');

let membersList = [{
    name: "Faris Abu3ram",
    email: "faris@ppu.edu.ps",
    major: "Information Technology",
    role: "Front-End Developer",
    biography: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some` 
    + `form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure 
    there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the 
    first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem 
    Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
}, {
    name: "Ibrahim Abusamra",
    email: "ibrahim@ppu.edu.ps",
    major: "Information Technology",
    role: "Front-End Developer",
    biography: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some` 
    + `form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure 
    there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the 
    first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem 
    Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
}, {
    name: "Mohamd Alnatsha",
    email: "mohamd@ppu.edu.ps",
    major: "Information Technology",
    role: "Front-End Developer",
    biography: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some 
    form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure 
    there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the 
    first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem 
    Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
}]


const LOCAL_STORAGE_LIST_KEY = 'members.list'
membersList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

renderHTMLPage();

addMemberButton.addEventListener('click', e => {
    e.preventDefault();
    console.log(majorSelectList.value);
    let valid = validateInput();
    if(valid) {
        createMember(nameInput.value, emailInput.value, majorSelectList.value, roleSelectList.value, biographyInput.value);
        save();
        renderHTMLPage();
    }
})

function validateInput() {
    if(nameInput.value == "" || nameInput.value == null){
        alert("Name must be filled out");
        return false;
    } else if(emailInput.value == "" || emailInput.value == null) {
        alert("Email must be filled out");
        return false;
    } else if(majorSelectList.value == "" || majorSelectList.value == null) {
        alert("You must pick the major");
        return false;
    } else if(roleSelectList.value == "" || roleSelectList.value == null) {
        alert("You must pick the role");
        return false;
    } else if(biographyInput.value == "" || biographyInput.value == null) {
        alert("You must enter your details");
        return false;
    } else if(biographyInput.value.length < 500){
        alert("Your details must be longer than 500 characters. You have " + (500 - biographyInput.value.length) + " character left");
        return false;
    } else if(biographyInput.value.length > 1500){
        alert("Your details must be less than 1500 characters. You have " + (biographyInput.value.length) + " characters");
        return false;
    }
    return true;
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(membersList))
}

function createMember(name, email, major, role, biography) {
    let member = {};
    member.name = name;
    member.email = email;
    member.major = major;
    member.role = role;
    member.biography = biography;
    membersList.unshift(member);
}

function renderHTMLPage() {
    membersContainer.innerHTML = "";
    membersList.forEach(member => {
        let elementData  = memberTemplate.content.querySelector('.element');
        let currentMember = elementData.cloneNode(true);
        currentMember.querySelector('.member-name>.name').innerText = member.name;
        currentMember.querySelector('.email').innerText = member.email;
        currentMember.querySelector('.major').innerText = member.major;
        currentMember.querySelector('.role').innerText = member.role;
        currentMember.querySelector('.member-details').innerText = member.biography;
        membersContainer.appendChild(currentMember);
    })
    
}