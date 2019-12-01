export const getSongs = (state: RootState) => state.album.songs;

export const getSongById = (state: RootState, songId: number) =>
  getSongs(state).find(s => s.id === songId);
