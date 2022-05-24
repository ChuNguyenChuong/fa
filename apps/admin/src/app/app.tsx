import { useState } from 'react';
import styles from './app.module.css';
import 'antd/dist/antd.css';
import { Col, Divider, Row } from 'antd';

export function App() {
  const [check, setCheck] = useState(false);
  return (
    <>
      <div className="flex text-red-500">
        <h1>Check!</h1>
      </div>

      <Divider orientation="left">Normal</Divider>
      <Row>
        <Col span={6} order={4}>
          1 col-order-4
        </Col>
        <Col span={6} order={3}>
          2 col-order-3
        </Col>
        <Col span={6} order={2}>
          3 col-order-2
        </Col>
        <Col span={6} order={1}>
          4 col-order-1
        </Col>
      </Row>
    </>
  );
}

export default App;
