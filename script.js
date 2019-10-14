const addMemberButton = document.getElementById("add-member-btn");
const membersCount = document.getElementById("members-count");
const memberTemplate = document.getElementById('member-templete');
const cardTemplate = document.getElementById('card-template');
const membersContainer = document.getElementById('content');
const documentBody = document.getElementById('body');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"');
const majorSelectList = document.querySelector('select[name=major]');
const roleSelectList = document.querySelector('select[name=role]');
const biographyInput = document.querySelector('textarea[name="biography"]');



//This list is here to have some data to begin with.
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
membersList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || membersList;

renderHTMLPage();

addMemberButton.addEventListener('click', e => {
    e.preventDefault();
    let valid = validateInput();
    if(valid) {
        createMember(nameInput.value, emailInput.value, majorSelectList.value, roleSelectList.value, biographyInput.value);
        save();
        renderHTMLPage();
        clearForm();
    }
})

function clearForm() {
    nameInput.value = "";
    emailInput.value = "";
    majorSelectList.value = "";
    roleSelectList.value = "";
    biographyInput.value = "";
}

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
    membersCount.innerText = membersList.length + " ITEMS";
    membersList.forEach(member => {
        let elementData  = memberTemplate.content.querySelector('.element');
        let currentMember = elementData.cloneNode(true);
        currentMember.querySelector('.member-name>.name').innerText = member.name;
        currentMember.querySelector('.email').innerText = member.email;
        currentMember.querySelector('.major').innerText = member.major;
        currentMember.querySelector('.role').innerText = member.role;
        currentMember.querySelector('.member-details').innerText = member.biography;

        currentMember.addEventListener('click', event => {
            let cardData  = cardTemplate.content.querySelector('.full-details-card');
            let currentCard = cardData.cloneNode(true);
            currentCard = createCard(currentCard, member.name, member.email, member.major, member.role, member.biography);
        })

        membersContainer.appendChild(currentMember);
    })
}

function createCard(htmlData, name, email, major, role, biography) {
    htmlData.querySelector('.name').innerText = name;
    htmlData.querySelector('.email').innerText = email;
    htmlData.querySelector('select[name="major"]').value = major;    
    htmlData.querySelector('select[name="role"]').value = role;
    htmlData.querySelector('.details').innerText = biography;
    addFunctionality(htmlData);
    documentBody.appendChild(htmlData);
}

function addFunctionality(card) {
    let closeBtn = card.querySelector('.close>button');
    closeBtn.addEventListener('click', event => {
        documentBody.removeChild(document.querySelector('.full-details-card'));
    })
    let deleteBtn = card.querySelector('.buttons>#del-btn');
    let saveBtn = card.querySelector('.buttons>#save-btn');
    let cancelBtn = card.querySelector('.buttons>#cancel-btn');

    deleteBtn.addEventListener('click', event => {
        for(var i = 0; i < membersList.length; i++){
            if(membersList[i].email === card.querySelector('.email').innerText) {
                membersList.splice(i, 1);
                documentBody.removeChild(document.querySelector('.full-details-card'));
            }
        }
        save();
        renderHTMLPage();
    })

    saveBtn.addEventListener('click', event => {
        for(var i = 0; i < membersList.length; i++){
            if(membersList[i].email === card.querySelector('.email').innerText) {
                membersList[i].major = card.querySelector('select[name="major"]').value;
                membersList[i].role = card.querySelector('select[name="role"]').value;
                membersList[i].biography = card.querySelector('.details').innerText;
                documentBody.removeChild(document.querySelector('.full-details-card'));
                save();
                renderHTMLPage();
            }
        }
    })

    cancelBtn.addEventListener('click', event => {
        documentBody.removeChild(document.querySelector('.full-details-card'));
    })
}