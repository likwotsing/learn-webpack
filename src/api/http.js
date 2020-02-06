let host = 'http://192.168.1.1'

if (!IS_DEV) {
  host = 'http://www.baidu.com'
}

let url = host + '/api/v1/getUserInfo'

import axios from 'axios'

export const getUserInfo = () => axios.get(url)