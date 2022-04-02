import { memo } from "react";
import styled, { keyframes } from "styled-components";
import {
  SatellitePosition,
  SatelliteVisualPasses,
  VisualPasses,
} from "../../types/satellites";
import { computeOrbitalSpeed, roundNumber } from "../utils/helpers";

const zoomInAnimation = keyframes`
0% {
  opacity: 0;
  -webkit-transform: scale3d(0.3, 0.3, 0.3);
  transform: scale3d(0.3, 0.3, 0.3);
}
50% {
  opacity: 1;
}`;

const StyledSatellitle = styled.div`
  background-color: transparent;
  width: 200px;
  height: 200px;
  perspective: 1000px;
  overflow: hidden;

  animation-name: ${zoomInAnimation};
  animation-duration: 0.5s;

  & .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  & .flip-card-front,
  & .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 8px;
    background-color: #2980b9;
    color: white;

    & h1 {
      font-size: 1.75em;
      margin: 8px 0;
    }

    & h6 {
      margin: 0;
      margin-bottom: 5px;
    }

    & p {
      margin: 6px 0;
    }
  }

  &:nth-child(even) .flip-card-front {
    background: white;
    color: #2980b9;
  }

  & .flip-card-front {
    display: flex;
    flex-direction: column;
    & .info {
      flex: 1 0 auto;
    }
  }

  & .flip-card-back {
    transform: rotateY(180deg);
    padding: 0 5px;
  }
`;

interface Props {
  position: SatellitePosition;
  visualPasses?: SatelliteVisualPasses;
}
const Satellite = ({ position, visualPasses }: Props) => {
  const getNextPassInfo = (passes: VisualPasses[]) => {
    const now = Date.now() / 1000;
    const nextPasses = passes.filter((p) => p.endUTC > now);
    if (nextPasses.length === 0) {
      return "-";
    }

    const nextUTC = nextPasses.reduce(
      (prev, curr) => Math.min(prev, curr.endUTC),
      Number.MAX_SAFE_INTEGER
    );

    return new Date(nextUTC * 1000).toLocaleString(undefined, {
      dateStyle: "short",
      timeStyle: "medium",
    });
  };

  return (
    <StyledSatellitle>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h1>{position.info.satname}</h1>
          <div className="info">
            <p>
              <strong>Latitute : </strong>
              {roundNumber(position.positions[0].satlatitude)}
            </p>
            <p>
              <strong>Longitude : </strong>
              {roundNumber(position.positions[0].satlongitude)}
            </p>
            <p>
              <strong>Altitude : </strong>
              {roundNumber(position.positions[0].sataltitude)}km
            </p>
          </div>
          <h6>Flip for more info</h6>
        </div>
        <div className="flip-card-back">
          <p>
            <strong>Orbital speed: </strong>
            {computeOrbitalSpeed(position.positions[0].sataltitude)}m/s
          </p>
          <p>
            <strong>Nb of passes : </strong>
            {visualPasses?.info.passescount || 0}
          </p>
          <p>
            <strong>Next pass : </strong>
            {getNextPassInfo(visualPasses?.passes || [])}
          </p>
        </div>
      </div>
    </StyledSatellitle>
  );
};

export default memo(Satellite);
