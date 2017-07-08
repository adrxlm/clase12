import React from 'react';
import AdminBooksList from './AdminBooksList';
import { Grid, Row, Col } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

const BooksPage = props => (
  <Grid>
    <Switch>
        <Route path={`/books`} render={() => <AdminBooksList {...props} />} />
    </Switch>
  </Grid>
);

export default BooksPage;
