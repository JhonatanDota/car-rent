import AppRoutes from './AppRoutes';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <div>
      <UserProvider>
        <AppRoutes/>
      </UserProvider>
    </div>
  );
}

export default App;
