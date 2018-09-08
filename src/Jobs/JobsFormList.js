import React from "react";
import JobsForm from "./JobsForm";
import PropTypes from "prop-types";

export default class JobsFormList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    const jobForms = [];
    for (let i = 0; i < this.props.jobCount; i++) {
      jobForms.push(<JobsForm key={i} />);
    }

    return (
      <div>
        {[...jobForms]}
      </div>
    )
  }
}

JobsFormList.propTypes = {
  jobCount: PropTypes.number.isRequired
};
