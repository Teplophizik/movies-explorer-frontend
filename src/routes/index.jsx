import { Route, Switch } from "react-router-dom";

import DefaultLayout from "../pages/_layouts/default";
import BlankLayout from "../pages/_layouts/blank";
import WFooterLayout from "../pages/_layouts/wFooter";
import AuthLayout from "../pages/_layouts/auth";

import ProtectedRoute from "../components/ProtectedRoute";
import Main from "../pages/Main";
import Movies from "../pages/Movies";
import SavedMovies from "../pages/SavedMovies";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <DefaultLayout>
          <Main />
        </DefaultLayout>
      </Route>
      <ProtectedRoute path="/movies">
        <DefaultLayout>
          <Movies />
        </DefaultLayout>
      </ProtectedRoute>
      <ProtectedRoute path="/saved-movies">
        <DefaultLayout>
          <SavedMovies />
        </DefaultLayout>
      </ProtectedRoute>
      <ProtectedRoute path="/profile">
        <WFooterLayout>
          <Profile />
        </WFooterLayout>
      </ProtectedRoute>
      <Route path="/signin">
        <AuthLayout>
          <Login />
        </AuthLayout>
      </Route>
      <Route path="/signup">
        <AuthLayout>
          <Register />
        </AuthLayout>
      </Route>
      <Route
        render={() => (
          <BlankLayout>
            <NotFound />
          </BlankLayout>
        )}
      />
    </Switch>
  );
}

export default Routes;
