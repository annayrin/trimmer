import styled from "styled-components";

export const Wrapper = styled.section`
  background: white;
  height: 100%;
  width: 100%;
  position: relative;
`

export const TrimWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TrimHolder = styled.div`
  height: 55px;
  border-radius: 5px;
  width: 90%;
  margin: auto;
  background-color: rgb(207, 224, 255);
  position: relative;
`
export const Resizable = styled.div`
  position: absolute;
  border: 2px solid rgb(247, 191, 6);
  height: 100%;
  width: 100%;
  left: 0;
  border-radius: 5px;
  box-sizing: border-box;
  z-index: 2;
  background: linear-gradient(rgb(86, 144, 255), rgb(46, 109, 239));
`;

export const ResizerButton = styled.div`
  width: 30px;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(247, 207, 6);
  cursor: ew-resize;
  color: rgb(37, 46, 72);
  font-size: 16px;
  font-weight: 700;
`

export const TimeTrack = styled.span`
  position: absolute;
  width: 50px;
  height: 20px;
  font-size: 14px;
  text-align: center;
  line-height: 21px;
  font-weight: 600;

`
export const TotalTimeTrack = styled(TimeTrack)`
  top: -24px;
  left: 50%;
  transform: translateX(-50%);
  color: rgb(54, 63, 90);
  background: rgb(247, 207, 6);
  border-radius: 4px;

`
export const HiddenTimeTrack = styled(TimeTrack)`
  display: none;
  bottom: -25px;
  background: rgba(0, 0, 0, 0.75);
  color: #bebcbc;
  font-size: 12px;
  border-radius: 8px;
  ${Resizable}:hover & {
    display: block;
  }
`

export const SecondLines = styled.div`
  width: 1px;
  height: 15px;
  background: rgb(167, 195, 248);
`

export const Seconds = styled(SecondLines)`
  position: relative;
  height: 30px;
`

export const CurrentSecond = styled(TimeTrack)`
  top: -30px;
  left: 0;
  width: auto;
  transform: translate(-50%);
  color: rgb(144, 169, 215);
`

export const Icon = styled.svg`
  fill: rgb(37, 46, 72);
  width: 20px;
`;

export const DragIcon = styled.svg`
  transform: rotate(90deg);
  fill: white;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`

export const Drag = styled.div`
  width: 40px;
  margin: auto;
  height: 100%;
  cursor: grab;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SecondsCounter = styled.div`
  position: absolute;
  top: -40px;
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
