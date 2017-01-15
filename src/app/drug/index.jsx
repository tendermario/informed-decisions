import React from 'react';
import Header from 'app/shared/header/index';

class Drug extends React.Component {
  render() {
    return (

      <div className="container text-center">

        <h1>Informed Decisions</h1>

        <h2>Heroin</h2>

        <h3>What is it?</h3>

        <p>Heroin, also known as diamorphine among other names, is an opiate typically used as a recreational drug for its euphoric effects. Medically it is occasionally used to relieve pain and as a form of opioid replacement therapy alongside counseling. Heroin is typically injected, usually into a vein; however, it can also be smoked, snorted or inhaled. Onset of effects is usually rapid and lasts for a few hours.</p>

        <h3>Risks</h3>

        <p>Overdose, death, withdrawal symptoms.</p>

        <h3>How to Take It</h3>

        <p>Injection, Oral, Smoking, Insufflation, Suppository</p>

        <h3>Anonymous Comments</h3>

        <p>MY NAME IS MARIO AND I TRIED THIS AND FELT NOTHING.</p>

        <div>
          <span className="glyphicon glyphicon-map-marker" />
          <p>Current alert has been issued for Heroin laced with Fentynal in British Columbia</p>
        </div>

      </div>

    );
  }

}

export default Drug;
