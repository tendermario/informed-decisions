import React from 'react';
import { Link } from 'react-router';

class Categories extends React.Component {

  render() {
    const categories = DB.drugs.map((drug, index) => {
       return <Category key={index} index={index}>{drug.name}</Category>
    }

    return (
      <div>
	{categories}
      </div>
    )
  }

}

export default Categories;


const Category = props => {
  return (
    <Link to=`/drug/{props.index}`>{props.children}</Link>
  )

}
