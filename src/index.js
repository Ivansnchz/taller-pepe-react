import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
// The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();
  return (
    <div className="index-container">
    {/* Added features */}

    <Security {...config} onAuthRequired={authHandler}>
      <Switch>
        <Route path="/" component={Home} />
        {/* any of the routes you need secured should be registered as SecureRoutes */}
      
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Security>
  </div>
  )
}
