import HomePage from "./pages/Home/Home";

import "./App.scss";

export default function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useNavigate hook we can use at this level to ensure we have security around our routes.
  return (
    <div className="landingPage">
      <HomePage />
    </div>
  );
}

