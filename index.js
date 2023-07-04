const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const closeBtn = document.querySelector('.close-button');
const links = document.querySelectorAll('.links');
menuToggle.addEventListener('click', () => {
  if (nav.classList.contains('show')) {
    nav.classList.remove('show');
    closeBtn.style.display = 'none';
    menuToggle.style.display = 'block';
  } else {
    nav.classList.add('show');
    menuToggle.style.display = 'none';
    closeBtn.style.display = 'block';
  }
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('show');
  closeBtn.style.display = 'none';
  menuToggle.style.display = 'block';
});

links.forEach((n) => n.addEventListener('click', () => {
  nav.classList.remove('show');
  menuToggle.style.display = 'block';
}));

const speakers = [
  {
    imgSrc: 'feature-img/yochai.JPG',
    name: 'Yochai Benkler',
    work: 'Benman professor of Entrepreneurid Legal Studies at Hard law School',
    contribution: 'Bankler studies common based peer production, and published his seminal book The wealth of Networs in 2006',
  },
  {
    imgSrc: 'feature-img/noh.JPG',
    name: 'SohYeong Noh',
    work: 'Director of art Centr Nabi and board member of CC korea',
    contribution: 'As the man venue for new media art production in korea, Nabi promotes cross disciplinary collaboration and understanding among science technology, humanity and arts.',
  },
  {
    imgSrc: 'feature-img/lila.JPG',
    name: 'Lila Trektikov',
    work: 'Executive Director of the Wikimedia Foundation',
    contribution: 'Lila Tretkov is the Executive Director of the Wikimedia Foundation. The nonprofit organization that operates Wikipedia. Wikimedia is freely available in 209 languages and used by nearly half a billion people around the world every month',
  },
  {
    imgSrc: 'feature-img/kilnam chon.JPG',
    name: 'Kilnam Chon',
    work: 'Helped bring internet to Asia and is an outspoken advocate for the open web commons',
    contribution: 'In 2021, he was inducted into the inaugural class of the Internet Society\'s (ISOC) Internet Hall of Fame.',
  },
  {
    imgSrc: 'feature-img/julia leda.jpg',
    name: 'Julia Leda',
    work: 'President of Young Pirates of European',
    contribution: 'European integration, political democracy and participation of youth through online as her major concern. Reda\'s report outlining potential changes to EU copyright law was approved by the parliament in July.',
  },
  {
    imgSrc: 'feature-img/ryanmerkley.jpg',
    name: 'Ryan Merkley',
    work: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    contribution: 'Ryan has been leading open source projects at the Mozilla Foundation such as the source movement.',
  },
];

const speakersContainer = document.getElementById('speakers-container');

speakers.forEach((speaker) => {
  const speakerElement = document.createElement('div');
  speakerElement.className = 'sample';

  const imgElement = document.createElement('img');
  imgElement.className = 'speaker-img';
  imgElement.src = speaker.imgSrc;
  imgElement.alt = '';

  const infoElement = document.createElement('div');

  const nameElement = document.createElement('h3');
  nameElement.className = 'speaker-name';
  nameElement.textContent = speaker.name;

  const workElement = document.createElement('p');
  workElement.className = 'work';
  workElement.textContent = speaker.work;

  const contributionElement = document.createElement('p');
  contributionElement.className = 'contribution';
  contributionElement.textContent = speaker.contribution;

  infoElement.appendChild(nameElement);
  infoElement.appendChild(workElement);
  infoElement.appendChild(document.createElement('br'));
  infoElement.appendChild(contributionElement);

  speakerElement.appendChild(imgElement);
  speakerElement.appendChild(infoElement);

  speakersContainer.appendChild(speakerElement);
});