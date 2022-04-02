interface SatelliteInfo {
  satname: string;
  satid: number;
  transactionscount: number;
}

interface SatelliteVisualPassInfo extends SatelliteInfo {
  passescount: number;
}

interface Position {
  satlatitude: number;
  satlongitude: number;
  sataltitude: number;
  azimuth: number;
  elevation: number;
  ra: number;
  dec: number;
  timestamp: number;
}

export interface VisualPasses {
  startAz: number;
  startAzCompass: string;
  startEl: number;
  startUTC: number;
  maxAz: number;
  maxAzCompass: string;
  maxEl: number;
  maxUTC: number;
  endAz: number;
  endAzCompass: string;
  endEl: number;
  endUTC: number;
  mag: number;
  duration: number;
}

export interface SatellitePosition {
  info: SatelliteInfo;
  positions: Position[];
}

export interface SatelliteVisualPasses {
  info: SatelliteVisualPassInfo;
  passes: VisualPasses[];
}
