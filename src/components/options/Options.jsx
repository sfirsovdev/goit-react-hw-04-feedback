import { Box } from '../box/Box';
import { Buttons } from './Options.styled';

export const Feedback = ({ onFeedback, options }) => {
  return (
    <Box
      m={0}
      p={0}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      as="ul"
      background="accent"
    >
      {options.map(option => (
        <li key={option}>
          <Buttons  type="button" onClick={onFeedback}>
            {option}
          </Buttons>
        </li>
      ))}
    </Box>
  );
};
