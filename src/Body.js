import React from "react";

export default class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      body: "Isi Body ",
      subbody: "Sub Body",
    };
  }

  render() {
    return (
      <>
        <p>{this.state.body} </p>
        <p>{this.state.subbody} </p>
      </>
    );
  }
}
