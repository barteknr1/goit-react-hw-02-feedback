import React, { Component } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedback = e => {
    const name = e.target.name;
    this.setState(state => ({ [name]: state[name] + 1 }));
  };

  countTotalFeedback = () => Object.values(this.state).reduce((acc, state) => acc + state, 0);

  countPositiveFeedbackPercentage = () => Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.feedback} />
        </Section>
        <Section title="statistics">
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Positive feedback: </li>
          </ul>
        </Section>
      </>
    );
  };
}

export default App