import React from 'react';
import 'antd/dist/antd.min.css';
import { Input } from 'antd';

export default class C1 extends React.Component {
  render() {
    return (
      <div>
          def<Input placeholder="default size" style={{width: '200px',margin: '0 8px 8px 0'}}/>
      </div>
    );
  }
}