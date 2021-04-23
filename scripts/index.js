let popup = document.querySelector('.popup');
let dwForm = document.querySelector('.profile__container-icon');
let editdwForm = document.querySelector('.dialogue-window__form');
let dwX = document.querySelector('.dialogue-window__form-x'); // dw = dialogue window
let dwformInputs = document.querySelectorAll('.dialogue-window__form-element');
let personName = document.querySelector('.profile__title');
let personNameInput = document.querySelector('.dialogue-window__form-element_input_title');
let personDescription = document.querySelector('.profile__subtitle');
let personDescriptionInput = document.querySelector('.dialogue-window__form-element_input_subtitle');
let profile = {};

function updateProfile() {
  profile = {
    name: personName.textContent,
    about: personDescription.textContent,
  };
}

function editProfile() {
  personNameInput.value = profile.name;
  personDescriptionInput.value = profile.about;
}

function closeProfile() {
  popup.classList.remove("popup_active");
}

function saveProfile(evt) {
  evt.preventDefault();
  personName.textContent = personNameInput.value;
  personDescription.textContent = personDescriptionInput.value;
  updateProfile();
  closeProfile();
}


app.get('/', function(req,res) {
  res.send(browserRefresh('index.html'));
});

function browserRefresh(filePath) {
  var html = fs.readFileSync(filePath);
  var $ = cheerio.load(html);
  $('body').append(`<script src="${process.env.BROWSER_REFRESH_URL}"></script>`);
  return $.html();
}
function activatedw() {
  popup.classList.add("popup_active");
  editProfile();
}

/*let like = document.getElementsByClassName("elements__card-like");
Array.from(like).forEach(function (element) {
  element.addEventListener('click', (e) =>
    e.target.classList.toggle("elements__card-like-black"));
});*/

dwForm.addEventListener('click', activatedw);
dwX.addEventListener('click', closeProfile);
editdwForm.addEventListener('submit', saveProfile);

app.get('/', function(req,res) {
  res.send(browserRefresh('index.html'));
});
