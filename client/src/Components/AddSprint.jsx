import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import api from '../api';

class AddSprint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      status: 0, // display what when the menu is showing? 0 - not submitted, 1 - pending, 2 - success, 3 - failed
    };

    this.titleChange = this.titleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const title = this.state.title;
    const description = 'In sprint add form form';
    this.setState({ status: 1 });
    api.addSprint(title).then((res) => {
      if (!res) {
        this.setState({ status: 3 }); return;
      }
      this.setState({ status: 2 });
      this.props.updateSprintList();
      this.props.history.push(`/sprint/${res.id}`);
    });
  }

  titleChange(e) {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }

  render() {
    let interior = (
      <div>
        <TextField required id="title" label="Sprint Name" defaultValue={this.state.title} margin="normal" onChange={this.titleChange} />
        <Button type="submit">
        Save New Sprint
        </Button>

      </div>
    );

    if (this.state.status === 1) {
      interior = (
        <div>
Saving...
        </div>
      );
    }
    if (this.state.status === 2) {
      interior = (
        <div>
Success!
        </div>
      );
      setTimeout(() => {
        this.setState({ status: 0, title: '' });
      }, 1000);
    }
    if (this.state.status === 3) {
      interior = (
        <div>
Failed to Save!
        </div>
      );
      setTimeout(() => {
        this.setState({ status: 0 });
      }, 1000);
    }

    return (
      <div style={{textAlign: 'center'}}>
        <form onSubmit={this.onSubmit}>
          <div>
            {interior}
          </div>
        </form>
      </div>
    );
  }
}

export default AddSprint;
