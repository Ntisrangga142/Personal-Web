let projects = [];
let count = 0;

function addProject(e) {
  
  if(count == 0){
    noProjectDiv = document.querySelector('.noProject');
    noProjectDiv.style.display = 'none';
  }

  count++;

  e.preventDefault();

  let title = document.getElementById('projectName').value;
  let description = document.getElementById('description').value;
  let startDate = document.getElementById('startDate').value;
  let endDate = document.getElementById('endDate').value;
  let imageInput = document.getElementById('uploadImage');

  if (
    title == '' ||
    description == '' ||
    startDate == '' ||
    endDate == '' ||
    imageInput.files.length === 0
  ) {
    return alert('Please fill all fields');
  }

  image = URL.createObjectURL(imageInput.files[0]);
  let duration = calculateDuration(startDate, endDate);
  let technologies = getCheckedTechnologies();

  let project = {
    title: title,
    description: description,
    startDate: startDate,
    endDate: endDate,
    duration: duration,
    image: image,
    technologies: technologies
  };

  for (let key in projects) {
    delete projects[key];
  }

  projects.push(project);
  
  renderProject();
}

function calculateDuration(startDate, endDate) {
  let start = new Date(startDate);
  let end = new Date(endDate);
  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  let days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

  if (end.getDate() < start.getDate()) {
    months--;
  }

  if (months < 1) {
    return `${days} hari`;
  } else {
    return `${months} bulan`;
  }
}

function getCheckedTechnologies() {
  const technologies = [];
  const checkboxes = document.querySelectorAll(
    '.checkboxGroup input[type="checkbox"]'
  );

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      technologies.push(checkbox.value);
    }
  });

  return technologies;
}

function renderTechnologiesIcons(technologies) {
  const icons = {
    'NodeJS': 'fa-node',
    'Html5': 'fa-html5',
    'ReactJS': 'fa-react',
    'Javascript': 'fa-js'
  };

  return technologies
    .map(
      tech =>
        `<i class="fa-brands ${icons[tech]}"></i>`
    )
    .join('');
}

function renderProject() {
  console.log(projects);

  let projectsGridElement = document.getElementById('projectContainer');

  projects.forEach(project => {
    const technologiesIcons = Array.isArray(project.technologies)
      ? renderTechnologiesIcons(project.technologies)
      : '';
    const projectCard = `
      <div class="cardProject">
          <img src="${project.image}" />

          <h2 class="titleCard"> ${project.title} - ${new Date(project.startDate).getFullYear()} </h2>

          <p class="durationCard">Duration : ${project.duration}</p>

          <p class="descriptionCard">
          ${project.description}
          </p>

          <div class="technologiesProject">
          ${technologiesIcons}
          </div>

          <div class="btnGroup">
            <button class="btnEdit">Edit</button>
            <button class="btnDelete">Delete</button>
          </div>
          
        </div>
    `;
    projectsGridElement.innerHTML += projectCard;
  });
}

function firstProjectContent() {
  return `
        <div class="cardProject">
          <img src="/Task/assets/Project1.jpeg" />

          <h2 class="titleCard"> Dumbways Mobile App - 2021 </h2>

          <p class="durationCard">Duration : 3 Month</p>

          <p class="descriptionCard">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                explicabo totam labore sit tempore, voluptate vitae nesciunt in
                maiores rerum, vero veritatis numquam iure aut sunt nemo.
          </p>

          <div class="technologiesProject">
            <i class="fa-brands fa-react"></i>
            <i class="fa-brands fa-node-js"></i>
          </div>

          <div class="btnGroup">
            <button class="btnEdit">Post</button>
            <button class="btnDelete">Delete</button>
          </div>
          
        </div>
    `;
}