import { Container } from 'components/Container/Container';
import { MonthStatsTable } from "components/Home/MonthStatsTable/MonthStatsTable"
import { TodayWaterList } from "components/Home/TodayWaterList/TodayWaterList"
import { Test } from 'components/Test/Test';

import {Statistics} from "./HomePage.styled"

const HomePage = () => {
  return (
    <>
      <Container>
        <h2>Home Page</h2>
        <Test />
        <Statistics>
          <TodayWaterList/>
          <MonthStatsTable/>
        </Statistics>
      </Container>
    </>
  );
};

export default HomePage;
