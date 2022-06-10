import { Provider } from 'react-redux';
import './App.css';
import { store } from './reduxtoolkit/store';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
