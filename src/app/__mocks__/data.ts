import { Artist, Album, Song } from '@shared/index';

export const artist: Artist = {
  id: 2,
  name: 'Metallica',
  location: 'artist/2',
  image: 'https://i.scdn.co/image/5a06711d7fc48d5e0e3f9a3274ffed3f0af1bd91',
  genres: ['hard_rock', 'metal', 'old_school_thrash', 'rock', 'speed_metal', 'thrash_metal'],
  popularity: '85.0',
  spotifyUrl: 'https://open.spotify.com/artist/2ye2Wgw4gimLv2eAKyk1NB',
  spotifyId: '2ye2Wgw4gimLv2eAKyk1NB',
  createdAt: new Date('2019-08-27T21:23:32.865Z'),
  updatedAt: new Date('2019-08-27T21:23:32.865Z')
};

export const album: Album = {
  id: 20,
  idArtist: 2,
  location: 'album/20',
  name: 'Do I Wanna Know?',
  image: 'https://i.scdn.co/image/3bf3bf6517714e615249ecc9535fb2d7295190a3',
  spotifyUrl: 'https://open.spotify.com/album/0GrKYRlFm3vI2YOZZ9mHNs',
  totalTracks: 2
};

export const song: Song = {
  id: 165,
  idAlbum: 20,
  name: '2013',
  spotifyUrl: 'https://open.spotify.com/track/3FiVtA8z2yUOyw7MiHjiVM',
  previewUrl:
    'https://p.scdn.co/mp3-preview/82bd3ffd727cc8c743e55ad3c84737c5fda147c2?cid=76ef95421e3a4e7aac6358eba6727257',
  durationMs: '146887',
  explicit: 'f'
};

export const suggestedSong: Song = {
  id: 164,
  idAlbum: 20,
  name: 'Do I Wanna Know?',
  spotifyUrl: 'https://open.spotify.com/track/7xmwLmkoWpghkq8jyEhtbx',
  previewUrl:
    'https://p.scdn.co/mp3-preview/d0d17c547f9b96a808ca4a248fb5603d29c35f69?cid=76ef95421e3a4e7aac6358eba6727257',
  durationMs: '273424',
  explicit: 'f'
};
