function skillsMember(){
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var memberContent = document.getElementById("memberContent");
    var skillsContent = document.getElementById("skillsContent");
    var projectsContent = document.getElementById("projectsContent");
    var contactContent = document.getElementById("contactContent");
    member.style.backgroundColor = "rgb(0, 0, 0)";
    skills.style.backgroundColor = "rgb(0, 0, 0, 0)";
    projects.style.backgroundColor = "rgb(0, 0, 0, 0)";
    contact.style.backgroundColor = "rgb(0, 0, 0, 0)";
    memberContent.style.display = "block";
    skillsContent.style.display = "none";
    projectsContent.style.display = "none";
    contactContent.style.display = "none";
}