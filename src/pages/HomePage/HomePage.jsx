import { Container } from 'components/Container/Container';
import { MonthStatsTable } from "components/Home/MonthStatsTable/MonthStatsTable"
import { TodayWaterList } from "components/Home/TodayWaterList/TodayWaterList"

import {Statistics} from "./HomePage.styled"

const HomePage = () => {
  return (
    <>
      <Container>
        <h2>Home Page</h2>
        <Statistics>
          <TodayWaterList/>
          <MonthStatsTable/>
        </Statistics>
      </Container>
    </>
  );
};

export default HomePage;
