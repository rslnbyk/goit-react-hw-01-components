import styled from 'styled-components';

function generateRandomColor() {
  let maxVal = 0xffffff;
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}

export const StatisticsSection = styled.section`
  margin-left: 50px;
  margin-bottom: 50px;
  width: 300px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  padding-top: ${props => (props.title ? '20px' : '0')};
`;

export const StatisticsList = styled.ul`
  display: flex;
`;

export const StatisticsTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: 20px;
  font-size: 20px;
`;

export const StatisticsItem = styled.li`
  flex-basis: calc(100% / 4);
  padding: 10px;
  background-color: ${generateRandomColor()};

  :nth-of-type(odd) {
    background-color: ${generateRandomColor()};
  }
`;

export const StatisticsLabel = styled.span`
  display: inline-block;
  color: white;
  font-size: 15px;
  margin-bottom: 10px;
`;

export const StatisticsPercentage = styled.span`
  display: block;
  color: white;
  font-size: 15px;
`;
