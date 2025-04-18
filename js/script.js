const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const cardContainer = document.getElementById('card-container')
let card = '';

for (let i = 0; i < teamMembers.length; i++) {
  
  const {name, role, email, img} = teamMembers[i];
  card += `<div class="col-4">
                    <div class="team-card d-flex">
                        <div class="card-image">
                            <img src="${img}" class="img-fluid h-100">
                        </div>
                          <div class="card-text white">
                            <h5>${name}</h5>
                            <p>${role}</p>
                            <a href="mailto:${email}">${email}</a>
                          </div>
                    </div>
            </div>`
  
  cardContainer.innerHTML = card;
}


