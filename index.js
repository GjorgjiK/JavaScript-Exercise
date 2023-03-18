const data = [
  {
    image: 'https://placekitten.com/600/400',
    caption:
      'Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://www.facebook.com/EmbedSocial/',
    date: '2018-03-12 03:00:00',
    likes: '123',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/100/100',
  },
  {
    image: 'https://placekitten.com/600/410',
    caption:
      'Quisque metus nisi, consequat et molestie eget, facilisis ac odio. Nam lorem libero, efficitur ac velit at, egestas tempor arcu. Nullam pharetra ex eget orci lobortis malesuada. Maecenas eget porta felis. Aliquam porttitor, nibh nec ullamcorper fermentum, eros velit lobortis justo, pretium consectetur turpis enim ut nunc. Fusce convallis, ex ut ultrices sodales, ante quam venenatis arcu, vitae mollis magna urna vel eros. Aliquam a sapien nisi. Nullam convallis malesuada suscipit. ',
    type: 'image',
    source_type: 'instagram',
    source_link: 'https://instagram.com/embedsocial/',
    date: '2019-01-12 03:00:00',
    likes: '0',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/150/100',
  },
  {
    image: 'https://placekitten.com/600/420',
    caption: '',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://instagram.com/embedsocial/',
    date: '2017-01-21 03:00:00',
    likes: '9866555',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/100/150',
  },
  {
    image: 'https://placekitten.com/600/430',
    caption:
      'Etiam eu blandit nisi. Aliquam rutrum faucibus mauris, sed egestas odio viverra at. In elementum sit amet sapien vitae bibendum.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://www.facebook.com/EmbedSocial/',
    date: '2019-12-12 03:00:00',
    likes: '2',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/120/120',
  },
  {
    image: 'https://placekitten.com/600/440',
    caption:
      'Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://instagram.com/embedsocial/',
    date: '2018-04-12 03:00:00',
    likes: '12343',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/50/50',
  },
  {
    image: 'https://placekitten.com/600/440',
    caption:
      'Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://www.facebook.com/EmbedSocial/',
    date: '2019-12-12 03:00:00',
    likes: '123',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/101/101',
  },
  {
    image: 'https://placekitten.com/800/400',
    caption:
      'Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://www.facebook.com/EmbedSocial/',
    date: '2019-12-12 03:00:00',
    likes: '12',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/150/120',
  },
  {
    image: 'https://placekitten.com/600/500',
    caption:
      'Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://instagram.com/embedsocial/',
    date: '2017-12-12 03:00:00',
    likes: '23',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/140/140',
  },
  {
    image: 'https://placekitten.com/700/400',
    caption:
      'Pellentesque lacinia volutpat turpis non fermentum. Cras at pellentesque augue. Aliquam eget metus sit amet turpis consectetur posuere.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://www.facebook.com/EmbedSocial/',
    date: '2017-12-08 03:00:00',
    likes: '0',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/100/100',
  },
  {
    image: 'https://placekitten.com/700/500',
    caption:
      'Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://www.facebook.com/EmbedSocial/',
    date: '2019-02-12 03:00:00',
    likes: '0',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/102/102',
  },
  {
    image: 'https://placekitten.com/800/600',
    caption:
      'Aliquam odio libero, malesuada et iaculis a, facilisis bibendum dolor. Vivamus ultricies congue arcu eu porttitor. Integer libero tortor, volutpat a purus id, mattis tristique tortor. ',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://www.facebook.com/EmbedSocial/',
    date: '2019-12-12 03:00:00',
    likes: '2',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/103/100',
  },
  {
    image: 'https://placekitten.com/700/600',
    caption: 'Duis in facilisis lectus.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://instagram.com/embedsocial/',
    date: '2020-12-12 03:00:00',
    likes: '1',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/40/100',
  },
  {
    image: 'https://placekitten.com/1600/1400',
    caption:
      'Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://www.facebook.com/EmbedSocial/',
    date: '2019-12-15 03:00:00',
    likes: '2324',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/80/100',
  },
  {
    image: 'https://placekitten.com/1600/400',
    caption:
      'Aliquam odio libero, malesuada et iaculis a, facilisis bibendum dolor.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://www.facebook.com/EmbedSocial/',
    date: '2019-10-12 03:00:00',
    likes: '1223',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/80/80',
  },
  {
    image: 'https://placekitten.com/2000/4000',
    caption:
      'Quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://instagram.com/embedsocial/',
    date: '2016-12-12 03:00:00',
    likes: '12223',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/110/110',
  },
  {
    image: 'https://placekitten.com/900/600',
    caption:
      ' Suspendisse finibus lorem nibh, facilisis ullamcorper nunc consequat sit amet. Curabitur ultricies magna ante, ac eleifend lorem auctor porta. Nullam volutpat aliquet lorem, et posuere ex aliquet eu. Quisque elementum sem mauris, a mattis est scelerisque vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut quis massa eget ligula euismod sagittis id congue quam. Duis vestibulum eros sed tincidunt rutrum. Pellentesque in malesuada velit.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://www.facebook.com/EmbedSocial/',
    date: '2017-12-12 03:00:00',
    likes: '0',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/110/100',
  },
  {
    image: 'https://placekitten.com/600/410',
    caption:
      'Quisque metus nisi, consequat et molestie eget, facilisis ac odio. Nam lorem libero, efficitur ac velit at, egestas tempor arcu. Nullam pharetra ex eget orci lobortis malesuada. Maecenas eget porta felis. Aliquam porttitor, nibh nec ullamcorper fermentum, eros velit lobortis justo, pretium consectetur turpis enim ut nunc. Fusce convallis, ex ut ultrices sodales, ante quam venenatis arcu, vitae mollis magna urna vel eros. Aliquam a sapien nisi. Nullam convallis malesuada suscipit. ',
    type: 'image',
    source_type: 'instagram',
    source_link: 'https://instagram.com/embedsocial/',
    date: '2019-01-12 03:00:00',
    likes: '0',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/150/100',
  },
  {
    image: 'https://placekitten.com/600/420',
    caption: '',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://instagram.com/embedsocial/',
    date: '2017-01-21 03:00:00',
    likes: '9866555',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/100/150',
  },
  {
    image: 'https://placekitten.com/600/430',
    caption:
      'Etiam eu blandit nisi. Aliquam rutrum faucibus mauris, sed egestas odio viverra at. In elementum sit amet sapien vitae bibendum.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://www.facebook.com/EmbedSocial/',
    date: '2019-12-12 03:00:00',
    likes: '2',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/120/120',
  },
  {
    image: 'https://placekitten.com/600/440',
    caption:
      'Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://instagram.com/embedsocial/',
    date: '2018-04-12 03:00:00',
    likes: '12343',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/50/50',
  },
];

