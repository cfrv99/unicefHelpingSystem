import React, { useState } from "react";
import { Container, Grid, GridColumn } from "semantic-ui-react";
import { Card, Icon, Image, Button } from "semantic-ui-react";

export const Search = () => {
  const [person, setPerson] = useState(null);
const [loading,setLoading] = useState(false);
  const handleSeacrh=()=>{
      setLoading(true);
      setTimeout(()=>{
        setPerson("salam")
        setLoading(false);
      },2000)
  }
  return (
    <Container>
      <Grid columns={3} centered>
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column>
          {!person && (
              <Card>
                <Image
                  src="https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>Name</Card.Header>
                  <Card.Meta>Card Number</Card.Meta>
                  <Card.Description>
                    Daniel is a comedian living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="user" />
                    10 Friends
                  </a>
                </Card.Content>
              </Card>
            )}

            {person && (
              <Card>
                <Image
                  src="https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>Daniel</Card.Header>
                  <Card.Meta>Joined in 2016</Card.Meta>
                  <Card.Description>
                    Daniel is a comedian living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="user" />
                    10 Friends
                  </a>
                </Card.Content>
              </Card>
            )}

            <Button style={{margin:0}} onClick={handleSeacrh} loading={loading} primary>
              Axtar
            </Button>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
