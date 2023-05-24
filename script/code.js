// About section
let about = document.querySelector("section#About .row:last-child");
let aboutContents = [
    "I am a hard-working person who is determined and passionate about web development. My passion drives me to be the best that I can possibly be. My passion was always there, from a young age I've loved technology and working with computer's. I am not afraid of a challnge no matter how big or small. I love what I do and this allows me to be happy with any obstruction I face. I am an open individual who treats everyone fairly and with honesty."
]

// Loop through the contents
aboutContents.forEach( (content)=>{
    about.innerHTML += `
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