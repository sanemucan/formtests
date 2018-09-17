import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';

// let's create the react form component here for a person
// starting with the person's name it will receive the observable person data as a prop.

@observer
export default class PersonForm extends Component {
  constructor(props) {
    super(props);
    this.updateProperty = this.updateProperty.bind(this);
    this.onchange = this.onchange.bind(this);
  }

  updateProperty(key, value) {
    this.props.person[key] = value;
  }

  onChange(event) {
    this.updateProperty(event.target.name, event.target.value);
  }

  /*
   when user types in the field, the onChange handler gets the corresponding person property to update "fullName"
   then updates the person data by calling the updateProperty method with the new value
   updates the person data with the updateProperty method
   field will be re-rendered by React with the updated value by the component being a Mobx observer that is reacting to changes in "observable person"
   */

  render() {
    const { person } = this.props;
    return (
      <div>
        <h1>My Person Form</h1>
        <form>
          <input type="text" name="fullName" value={person.fullName} onChange={this.onChange} />
        </form>
      </div>
    );
  }
}
