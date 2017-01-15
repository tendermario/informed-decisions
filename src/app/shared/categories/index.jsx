import React from 'react';

class Categories extends React.Component {

  render() {
    // const categories = DB.drugs.map(drug => {
    //   return <Category>{drug.name}</Category>
    // }

    return (
      <div>
	     // {categories}
      </div>
    )
  }

}

export default Categories;


const Category = props => {

  return (
    <div className="drug-category">{props.children}</div>
  )

}
