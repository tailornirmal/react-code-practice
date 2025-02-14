// Error boundry class to handle crashing error

import React from "react";

class ErrorboundryClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: "",
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    this.setState({ error: error.message });
  }

  render() {
    const { error = "" } = this.state;
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: "center", padding: "20px", color: "red" }}>
          <h2>Something went wrong.</h2>
          <p>{error}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorboundryClass;
