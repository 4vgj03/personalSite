import React from "react";
import "./zoom.css";

export default class Image extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("clicked");
  };

  render() {
    const { src } = this.props;
    return (
      <div>
        <img
          className="small"
          src={src}
          onClick={this.handleShowDialog}
          alt="no image"
        />
        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className="imageOpen"
              src={src}
              onClick={this.handleShowDialog}
              alt="no image"
            />
          </dialog>
        )}
      </div>
    );
  }
}
