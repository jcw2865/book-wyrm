
import React from "react";
// import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import DeleteBook from "../components/DeleteBook"
import { Container, Row, Col } from "reactstrap";


const Profile = () => {
  const { loading, user } = useAuth0();


  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (

    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>
      <Row>
        <DeleteBook userEmail={user.email}
        //delete button from list
        />
      </Row>

    </Container>

  );
};


export default Profile;
