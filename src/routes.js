// routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Atividade1 from './atividades/Atividade1';
import Atividade2 from './atividades/Atividade2';
// Adicione importações para outras atividades conforme necessário

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/atividade1" component={Atividade1} />
        <Route exact path="/atividade2" component={Atividade2} />
        {/* Adicione outras rotas para as atividades subsequentes */}
      </Switch>
    </Router>
  );
}

export default Routes;
