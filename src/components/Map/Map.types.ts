export type ClickMapDataEvent = {
  feature: {
    j: {
      name: string;
      admin: string;
    };
  };
  domEvent: {
    clientX: number;
    clientY: number;
  };
};

export type MapCoordinates = {
  lat: number;
  lng: number;
};

export type MapType = 'satellite' | 'roadmap';
