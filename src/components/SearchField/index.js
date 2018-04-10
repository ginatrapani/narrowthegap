import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './SearchField.css';

import GapAPI from "../../GapAPI.js";

class SearchField extends React.Component {
  constructor(props) {
    super(props);

    this.clearForm = this.clearForm.bind(this);
  }

  clearForm() {
    this.typeahead.getInstance().clear();
  }
  render() {
    return (
      <Typeahead
        className="SearchField"
        ref={(typeahead) => this.typeahead = typeahead}
        onChange={(selected) => {
          this.props.history.push(`/gap/${selected[0].slug}`);
          this.clearForm();
        }}
        options={GapAPI.gaps}
        labelKey="occupation_name"
        placeholder="Find your occupation"
      />
    )
  }
}

export default withRouter(SearchField);