const cardContainer = document.querySelector('.card-container');
const loadMoreBtn = document.querySelector('#load-more');

let visibleCards = 4;
let totalCards = data.length;

function renderCards(start, end) {
  for (let i = start; i < end; i++) {
    const cardData = data[i];

    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.source = cardData.source_type;

    const cardProfile = document.createElement('div');
    cardProfile.classList.add('card-profile');

    const nameDateWrapper = document.createElement('div');
    nameDateWrapper.classList.add('name-date-wrapper');

    const profileImage = document.createElement('img');
    profileImage.src = cardData.profile_image;
    profileImage.classList.add('profile-logo');
    cardProfile.appendChild(profileImage);

    cardProfile.appendChild(nameDateWrapper);

    // date
    const name = document.createElement('p');
    name.classList.add('card-name');
    name.textContent = cardData.name;
    nameDateWrapper.appendChild(name);

    const date = document.createElement('p');
    date.classList.add('card-date');
    const dateStr = new Date(cardData.date);
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(
      dateStr
    );
    const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(
      dateStr
    );
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(
      dateStr
    );
    date.textContent = `${day} ${month} ${year}`;
    nameDateWrapper.appendChild(date);

    // logo
    const logoImage = document.createElement('img');
    let logoSrc = '';
    if (cardData.source_type === 'facebook') {
      logoSrc = 'icons/facebook.svg';
    } else if (cardData.source_type === 'instagram') {
      logoSrc = 'icons/instagram-logo.svg';
    } else if (cardData.source_type === 'twitter') {
      logoSrc = 'icons/twitter.svg';
    }
    logoImage.src = logoSrc;
    logoImage.classList.add('logo');

    card.appendChild(cardProfile);
    cardProfile.appendChild(logoImage);

    // img
    const cardImageWrapper = document.createElement('div');
    cardImageWrapper.classList.add('card-image-wrapper');
    const image = document.createElement('img');
    image.src = cardData.image;
    cardImageWrapper.appendChild(image);
    card.appendChild(cardImageWrapper);

    const caption = document.createElement('p');
    caption.textContent = cardData.caption;
    card.appendChild(caption);

    // Likes
    const likes = document.createElement('p');
    likes.classList.add('card-likes');
    likes.innerHTML = `
  <img class="like" src="icons/heart.svg">
  <span class="like-count">${cardData.likes}</span>
`;
    card.appendChild(likes);

    const likeButton = likes.querySelector('.like');
    const likeCount = likes.querySelector('.like-count');
    let isLiked = false;

    likeButton.addEventListener('click', () => {
      if (!isLiked) {
        likeButton.src = 'icons/heart-filled.svg';
        likeCount.textContent = ++cardData.likes;
        isLiked = true;
      } else {
        likeButton.src = 'icons/heart.svg';
        likeCount.textContent = --cardData.likes;
        isLiked = false;
      }
    });

    cardContainer.appendChild(card);
  }
}

