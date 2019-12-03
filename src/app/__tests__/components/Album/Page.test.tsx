import React from 'react';
import { render } from 'enzyme';
import { testId } from '@app/__tests__/helpers/utils';
import { artist, album, song, suggestedSong } from '@app/__mocks__/data';
import Page, { msAllSongs } from '@components/Album/Page';
import { msToTime } from '@shared/index';

const mockProps: any = {
  album,
  songs: [song],
  suggestedSongs: [suggestedSong]
};

describe('[Album]: <Page />', () => {
  const wrapper = render(<Page {...mockProps} />);

  it('Should render album description', () => {
    expect(wrapper.find('.album')).toHaveLength(1);
    expect(wrapper.find('.album img').attr('src')).toBe(album.image);
    expect(wrapper.find(testId('album-name')).text()).toBe(`Álbum • ${album.name}`);
    expect(wrapper.find(testId('time-songs')).text()).toBe(
      `${mockProps.songs.length} canciones • ${msToTime(msAllSongs(mockProps.songs))}`
    );
  });

  it('Should render album songs', () => {
    expect(wrapper.find(`${testId('album-songs')} .song-item`)).toHaveLength(1);
    expect(wrapper.find(`${testId('suggested-songs')} .song-item`)).toHaveLength(1);
  });
});
