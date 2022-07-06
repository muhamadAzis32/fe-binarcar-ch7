import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Cars from "./page/Cars";
import Login from "./page/Login";
import Register from "./page/Register";
import Protected from "./components/Protected";

import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={
            <Protected>
              <Cars />
            </Protected>
          } />
          <Route
            path="/login"
            element={
              <GoogleOAuthProvider clientId="965030953893-b39eu89jnterq3sd8bdo013oja0gq54m.apps.googleusercontent.com">
                <Login />
              </GoogleOAuthProvider>
            }
          />
          <Route
            path="/register"
            element={
              <GoogleOAuthProvider clientId="965030953893-b39eu89jnterq3sd8bdo013oja0gq54m.apps.googleusercontent.com">
                <Register />
              </GoogleOAuthProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;