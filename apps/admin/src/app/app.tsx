import styles from './app.module.css';
import 'antd/dist/antd.css';
import { useRoutes } from 'react-router-dom';
import { rootRouters } from './routes/routes';

export function App() {
  const rootRouter = useRoutes(rootRouters);
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{rootRouter}</>;
}

export default App;
