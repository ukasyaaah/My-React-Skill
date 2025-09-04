import React from "react";

export default class Title extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "First Title",
      subtitle: "First Subtitle",
    };
  }

  render() {
    return (
      <>
        <h1>{this.state.title} </h1>
        <h3>{this.state.subtitle} </h3>
      </>
    );
  }
}
