const addMemberButton = document.getElementById("add-member-btn");
const membersCount = document.getElementById("members-count");
const memberTemplate = document.getElementById('member-templete');
const membersContainer = document.getElementById('content');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"');
const majorSelectList = document.querySelector('select[name=major]');
const roleSelectList = document.querySelector('select[name=role]');


let membersList = [{
    name: "Faris Abu3ram",
    email: "faris@ppu.edu.ps",
    major: "Information Technology",
    role: "Front-End Developer",
    biography: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some 
    form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure 
    there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the 
    first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem 
    Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
}, {
    name: "Ibrahim Abusamra",
    email: "faris@ppu.edu.ps",
    major: "Information Technology",
    role: "Front-End Developer",
    biography: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some 
    form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure 
    there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the 
    first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem 
    Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
}, {
    name: "Mohamd Alnatsha",
    email: "faris@ppu.edu.ps",
    major: "Information Technology",
    role: "Front-End Developer",
    biography: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some 
    form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure 
    there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the 
    first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem 
    Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
}]

membersList.forEach(member => {

    membersContainer.innerHTML = "";
    let elementData  = memberTemplate.content.querySelector('.element');
    let currentMember = elementData.cloneNode(true)
    currentMember.querySelector('.member-name').innerText = member.name;
    currentMember.querySelector('.email').innerText = member.email;
    currentMember.querySelector('.major').innerText = member.major;
    currentMember.querySelector('.role').innerText = member.role;
    currentMember.querySelector('.member-details').innerText = member.biography;
    membersContainer.appendChild(currentMember);

})


