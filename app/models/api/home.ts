export interface IFloodResponse {
  type?: string;
  lastPublished?: number;
  layerName?: string;
  rights?: object;
  features?: any[];
}
export interface IFeature {
  type?: 'Feature' | 'Point' | string;
  geometry: IGeometry;
  properties: IProperties;
}
export interface IGeometry {
  collection: string[];
  coordinates: number[];
  type?: string;
}
export interface IProperties {
  diversions?: string;
  webLinks: string[];
  headline: string;
  periods: string[];
  speedLimit: number;
  weblinkUrl: string | any;
  expectedDelay: number;
  ended: boolean;
  isNewIncident: boolean;
  publicTransport: string;
  impactingNetwork: boolean;
  subCategoryB: string | any;
  arrangementAttachments: string[];
  isInitialReport: boolean;
  created: number;
  isMajor: boolean;
  name: string | any;
  subCategoryA: string;
  adviceA: string;
  adviceB: string;
  adviceC: string;
  incidentKind: string;
  mainCategory: String;
  lastUpdated: number;
  otherAdvice: string;
  arrangementElements: string[];
  additionalInfo: string[];
  weblinkName: any;
  attendingGroups: string[];
  encodedPolylines: any[];
  displayName: string;
  media: string[];
  roads: any[];
}
export interface IRoad {
  conditionTendency: string;
  crossStreet: string;
  delay: string;
  impactedLanes: [
    {
      affectedDirection: 'Both directions';
      closedLanes: '';
      description: '';
      extent: 'Closed';
      numberOfLanes: '';
      roadType: 'Road';
    },
  ];
  locationQualifier: string;
  mainStreet: string;
  quadrant: string;
  queueLength: number;
  region: string;
  secondLocation: string;
  suburb: string;
  trafficVolume: string;
}
