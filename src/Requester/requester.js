import axios from 'axios';
import configurations from './config';

const requestTimeout = 10000;

const maximumRetry = 3;

const {environment, partner} = configurations;

const requester = async (store, service, options = {}) => {
  const {method, endpoint, source, isPartner, dynamic, timeout} = service;
  const {data = {}, header = {}} = options;
  const baseURL =
    dynamic || (isPartner ? partner[source].url : environment[source]);

  const headers =
    source === 'default'
      ? {
          Authorization: store.state.users.token,
          User: store.state.users.id,
          ...header,
        }
      : header;

  const config = {
    method,
    baseURL,
    url: endpoint,
    headers,
    validateStatus: status => (status >= 200 && status < 300) || status === 302,
    timeout: timeout || requestTimeout,
  };

  if (method === 'post') {
    config.data = data;
  }

  return axios
    .request(config)
    .then(({data: response}) => {
      console.warn(config, response);
      return [null, response];
    })
    .catch(error => {
      // retry attempts
      console.log(error);
      if (method === 'get') {
        if (!service.attempt) {
          // console.warn('try 1')
          const retryService = {
            ...service,
            attempt: 2,
          };
          return requester(store, retryService, options);
        } else if (service.attempt && service.attempt <= maximumRetry) {
          // console.warn(`try ${service.attempt}`)
          const retryService = {
            ...service,
            attempt: service.attempt + 1,
          };
          return requester(store, retryService, options);
        } else {
          // max attempt (error persists)
        }
      }
    });
};

export default requester;
