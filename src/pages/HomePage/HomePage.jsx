import { Container } from 'components/Container/Container';
import { MonthStatsTable } from 'components/Home/MonthStatsTable/MonthStatsTable';
import { TodayWaterList } from 'components/Home/TodayWaterList/TodayWaterList';
import { DailyNorma } from 'components/Home/DailyNorma/DailyNorma';
import { WaterRatioPanel } from 'components/Home/WaterRatioPanel/WaterRatioPanel';
import ModalTeam from 'components/ModalTeam/ModalTeam';

import {
  Statistics,
  BackgroundWrap,
  BackgrounImage,
  PageWrap,
  DailyNormaBlock,
  ImageWrap,
  HomeTeam,
} from './HomePage.styled';
import bg from '../../assets/bg.png';
import bottle from '../../assets/bottle.png';

const HomePage = () => {
  return (
    <>
      <BackgroundWrap>
        <Container>
          <PageWrap>
            <DailyNormaBlock>
              <ImageWrap>
                <DailyNorma />
                <img src={bottle} alt="bg" />
              </ImageWrap>
              <WaterRatioPanel />
            </DailyNormaBlock>
            <Statistics>
              <TodayWaterList />
              <MonthStatsTable />
            </Statistics>
          </PageWrap>
          <HomeTeam>
            <ModalTeam />
          </HomeTeam>
        </Container>
        <BackgrounImage src={bg} alt="bg" />
      </BackgroundWrap>
    </>
  );
};

export default HomePage;
