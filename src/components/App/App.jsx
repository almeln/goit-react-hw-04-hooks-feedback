import { useState } from 'react';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        console.log(good);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        console.log(neutral);
        break;

      case 'bad':
        setBad(bad + 1);
        console.log(bad);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {    
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {    
    const totalFeedback = countTotalFeedback();
    const PositiveFeedbackPercentage = Math.round(
      (good / totalFeedback) * 100,
    );
    
    if (good !== 0) {
      return PositiveFeedbackPercentage;
    }
    return 0;
  };
  
  return (
    <div>
      <Section title="Please leave feedback">
      <FeedbackOptions 
      options={['good', 'neutral', 'bad']} 
      onLeaveFeedback={leaveFeedback}
      />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? 
        <Notification message="No feedback given"></Notification> 
        :
<         Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={countTotalFeedback()} 
        positivePercentage={countPositiveFeedbackPercentage()}>
        </Statistics>
        }
      </Section>
    </div>
  );
}