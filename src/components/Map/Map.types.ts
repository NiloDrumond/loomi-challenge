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
