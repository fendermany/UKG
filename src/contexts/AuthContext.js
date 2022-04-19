import { createContext } from 'react';
import Store from './../store/store';

const store = new Store();

export const AuthContext = createContext({
	store,
});
