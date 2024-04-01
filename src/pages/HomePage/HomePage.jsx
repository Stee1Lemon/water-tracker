import { Container } from 'components/Container/Container';
import { MonthStatsTable } from "components/Home/MonthStatsTable/MonthStatsTable"
import { TodayWaterList } from "components/Home/TodayWaterList/TodayWaterList"
import { DailyNorma} from "components/Home/DailyNorma/DailyNorma"
// import {TodayListModal} from "components/Home/TodayListModal/TodayListModal"
// import {DailyNormaModal} from "components/Home/DailyNormaModal/DailyNormaModal"
// import {PopupDelete} from "components/Home/PopupDelete/PopupDelete"

import { Statistics, BackgroundWrap, BackgrounImage, PageWrap, DailyNormaBlock, ImageWrap } from "./HomePage.styled"
import bg from "../../assets/bg.png"
import bottle from "../../assets/bottle.png"

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
              <div>bar</div>
            </DailyNormaBlock>
             {/* <h2>Home Page</h2> */}
            <Statistics>
            {/* <PopupDelete/> */}
            {/* <TodayListModal/> */}
            {/* <DailyNormaModal/> */}
            <TodayWaterList/>
            <MonthStatsTable/>
          </Statistics>
          </PageWrap>
        </Container>
        <BackgrounImage src={bg} alt="bg" />
      </BackgroundWrap>
    </>
  );
};

export default HomePage;
