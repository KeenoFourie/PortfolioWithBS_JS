// About section
let about = document.querySelector("section#About .row:last-child");
let aboutContents = [
    "I am a hard-working person who is determined and passionate about web development. My passion drives me to be the best that I can possibly be. My passion was always there, from a young age I've loved technology and working with computer's. I am not afraid of a challnge no matter how big or small. I love what I do and this allows me to be happy with any obstruction I face. I am an open individual who treats everyone fairly and with honesty."
]

// Skills
let Skills = document.querySelector("section#Skills .skillList");
let skillsContent = [
    "Some of my soft skill's include communication, time management, problem-solving, teamwork skills, and some leadership skills aswell. My technical skills consist of the following:"
]

// Loop through the about contents
aboutContents.forEach( (content)=>{
    about.innerHTML += `
    <p class="lead">${content}</p>
    `
} )

// Loop through the skills contents
skillsContent.forEach( (content)=>{
    Skills.innerHTML += `
    <p class="lead">${content}</p>
    `
} )

// Education
let education = [
    {
        id: 1,
        year: 2023,
        description: 'I am currently doing a coding programme',
        place: 'Life Choices Coding Academy',

    },
    {
        id: 2,
        year: 2022,
        description: 'Matriculated',
        place: 'Alexander Sinton Secondary School',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 3,
        year: 2017,
        description: 'Graduated Primary School',
        place: 'Silverlea Primary School',
        type: 'certificate',
        certificate: ''
    },
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})


// Skills icons with no sizing

let htmlImage = document.createElement("img");
htmlImage.src = "https://cdn-icons-png.flaticon.com/128/5968/5968267.png";
let html = document.getElementById("htmlImg");
html.appendChild(htmlImage);

let bootstrapImage = document.createElement("img");
bootstrapImage.src = "https://cdn-icons-png.flaticon.com/128/5968/5968672.png";
let bootstrap = document.getElementById("bootstrapImg");
bootstrap.appendChild(bootstrapImage);


let javascriptImage = document.createElement("img");
javascriptImage.src = "https://cdn-icons-png.flaticon.com/128/5968/5968292.png";
let javascript = document.getElementById("javascriptImg");
javascript.appendChild(javascriptImage);

let cssImage = document.createElement("img");
cssImage.src = "https://cdn-icons-png.flaticon.com/128/5968/5968242.png";
let css = document.getElementById("cssImg");
css.appendChild(cssImage);