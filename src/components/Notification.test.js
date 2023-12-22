import { render, screen } from '@testing-library/react';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Notification from './Notification';

const mockStore = configureStore([]);

describe('Notification component', () => {
  it('should render notification from store', () => {
    const initialState = { notification: 'Mock data' };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Notification />
      </Provider>
    );

    expect(screen.getByText(initialState.notification)).toBeInTheDocument();
  });
});
