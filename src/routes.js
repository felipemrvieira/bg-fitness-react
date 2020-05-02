import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
// import UnidadeIndexPage from './pages/Cursos/CursosIndexPage';
// import IndexPage from './pages/Franquia/FranquiaIndexPage';

const Routes = () => (
  <HashRouter>
    <Switch>
      {/* <Route exact path="/" component={IndexPage} />

      <Route exact path="/:id" component={UnidadeIndexPage} />
      <Route exact path="/:id/blog" component={BlogUnidade} />
      <Route path="/signup" component={() => <h1>SignUp</h1>} /> */}
    </Switch>
  </HashRouter>
);

export default Routes;
