import axios from 'axios';

const DOMAIN = 'http://192.168.0.60:4000';

export const request = async (method, url, data) => {
    return await axios({
          method,
          url : `${DOMAIN}${url}`,
          data
      })
      .then(res => res.data)
      .catch(error => console.log(error));
};
