import React from 'react';
import { render } from 'enzyme';
import { testId } from '@app/__tests__/helpers/utils';
import { artist, album } from '@app/__mocks__/data';
import Page from '@components/Artist/Page';

const mockProps: any = {
  artist: artist,
  albums: [album]
};

describe('[Artist]: <Page />', () => {
  const wrapper = render(<Page {...mockProps} />);

  it('Should render artist banner', () => {
    const image = wrapper
      .find(testId('banner'))
      .css('background-image')
      .slice(4, -1)
      .replace(/"/g, '');
    expect(image).toBe(artist.image);
    expect(wrapper.find(`.name-artist ${testId('section-title')}`).text()).toBe(artist.name);
    expect(wrapper.find(testId('popularity')).text()).toBe(`Popularidad • ${artist.popularity}`);
  });

  it('Should render album', () => {
    expect(wrapper.find('.album')).toHaveLength(1);
    expect(wrapper.find('.album img').attr('src')).toBe(album.image);
    expect(wrapper.find(testId('title')).text()).toBe(album.name);
    expect(wrapper.find(testId('subtitle')).text()).toBe(`Canciones • ${album.totalTracks}`);
  });
});
