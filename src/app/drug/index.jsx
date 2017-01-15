import React from 'react';
import Header from 'app/shared/header/index';

class Drug extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drug: {}
    }
  }

  componentDidMount() {
    this.setState({
      drug: DB.drugs[this.props.params.id]
    });
  }

  render() {
    return (

      <div className="container text-center">

        <h1>Informed Decisions</h1>

        <h2>{ this.state.drug.name }</h2>

        <h3>What is it?</h3>

        <p>{ this.state.drug.description }</p>

        <h3>Risks</h3>

        <p>{ this.state.drug.risks }</p>

        <h3>How to Take It</h3>

        <p>{ this.state.drug.howto }</p>

        <h3>Anonymous Comments</h3>

        <p>Dont do this one.</p>

        <div>
          <span className="glyphicon glyphicon-map-marker" />
          <p>Current alert has been issued for Heroin laced with Fentynal in British Columbia</p>
        </div>

      </div>

    );
  }

}

export default Drug;
