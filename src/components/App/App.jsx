// import React, { Component } from 'react';
import { useState } from 'react';
// import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
// import Notification from 'components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);



  const leaveFeedback = option => {
    // console.log(good);
    // setGood(prevState => {
    //   return {
    //     [option]: prevState[option] + 1,
    //   };
    // });
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
  
  return (
    <div>
      <Section title="Please leave feedback">
      <FeedbackOptions 
      options={['good', 'neutral', 'bad']} 
      onLeaveFeedback={leaveFeedback}
      />
      </Section>
      {/* <Section title="Statistics">
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
      </Section> */}
    </div>
  );
}

// class OldApp extends Component {
//   // начальное состояние от Пропс
//   static defaultProps = {
//     initialValue: 0,
//   };

//   state = {
//     good: this.props.initialValue,
//     neutral: this.props.initialValue,
//     bad: this.props.initialValue,
//   };

//   // handleClick = event => {
//   //   console.log(this);
//   //   console.log('Click');

//   //   const { target } = event;

//   //   setTimeout(() => {
//   //     console.log(target);
//   //   }, 1000);

//   //   // Перезаписывает состояние

//   //   // this.setState({
//   //   //   good: 5,
//   //   // });

//   //   // Обновляет состояние
//   //   this.setState((prevState) => {
//   //     return {
//   //       good: prevState.good + 1,
//   //     };
//   //   });
//   // };

//   leaveFeedback = (option) => {
//     // перезаписывает состояние
//     this.setState(prevState => {
//       return {
//         [option]: prevState[option] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;

//     const totalFeedback = good + neutral + bad;
//     return totalFeedback;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const { countTotalFeedback } = this;

//     const totalFeedback = countTotalFeedback();
//     const PositiveFeedbackPercentage = Math.round(
//       (good / totalFeedback) * 100,
//     );

//     if (good !== 0) {
//       return PositiveFeedbackPercentage;
//     }
//     return 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const { leaveFeedback, countTotalFeedback, countPositiveFeedbackPercentage } = this;

//     return (
//       <div>
//         <Section title="Please leave feedback">
//         <FeedbackOptions 
//         options={['good', 'neutral', 'bad']} 
//         onLeaveFeedback={leaveFeedback}
//         />
//         </Section>
//         <Section title="Statistics">
//           {countTotalFeedback() === 0 ? 
//           <Notification message="No feedback given"></Notification> 
//           :
// <         Statistics 
//           good={good} 
//           neutral={neutral} 
//           bad={bad} 
//           total={countTotalFeedback()} 
//           positivePercentage={countPositiveFeedbackPercentage()}>
//           </Statistics>
//           }
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;