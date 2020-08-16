import React, { Component } from "react";

export default class ImgNewWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "m",
      type: "square",
    };
    this.onSize = this.onSize.bind(this);
    this.onType = this.onType.bind(this);

  }

  onSize(event) {
    this.setState({
      size: event.target.value,
    });
  }
  
  onType(event) {
    this.setState({
      type: event.target.value,
    });
  }

  render() {
    const { size, type } = this.state;
    return (
      <div className="avatar">
        <img
          src="./img/dog.jpg"
          alt="avatar"
          className={`${size} ${type}`}
          onSize={this.onSize}
        />
        <label htmlFor="sizes">Choose size of your avatar:</label>
        <select name="select" id="sizes" onClick={this.onSize}>
          <option value="s">s</option>
          <option value="m">m</option>
          <option value="l">l</option>
          <option value="xl">xl</option>
        </select>
        <label htmlFor="types">Choose type of your avatar:</label>
        <select name="select" id="sizes" onClick={this.onType}>
          <option value="rounded">rounded</option>
          <option value="square">square</option>
          <option value="circle">circle</option>
        </select>
      </div>
    );
  }
}