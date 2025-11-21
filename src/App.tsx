import { BrowserRouter, useRoutes } from 'react-router-dom'
import './App.css'
import routes from './routes/routes';
import AuthProvider from './context/AuthContext';

function AppRoutes()  {
  const element = useRoutes(routes);
  return element;
}

function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
