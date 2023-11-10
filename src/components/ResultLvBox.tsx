import styled from "styled-components";
import SvgIcon from "@mui/material/SvgIcon";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const LvContBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 335px;
  height: 218px;
  margin-top: 16px;
  border: 2px solid #212529;
`;

const LvContTopBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const LvContTop = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  height: 28px;
  background-color: #ffd752;
  gap: 8px;
  border-bottom: 2px solid #212529;
`;

const Line = styled.div`
  width: 287px;
  border-top: 2px solid #212529;
`;

const HeartBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  border-bottom: 2px solid #212529;
  border-left: 2px solid #212529;
  background-color: #ffd752;
`;

const LvMidBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const LvTitlBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 217px;
  height: 72px;
  background-color: #fff;
  border-right: 2px solid #212529;
  h1 {
    font-family: PartialSansKR-Regular;
    font-size: 32px;
  }
`;

const EyesBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 72px;
  background-color: #ffd752;
`;

const EyeOut = styled.div`
  position: relative;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  border: 4px solid #212529;
  &::after {
    content: "";
    position: absolute;
    top: 9px;
    left: 0px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #212529;
  }
`;

const LvBotBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 122px;
  background-color: #ffd752;
  border-top: 2px solid #212529;
  h2 {
    font-size: 32px;
    font-weight: bold;
  }
`;
function ResultLvBox() {
  return (
    <>
      <LvContBox>
        <LvContTopBox>
          <LvContTop>
            <Line />
            <Line />
          </LvContTop>
          <HeartBox>
            <SvgIcon component={FavoriteBorderIcon} sx={{ fontSize: 20 }} />
          </HeartBox>
        </LvContTopBox>
        <LvMidBox>
          <LvTitlBox>
            <h1>Lv.초5</h1>
          </LvTitlBox>
          <EyesBox>
            <EyeOut />
            <EyeOut />
          </EyesBox>
        </LvMidBox>
        <LvBotBox>
          <h2>예시:아직은 팔팔한 뇌</h2>
        </LvBotBox>
      </LvContBox>
    </>
  );
}

export default ResultLvBox;
