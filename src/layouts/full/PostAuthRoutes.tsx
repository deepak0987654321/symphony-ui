import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import AddArtist from "../../pages/post-auth/AddArtist";
import Landing from "../../pages/post-auth/Landing";
import DashboardRoutes from "../../pages/post-auth/DashboardModule/DashboardRoutes";

const PostAuthRoutes = () => {
  const DashboardRoutes = lazy(() => import('../../pages/post-auth/DashboardModule/DashboardRoutes'));
  return (
    <div className="bg-background-100 min-h-screen h-full">
      <Router>
        <Navbar />
        <div className="main-body">
<<<<<<< HEAD
        <Suspense fallback={<div>Loading...</div>}>
=======
>>>>>>> 4b58ae66c51c56e3b3d0935364b13c165be44204
          <Switch>
          <Route exact path="/" component={Landing} />
            <Route path="/add-artist" component={AddArtist} />
            <Route path="/dashboard" component={DashboardRoutes} />
          </Switch>
          </Suspense>
        </div>
      </Router>
    </div>
  );
};

export default PostAuthRoutes;
