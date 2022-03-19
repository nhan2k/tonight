import React from 'react';

import axios from 'axios';

export default class Coupons extends React.Component {
  state = {
    coupons: []
  }

  componentDidMount() {
    axios.get(`https://sneakershopfiveteam.herokuapp.com/coupon`)
      .then(res => {
        const coupons = res.data;
        this.setState({ coupons });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <ul>
        { this.state.coupons.map(person => <li>{person.code}</li>)}
      </ul>
    )
  }
}