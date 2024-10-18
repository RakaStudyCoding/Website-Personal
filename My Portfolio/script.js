// Fetch data from the backend
fetch('http://localhost:3000/portfolio')
  .then(response => response.json())
  .then(data => {
    // Select HTML elements where the portfolio data will be displayed
    const nameElement = document.getElementById('name');
    const professionElement = document.getElementById('profession');
    const skillsElement = document.getElementById('skills');
    const experienceElement = document.getElementById('experience');

    // Display name and profession
    nameElement.innerText = data.name;
    professionElement.innerText = data.profession;

    // Display skills
    let skillsHTML = "<ul>";
    data.skills.forEach(skill => {
      skillsHTML += `<li>${skill}</li>`;
    });
    skillsHTML += "</ul>";
    skillsElement.innerHTML = skillsHTML;

    // Display experience
    let experienceHTML = "";
    data.experience.forEach(exp => {
      experienceHTML += `
        <div>
          <h3>${exp.role} at ${exp.company}</h3>
          <p>Year: ${exp.year}</p>
        </div>
      `;
    });
    experienceElement.innerHTML = experienceHTML;
  })
  .catch(error => console.error('Error:', error));
