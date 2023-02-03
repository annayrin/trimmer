import styled from "styled-components";

export const Wrapper = styled.section`
  background: white;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TrimWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 250px;
  padding: 25px;
  
`

export const TrimContainer = styled.div`
  width: 200%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  height: 160px;
  overflow-x: ${props => props.counter > 1 ? "auto" : "hidden" } ;
  position: relative;
`

export const Overflowed = styled.div `
  width: ${props => props.counter}00%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  padding-bottom: 30px;

`

export const SecondsCounter = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const TrimHolder = styled.div`
  border-radius: 5px;
  width: 100%;
  background-color: rgb(207, 224, 255);
  position: relative;
  height: 55px;
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
  position: absolute;
  bottom: -25px;
  background: rgba(0, 0, 0, 0.75);
  color: #bebcbc;
  font-size: 12px;
  border-radius: 8px;
  ${TrimWrapper}:hover & {
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
  height: 22px;
`

export const CurrentSecond = styled(TimeTrack)`
  top: -22px;
  left: 0;
  width: auto;
  transform: translate(-50%);
  color: rgb(144, 169, 215);
`

export const Icon = styled.svg`
  fill: ${props => props.color || "steelblue"};
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