renderCards(0, visibleCards);

function loadMoreCards() {
  const nextVisibleCards = visibleCards + 4;

  if (nextVisibleCards >= totalCards) {
    loadMoreBtn.disabled = true;
  }

  renderCards(visibleCards, nextVisibleCards);
  visibleCards = nextVisibleCards;
}

loadMoreBtn.addEventListener('click', loadMoreCards);

// Light/dark theme
const lightThemeRadio = document.querySelector('#lightTheme');
const darkThemeRadio = document.querySelector('#darkTheme');
const body = document.querySelector('body');
const sidebar = document.querySelector('.sidebar');

function setTheme(theme) {
  if (theme === 'lightTheme') {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    sidebar.classList.remove('dark-theme');
    sidebar.classList.add('light-theme');
  } else if (theme === 'darkTheme') {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    sidebar.classList.remove('light-theme');
    sidebar.classList.add('dark-theme');
  }
}

lightThemeRadio.addEventListener('change', () => {
  setTheme('lightTheme');
});

darkThemeRadio.addEventListener('change', () => {
  setTheme('darkTheme');
});

// change the bg of the cards on input
const cardBackgroundColorInput = document.getElementById('cardBackgroundColor');

cardBackgroundColorInput.addEventListener('input', function () {
  const newColor = cardBackgroundColorInput.value;
  const cards = document.querySelectorAll('.card');

  cards.forEach(function (card) {
    card.style.backgroundColor = newColor;
  });
});

// space between cards
const cardSpaceBetweenInput = document.getElementById('cardSpaceBetween');

cardSpaceBetweenInput.addEventListener('input', function () {
  const spaceBetween = this.value;
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    card.style.margin = spaceBetween;
  });
});

// filter
const filterBySource = document.getElementsByName('filterBySource');

for (let i = 0; i < filterBySource.length; i++) {
  filterBySource[i].addEventListener('click', function () {
    const selectedSource = this.value;

    for (let j = 0; j < cardContainer.children.length; j++) {
      const card = cardContainer.children[j];
      const source = card.dataset.source;

      if (selectedSource === 'all' || selectedSource === source) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  });
}

// number of columns
const numberOfColumnsSelect = document.getElementById('numberOfColumns');

function adjustColumns() {
  const numberOfColumns = numberOfColumnsSelect.value;
  cardContainer.style.gridTemplateColumns = `repeat(${numberOfColumns}, 1fr)`;
}

numberOfColumnsSelect.addEventListener('change', adjustColumns);
