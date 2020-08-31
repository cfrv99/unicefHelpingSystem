import React from "react";
import { Menu, Container, Grid } from "semantic-ui-react";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import { InputFile } from "semantic-ui-react-input-file";

export const CreatePost = () => {
  const genderOptions = [
    { key: "m", text: "Male", value: "male" },
    { key: "f", text: "Female", value: "female" },
    { key: "o", text: "Other", value: "other" },
  ];

  const handleChange = (e) => {
    console.log(e.target.files[0]);
  };
  return (
    <Container>
      <Grid >
        <Grid.Row>
          <Grid.Column width={10}>
            <Form>
              <Form.Group widths="equal">
                <Form.Field
                  id="form-input-control-first-name"
                  control={Input}
                  placeholder="First name"
                />
                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  placeholder="Last name"
                />
                <Form.Field
                  control={Select}
                  options={genderOptions}
                  placeholder="Gender"
                  search
                  searchInput={{ id: "form-select-control-gender" }}
                />
              </Form.Group>
              <Form.Field
                id="form-textarea-control-opinion"
                control={TextArea}
                placeholder="Opinion"
              />
              <Form.Field
                id="form-input-control-error-email"
                control={Input}
                placeholder="Xesteliyin Adi"
              />
              <InputFile
                input={{
                  id: "input-control-id",
                  onChange: handleChange,
                }}
              />
              <hr />
              <br />
              <Form.Field
                id="form-input-control-error-email"
                control={Input}
                placeholder="+000 000 00 00"
              />
              <Form.Field
                id="form-input-control-error-email"
                control={Input}
                placeholder="Bank Card Nomresi"
              />
              <Form.Field
                id="form-button-control-public"
                control={Button}
                content="Daxil Et"
              />
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
