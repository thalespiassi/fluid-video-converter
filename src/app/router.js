import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Start from './screens/Start';

export default function Router() {
  return (
    <MemoryRouter>
      <>
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
        </Switch>
      </>
    </MemoryRouter>
  );
}
