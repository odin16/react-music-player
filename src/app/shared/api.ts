import config from '@src/config';
import { pick } from 'ramda';

export interface ApiResponse<T> {
  data: T;
}

export const getAllArtists = async () => {
  try {
    const res = await fetch(`${config.API_URL}/artists`);
    const { data = [] }: ApiResponse<any[]> = await res.json();
    return data.map(e => ({
      ...pick(['id', 'name', 'image', 'genres', 'popularity'], e),
      spotifyUrl: e.spotify_url,
      spotifyId: e.spotify_id,
      createdAt: e.created_at,
      updatedAt: e.updated_at
    }));
  } catch (err) {
    console.error('The list of artists of the api could not be consulted.', err);
    return [];
  }
};
