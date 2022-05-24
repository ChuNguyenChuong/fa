import styles from './app.module.css';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';

export function App() {
  return (
    <>
      <div className="flex text-red-500">check</div>
      <Pagination defaultCurrent={1} total={99} />
    </>
  );
}

export default App;
