export type CardPosition = {
  top: number;
  left: number;
};

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

export type MapCardContextData = {
  region?: string;
  setRegion: (region?: string) => void;
  position: CardPosition;
  handleRegionClick: (e: ClickMapDataEvent) => void;
  cardContainerRef: React.RefObject<HTMLDivElement>;
};

export type MapCardProps = {
  containerRef: React.RefObject<HTMLDivElement>;
};
