import React from "react";

export default class Title extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "First Title",
      subtitle: "First Subtitle",
    };
  }
  changeTitle = () => {
    this.setState({
      title: "Ukhasyah Zufar",
    });
  };
  render() {
    return (
      <>
        <h1>{this.state.title} </h1>
        <h3>{this.state.subtitle} </h3>
        <button onClick={this.changeTitle}>Change Title</button>
      </>
    );
  }
}
