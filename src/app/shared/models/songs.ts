export interface Song {
  id: number;
  idAlbum: number;
  name: string;
  spotifyUrl: string;
  previewUrl: string | null;
  durationMs: string;
  explicit: string;
}
