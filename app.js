window.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-nav');
  const navLinkMenu = document.querySelectorAll('.nav-link');

  menuBtn.addEventListener('click', () => {
    if (menuBtn.classList.contains('is-active')) {
      menuBtn.classList.remove('is-active');
      mobileMenu.classList.remove('is-active');
      document.body.style.overflowY = 'scroll';
    } else {
      menuBtn.classList.add('is-active');
      mobileMenu.classList.add('is-active');
      document.body.style.overflowY = 'hidden';
    }
  });

  navLinkMenu.forEach((element) => {
    element.addEventListener('click', () => {
      menuBtn.classList.remove('is-active');
      mobileMenu.classList.remove('is-active');
      document.body.style.overflowY = 'scroll';
    });
  });

  // Dynamic featured speaker section.

  const speakersList = [
    {
      img: 'assets/speaker_1.svg',
      name: 'Arslan Majeed',
      designation:
        'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
      description:
        'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    },
    {
      img: 'assets/speaker_2.svg',
      name: 'Shafqat Rasool',
      designation:
        'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
      description:
        'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
    },
    {
      img: 'assets/speaker_3.svg',
      name: 'Faisal Mazhar',
      designation: 'Director of Art Centre Nabi and a board member of CC Korea',
      description:
        'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    },
    {
      img: 'assets/speaker_4.svg',
      name: 'Nawaz Gujjar',
      designation: 'President of Young Pirates of Europe',
      description:
        'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
    },
    {
      img: 'assets/speaker_5.svg',
      name: 'Ali Usman',
      designation: 'Executive Director of the Wikimedia Foundation',
      description:
        'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
    },
    {
      img: 'assets/speaker_6.svg',
      name: 'Assad Parrot',
      designation: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
      description:
        'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
    },
  ];

  const speakerContainer = document.querySelector('.speakers-container');

  function speakerCard(speaker) {
    return `<div class="speaker-card" data-visible="true">
              <img class="speaker-img" src="${speaker.img}" alt="${speaker.name}" />
              <div class=speaker-details-card">
                <h3 class="speaker-title">${speaker.name}</h3>
                <p class="speaker-designation">${speaker.designation}</p>
                <hr class="speaker-hr" />
                <p class="speaker-desc">
                  ${speaker.description}
                </p>
              </div>
            </div>`;
  }

  const speakers = speakersList.map(speakerCard);
  speakerContainer.insertAdjacentHTML('afterbegin', speakers.join(''));
  //  expand button.
  const expanButton = document.querySelector('.expand-more');
  const speakerExpanded = expanButton.getAttribute('aria-expanded');
  const mediaQuery = window.matchMedia('(max-width: 768px)');

  function handleTabletChange(e) {
    const speakerCard = document.querySelectorAll('.speaker-card');
    if (e.matches && speakerExpanded !== true) {
      for (let i = 0; i < speakerCard.length; i += 1) {
        if (i > 1) {
          speakerCard[i].style.display = 'none';
          speakerCard[i].setAttribute('data-visible', false);
        }
      }
    } else {
      for (let i = 0; i < speakerCard.length; i += 1) {
        if (i > 1) {
          speakerCard[i].style.display = '';
          speakerCard[i].setAttribute('data-visible', true);
        }
      }
    }
  }

  mediaQuery.addEventListener('change', handleTabletChange);

  handleTabletChange(mediaQuery);

  expanButton.addEventListener('click', () => {
    const expandMore = expanButton.getAttribute('aria-expanded');
    const speakerCard = document.querySelectorAll('.speaker-card');
    if (expandMore === 'false') {
      for (let i = 0; i < speakerCard.length; i += 1) {
        if (i > 1) {
          speakerCard[i].style.display = '';
          speakerCard[i].setAttribute('data-visible', true);
        }
      }
      expanButton.setAttribute('aria-expanded', true);
      expanButton.innerHTML = 'LESS  <i class="material-icons">expand_less</i>';
    } else if (expandMore === 'true') {
      for (let i = 0; i < speakerCard.length; i += 1) {
        if (i > 1) {
          speakerCard[i].style.display = 'none';
          speakerCard[i].setAttribute('data-visible', false);
        }
      }
      expanButton.setAttribute('aria-expanded', false);
      expanButton.innerHTML = 'MORE  <i class="material-icons">expand_more</i>';
    }
  });
});
