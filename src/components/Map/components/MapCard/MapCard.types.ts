export type CardPosition = {
  top: number;
  left: number;
};

export type MapCardContextData = {
  region?: string;
  setRegion: (region?: string) => void;
  position: CardPosition;
  setPosition: (position: CardPosition) => void;
};

export type MapCardProps = {
  containerRef: React.RefObject<HTMLDivElement>;
};
