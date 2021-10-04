import usersState from './users.state';
import servicesState from './services.state';

const initialState = {
  environment: {
    hom: {
      kim: 'https://teste.com/api/v1',
    },
    prod: {
      kim: 'https://teste.com/api/v1',
    },
  },
  language: 'ptBR',
  loading: false,
  users: usersState,
  services: servicesState,
};

export default initialState;
