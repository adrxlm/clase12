// tabla de libros y utilizar relay
// y crear un componente contendor con queryRender que use fragment para las filas
import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from 'App/environment';
import { Row } from 'react-bootstrap';
import LoadingSpinner from 'Common/LoadingSpinner';
import ErrorAlert from 'Common/ErrorAlert';
import AdminBooksListItem from './AdminBooksListItem';

const bookListQuery = graphql`
  query BooksListQuery($categoryId: String, $count: Int!, $cursor: String) {
    books(first: $count, categoryId: $categoryId, after: $cursor) {
      edges {
        node {
          ...BooksListItem_book
        }
      }
    }
  }
`;

const AdminBooksListRenderer = ({ books, match }) =>
  <QueryRenderer
    environment={environment}
    query={bookListQuery}
    variables={{
      categoryId: match && match.params.id,
      count: 12
    }}
    render={({ error, props }) => {
      if (error)
        return (
          <Row>
            <ErrorAlert error={error} />
          </Row>
        );

      if (props)
        return (
          <Row>
            <AdminBooksListItem key={key} book={edge.node} />
          </Row>
        );

      return (
        <Row>
          <LoadingSpinner />
        </Row>
      );
    }}
  />;

export default AdminBooksListRenderer;

















const bookListQuery = graphql`
  query BooksListQuery($categoryId: String, $count: Int!, $cursor: String) {
    books(first: $count, after: $cursor) {
      edges {
        node {
          ...BooksListItem_book
        }
      }
    }
  }
`;

const AdminBooksList = ({ items }) => (
  <Col md={12}>
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Label</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.label}</td>
            <td>
              <ButtonToolbar className="AdminBooksList-toolbar">
                <Button bsStyle="info" bsSize="xsmall">Edit</Button>
                <Button bsStyle="danger" bsSize="xsmall">Remove</Button>
              </ButtonToolbar>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Col>
);
