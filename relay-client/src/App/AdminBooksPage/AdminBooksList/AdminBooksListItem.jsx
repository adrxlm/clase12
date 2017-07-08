import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const AdminBooksListItem = ({ book }) => (
  <Col md={4}>
    <section className={styles.aisle}>
      <div className={styles.bookCard}>
        <img className={styles.cover} src={book.image} alt="Portada del libro" />
        <div className={styles.info}>
          <LinkContainer to={`/detail/${book.id}`}>
            <a href="#">{book.title.split(': ')[0]}</a>
          </LinkContainer>
          <h3 className={styles.author}>{book.author}</h3>
        </div>
      </div>
    </section>
  </Col>
);

export default createFragmentContainer(
  AdminBooksListItem,
  graphql`
    fragment AdminBooksList_book on Book {
      id
      title
      author
      image
    }
  `
);
