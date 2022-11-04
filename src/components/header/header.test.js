import React from "react";
import { ReactDOM } from "react";
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { Header } from "./header";

describe('<Header/>', () => {
    describe('Rendering div', ()=> {
        it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(
            <Provider store={store}>
            <Header />
            </Provider>, div);
          });
    })
})

// ---------------------------- Test is not finished setting up ---------------------------------