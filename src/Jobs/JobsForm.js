import React from "react";
import {ControlLabel, FormControl, FormGroup, Panel} from "react-bootstrap";

export default class JobsForm extends React.Component {
  render() {
    return (
      <Panel>
        <Panel.Body>
          <form>
            <FormGroup controlId="selectOccupation">
              <ControlLabel>What is your occupation</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="select">select</option>
                <option value="other">...</option>
              </FormControl>
            </FormGroup>
            <FormGroup
              controlId="companyName"
            >
              <ControlLabel>Company Name</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter text"
              />
            </FormGroup>
            <FormGroup
              controlId="incomeValue"
            >
              <ControlLabel>Income</ControlLabel>
              <FormControl
                type="number"
                placeholder="Enter value"
              />
            </FormGroup>
          </form>
        </Panel.Body>
      </Panel>
    )
  }
}
