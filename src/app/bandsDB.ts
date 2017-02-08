import {Band} from './band';

export const BANDS: Band[] = [
  {
      id: 1,
      name: 'Metallica',
      image: 'https://pbs.twimg.com/profile_images/766360293953802240/kt0hiSmv.jpg',
      genre: 'Metal',
      members: ['James Hetfield', 'Lars Ulrich', 'Roberto Trujillo', 'Kirk Hammet'],
      albums: ['Master of puppets', 'Black Album']
  },
  {
      id: 2,
      name: 'Pink Floyd',
      image: 'https://img.discogs.com/RPhPKJ8PWTZCQjs3zU8W8okB4GE=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-45467-1405593302-8633.jpeg.jpg',
      genre: 'Rock',
      members: ['Roger Waters', 'David Guilmour', 'Syd Barret', 'Richard Wright'],
      albums: ['The Dark Side Of The Moon', 'The Wall', 'Animals']
  },
  {
      id: 3,
      name: 'A Tribe Called Quest',
      image: 'http://www.nbc.com/the-tonight-show/content/sites/nbcutsjf/files/styles/bit_stacked_resized/public/images/2015/11/06/a-tribe-called-quest.jpg?itok=Ss_g5QJF',
      genre: 'Rap',
      members: ['Q-Tip', 'Ali Shaheed', 'Jarobi White'],
      albums: ['The low end theory', 'We Got It From Here... Thank You 4 Your Service']
  }];
