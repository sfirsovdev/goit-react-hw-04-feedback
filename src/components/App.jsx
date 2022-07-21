import { useState } from 'react';
import { Box } from './box/Box';
import { Feedback } from './options/Options';
import { Statistics } from './statistics/Statistics';
import { Title } from './App.styled';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = e => {
    const feedback = e.target.textContent;
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const positiveFeedback = () => {
    const total = totalFeedback();
    return total !== 0 ? Math.round((good * 100) / total) : 0;
  };
  const options = Object.keys({ good, neutral, bad });
  return (
    <Box
      as="div"
      width="50%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      ml="auto"
      mr="auto"
      pl="20px"
      pr="20px"
      bg="accent"
      borderRadius="normal"
      boxShadow="4px 11px 49px 1px rgba(173,186,222,1)"
    >
      <Box as="section">
        <Title>Please leave feedback</Title>
        <Feedback options={options} onFeedback={handleFeedback} />
      </Box>

      <Box as="section" display="flex" flexDirection="column" width="60%" alignItems="center" >
        <h2>Statistics</h2>
        {totalFeedback() ? (
          <Statistics
            total={totalFeedback()}
            good={good}
            bad={bad}
            neutral={neutral}
            positiveFeedback={positiveFeedback()}
          />
        ) : (
          <h3>No feedback given </h3 >
        )}
      </Box>
    </Box>
  );
}