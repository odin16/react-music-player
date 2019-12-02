import config from '@src/config';
import { pick } from 'ramda';
import { Artist, Album, Song } from './models';

export interface ApiResponse<T> {
  data: T;
}

const artistReducer = <T>(data: any): T => {
  const artist = (a: any) => ({
    location: `/artist/${a.id}/`,
    spotifyUrl: a.spotify_url,
    spotifyId: a.spotify_id,
    createdAt: new Date(a.created_at),
    updatedAt: new Date(a.updated_at),
    ...(pick(['id', 'name', 'image', 'genres', 'popularity'], a) as any)
  });

  return Array.isArray(data) ? data.map(a => artist(a)) : artist(data);
};

export const getAllArtists = async () => {
  try {
    const res = await fetch(`${config.API_URL}/artists`);
    const { data = [] }: ApiResponse<any[]> = await res.json();

    return artistReducer<Artist[]>(data);
  } catch (err) {
    console.error('The list of artists of the api could not be consulted.', err);
    return [];
  }
};

export const getArtistById = async (id: number) => {
  try {
    const res = await fetch(`${config.API_URL}/artists/${id}`);
    const { data = {} }: ApiResponse<any> = await res.json();

    return artistReducer<Artist>(data);
  } catch (err) {
    console.error(`Error when consulting the artist: ${id}`, err);
  }
};

const albumReducer = <T>(data: any, idArtist: number): T => {
  const album = (a: any) => ({
    idArtist,
    location: `/album/${a.id}/`,
    spotifyUrl: a.spotify_url,
    totalTracks: a.total_tracks,
    ...(pick(['id', 'name', 'image'], a) as any)
  });

  return Array.isArray(data) ? data.map(a => album(a)) : album(data);
};

export const getAllAlbums = async (idArtist: number) => {
  try {
    const res = await fetch(`${config.API_URL}/artists/${idArtist}/albums`);
    const { data = [] }: ApiResponse<any[]> = await res.json();

    return albumReducer<Album[]>(data, Number(idArtist));
  } catch (err) {
    console.error(`Couldn't check artist: "${idArtist}" albums.`, err);
    return [];
  }
};

export const getAllSongs = async (idAlbum: number): Promise<Song[]> => {
  try {
    const res = await fetch(`${config.API_URL}/albums/${idAlbum}/songs`);
    const { data = [] }: ApiResponse<any[]> = await res.json();

    return data.map(e => ({
      idAlbum,
      spotifyUrl: e.spotify_url,
      previewUrl: e.preview_url,
      durationMs: e.duration_ms,
      ...pick(['id', 'name', 'explicit'], e)
    })) as Song[];
  } catch (err) {
    console.error(`Could not check the list of songs for the album: "${idAlbum}".`, err);
    return [];
  }
};

export const getAllGenres = async (): Promise<string[]> => {
  try {
    const res = await fetch(`${config.API_URL}/genres`);
    const { data = [] }: ApiResponse<string[]> = await res.json();

    return data;
  } catch (err) {
    console.error(`The genre list could not be consulted.`, err);
    return [];
  }
};

export const getRandomSong = async (genreName: string) => {
  try {
    const res = await fetch(`${config.API_URL}/genres/${genreName}/random_song`);
    const { data = {} }: ApiResponse<any> = await res.json();

    return {
      spotifyUrl: data.spotify_url,
      previewUrl: data.preview_url,
      durationMs: data.duration_ms,
      ...pick(['id', 'name', 'explicit'], data)
    } as Song;
  } catch (err) {
    console.error(`Could not check the random song with gender: "${genreName}".`, err);
  }
};
