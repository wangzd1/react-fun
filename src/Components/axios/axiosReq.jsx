import axios from 'axios';
import 'antd/dist/antd.min.css';
import { message } from 'antd';

export default class axiosReq{
    static axiospost(url,data,fn){
        console.log('bbz');
        axios.post('http://192.168.10.4:82'+url,data)
          .then(function (response) {
            fn(response.data)
          })
          .catch(function (error) {
            // message.error('请求异常！');
            console.log(error.response);
          })
    }
}