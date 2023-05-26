import React, {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
  };

  static defaultProps = {
    step: 1,
  };

  static propTypes = {
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <div>
          <p>hello world!</p>
      </div>
      </>
  );
  };
}

export default App