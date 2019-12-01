export interface PlayerTimes {
  bufferedTime: number;
  currentTime: number;
  duration: number;
  percentBuffered: string;
  percentCompleted: string;
}

export interface SelectedSong {
  artistId: number;
  albumId: number;
  songId: number;
}
