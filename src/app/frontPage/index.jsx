import React from 'react';
import { Link } from 'react-router';
import Header from 'app/shared/header/index';
import Categories from 'app/shared/categories/';

class FrontPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
	<Link to='/drug'>Drug</Link>
      </div>
    )
  }

}

export default FrontPage
