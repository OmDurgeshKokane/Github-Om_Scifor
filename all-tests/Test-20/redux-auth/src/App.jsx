import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./redux/authSlice";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogin = () => {
    const dummyUser = { name: "John Doe", email: "john@example.com" };
    dispatch(login(dummyUser)); // Dispatch login action
  };

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-2xl font-bold">Redux Authentication</h1>

      {isAuthenticated ? (
        <div className="text-center">
          <p className="text-lg">Welcome, {user.name}!</p>
          <button onClick={handleLogout} className="px-4 py-2 mt-2 bg-red-500 text-white rounded">
            Logout
          </button>
        </div>
      ) : (
        <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 text-white rounded">
          Login
        </button>
      )}
    </div>
  );
}

export default App;
