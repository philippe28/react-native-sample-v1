/* eslint-disable no-undef */
/* eslint-disable no-global-assign */
import initialState from '../States/initial.state';

const ENV = process.env.NODE_ENV === 'production' ? 'prod' : 'hom';
const environment = initialState.environment[ENV];

if (__DEV__) {
  XMLHttpRequest = GLOBAL.originalXMLHttpRequest
    ? GLOBAL.originalXMLHttpRequest
    : GLOBAL.XMLHttpRequest;
}

const partner = {
  teste: {
    url: 'https://teste.com/api/',
  },
};

export default {
  environment,
  partner,
};
