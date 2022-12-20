import Notification from './Notification';

const Statistics = ({ g, n, b, t, p }) => {
  if (t) {
    return (
      <ul>
        <li>Good: {g}</li>
        <li>Neutral: {n}</li>
        <li>Bad: {b}</li>
        <li>Total: {t}</li>
        <li>Positive Feedback: {p}%</li>
      </ul>
    );
  } else {
    return <Notification />;
  }
};

export default Statistics;
