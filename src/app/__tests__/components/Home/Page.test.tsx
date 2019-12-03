import React from 'react';
import { render } from 'enzyme';
import { testId } from '@app/__tests__/helpers/utils';
import { artist } from '@app/__mocks__/data';
import Page, { PageProps } from '@components/Home/Page';

const mockProps = {
  artists: [artist]
} as PageProps;

describe('[Home]: <Page />', () => {
  it('Should render artist item', () => {
    const wrapper = render(<Page {...mockProps} />);
    expect(wrapper.find('.artist')).toHaveLength(1);
    expect(wrapper.find('.artist img').attr('src')).toBe(artist.image);
    expect(wrapper.find(testId('title')).text()).toBe(artist.name);
    expect(wrapper.find(testId('subtitle')).text()).toBe(`Popularidad • ${artist.popularity}`);
  });
});
