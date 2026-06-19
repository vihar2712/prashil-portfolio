function filterTag(meta, attr) {
  let tag = [...meta].filter((auth) => {
    let nameAttr = auth.getAttribute("name");
    if (nameAttr === attr) {
      return attr;
    }
  });
  return tag;
}
function fillContent(tag, content) {
  tag.forEach((auth) => {
    auth.content = content;
    // console.log(auth);
  });
}

let metaTags = document.getElementsByTagName("meta");
let description = filterTag(metaTags, "description");
let author = filterTag(metaTags, "author");

let logoName = document.querySelector(".logo");
let headerName = document.querySelector(".header-title .down");
let designation = document.querySelector(".header-subtitle");
let photo = document.querySelector(".about-img");
let aboutMe = document.querySelector(".about-me");
let testimonialSection = document.querySelector("#testimonial .row");
let skillSection = document.querySelector("#skills .all-skills");
let langSection = document.querySelector(".all-languages");
let expSection = document.querySelector("#experience .row");
let eduSection = document.querySelector("#education .row");
let awardSection = document.querySelector(".all-awards");
let projects = document.querySelector("#projects .section-title");

// console.log(jsonData);

fetch("../../myData.json")
  .then((response) => response.json())
  .then((data) => {
    fillContent(author, data.name);
    fillContent(description, data.about);
    document.title = data.name;
    logoName.textContent = data.name;
    headerName.textContent = `I am ${data.name}`;
    designation.textContent = data.about.join(", ");
    photo.src = data.profilePicture;
    aboutMe.textContent = data.description;

    data.skills.map((skill) => {
      let skillDiv = `<div class="skill mb-4 ml-4">
      <div class="d-flex justify-content-between">
          <h4 class="font-weight-bold ">${skill[0]}</h4>
      </div>
      <div class="progress">
          <div class="progress-bar bg-${skill[1]}" style="width: 100%;"></div>
      </div>`;
      skillSection.innerHTML += skillDiv;
    });
    // insertData(data.skills,skillSection,skillDiv)

    data.workExperience.map((work) => {
      let section = ` <div class="col-sm-6 ">
      <img src="${work.photo}" style="height:50px" alt="${work.companyName}"/>
      <h4 class="mb-0">${work.companyName}</h4>
      <p class="text-primary mb-1">${work.startYear}-${work.endYear}</p>
      <hr class="text-primary my-2">
  </div>`;
      expSection.innerHTML += section;
    });

    data.recommendations.map((recommendation) => {
      let section = `<div class="col-md-6">
        <div class="testimonial-card">
            <div class="testimonial-card-img-holder">
                <img src="${recommendation.photo}" class="testimonial-card-img"
                    alt="${recommendation.name}">
            </div>
            <div class="testimonial-card-body">
                <p class="testimonial-card-subtitle">${recommendation.desc}</p>
                <h6 class="testimonial-card-title">${recommendation.name}</h6>
            </div>
        </div>`;

      testimonialSection.innerHTML += section;
    });

    data.projects.map((project) => {
      let section = ` <div class="blog-card">
      <div class="blog-card-header">
          <img src="${project.photo}" class="blog-card-img"
              alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page">
      </div>
      <div class="blog-card-body">
          <h5 class="blog-card-title">${project.name}</h6>
          <p class="text-primary mb-1">${project.startYear}-${project.endYear}</p>
              <p>${project.summary}</p>

              <a href="${project.link}" class="blog-card-link">See Live Demo <i class="ti-angle-double-right"></i></a>
      </div>
  </div>`;
      projects.innerHTML += section;
    });

    data.languages.map((lang) => {
      let section = `<div class="skill mb-4 ml-4">
      <div class="d-flex justify-content-between">
          <h4 class="font-weight-bold ">${lang}</h4>
      </div>
      <div class="progress">
          <div class="progress-bar bg-warning" style="width: 100%;"></div>
      </div>`;
      langSection.innerHTML += section;
    });

    data.education.map((ed) => {
      let section = ` <div class="col-sm-6 ">
      <img src="${ed.photo}" style="height:50px" alt="${ed.placeName}"/>
      <h4 class="mb-0">${ed.placeName}</h4>
      <p class="text-primary mb-1">${ed.startYear}-${ed.endYear}</p>
  </div>`;
      eduSection.innerHTML += section;
    });
    data.awards.map((award) => {
      let section = `<div class="pricing-card">
      <div class="pricing-card-header">
      <h1>&#127942;</h1>
      <h3>${award.title}</h3>
      <span class="display-6">${award.issuedBy} - ${award.issuedOn}</span>
      </div>
      <div class="pricing-card-body mt-2">
      <p>${award.description}</p>
      </div>
      </div>`;
      awardSection.innerHTML += section;
    });
  });
//   {
//     "backgroundImg": "",
//     "profilePicture": "",
//     "description": "",
//     "aboutMe": "",
//     "workExperience": [{}],
//     "skills": [""],
//     "recommendations": [{}],
//     "projects":[{}],
//     "awards":[{}],
//     "Languages":[{}]
//   }
