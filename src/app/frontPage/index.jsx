import React from 'react';
import { Link } from 'react-router';
import Header from 'app/shared/header/index';
import Categories from 'app/shared/categories/';

class FrontPage extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <Header />
        <Link to='/drug/0'>Heroin</Link><br/>
        <Link to='/drug/1'>Cannabis</Link><br/>
        <Link to='/drug/2'>Cocaine</Link><br/>
        <Link to='/drug/3'>LSD</Link><br/>
        <Link to='/drug/3'>Mushrooms</Link><br/>
        <Link to='/drug/3'>Fentanyl</Link><br/>
        <Link to='/drug/3'>Opium</Link><br/>
        <Link to='/drug/3'>MDMA</Link><br/>
        <Link to='/drug/3'>GHB</Link><br/>
        <Link to='/drug/3'>Alcohol</Link><br/>
        <Link to='/drug/3'>Caffeine</Link><br/>
        <Link to='/drug/3'>Crack</Link><br/>
        <Link to='/drug/3'>Meth</Link><br/>
        <Link to='/drug/3'>PCP</Link><br/>
        <Link to='/drug/3'>Cartems Donuts</Link><br/>
      </div>
    )
  }

}

export default FrontPage
