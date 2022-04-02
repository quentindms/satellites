import { memo } from "react";
import styled from "styled-components";
import {
  SatellitePosition,
  SatelliteVisualPasses,
  VisualPasses,
} from "../../types/satellites";
import { sortByOrbitalVelocityFn } from "../utils/helpers";
import Satellite from "./Satellite";

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 35px;
  grid-template-columns: repeat(5, auto);
  padding-top: 20px;
`;

interface Props {
  satellites: SatellitePosition[];
  visualPasses: SatelliteVisualPasses[];
}
const SatelliteList = ({ satellites, visualPasses }: Props) => {
  return (
    <StyledGrid>
      {satellites?.sort(sortByOrbitalVelocityFn).map((satellite, index) => (
        <Satellite
          position={satellite}
          visualPasses={visualPasses.find(
            (v) => v.info.satid === satellite.info.satid
          )}
          key={index}
        />
      ))}
    </StyledGrid>
  );
};

export default memo(SatelliteList);
