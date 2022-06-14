export const charts = {
  '#chart .apexcharts-text': {
    fontFamily: 'Ubuntu !important',
    fontWeight: 700,
  },

  '#chart .apexcharts-legend-text': {
    fontFamily: 'Ubuntu !important',
    color: 'main.500',
    fontSize: 'var(--chakra-fontSizes-md) !important',
  },

  '#chart .apexcharts-legend-series': {
    display: 'flex !important',
    flexDirection: 'row !important',
    alignItems: 'center !important',
    paddingTop: 2,
  },

  '#chart .apexcharts-legend-marker': {
    width: '16px !important',
    height: '16px !important',
  },

  '#chart .apexcharts-pie-label': {
    fontSize: 'var(--chakra-fontSizes-md) !important',
  },

  '#chart .apexcharts-bar-area': {
    filter: 'drop-shadow(0px 0px 10px #00000026) ',
  },

  '.overlap .apexcharts-series:nth-of-type(even) .apexcharts-bar-area': {
    transform: 'translate(-4px, 0.5px)',
    zIndex: 1,
  },

  '#chart  .arrow_box': {
    position: 'relative',
  },
  '#chart  .arrow_box:after, .arrow_box:before': {
    right: '100%',
    top: '50%',
    border: 'solid transparent',
    content: '" "',
    height: '0',
    width: '0',
    position: 'absolute',
    pointerEvents: 'none',
  },

  '#chart .arrow_box:after': {
    borderRightColor: 'white',
    borderWidth: '10px',
    marginTop: '-10px',
  },
  '#chart  .arrow_box:before': {
    marginTop: '-13px',
  },

  '#chart  .v_arrow_box': {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  '#chart  .v_arrow_box:after': {
    left: '50%',
    top: '100%',
    border: 'transparent solid',
    content: '" "',
    height: '0',
    width: '0',
    position: 'absolute',
    pointerEvents: 'none',
    borderTopColor: 'white',
    borderWidth: '10px',
    marginLeft: '-9px',
  },

  '#chart .h_stack': {
    display: 'flex',
    flexDirection: 'row',
  },

  '#chart .v_stack': {
    display: 'flex',
    flexDirection: 'column',
  },

  '#chart.horizontal .apexcharts-tooltip': {
    color: 'main.500',
    transform: 'translateX(10px) translateY(12px)',
    // overflow: 'visible !important',
    whiteSpace: 'normal !important',
    boxShadow: 'float',
    background: 'white',
    borderWidth: '0px !important',
    borderRadius: 'md',
    paddingRight: 2,
    paddingLeft: 1,
  },

  '#chart .apexcharts-tooltip': {
    color: 'main.500',
    overflow: 'visible !important',
    whiteSpace: 'normal !important',
    boxShadow: 'float',
    background: 'white',
    height: 'fit-content',
    borderWidth: '0px !important',
    borderRadius: 'md',
    padding: '5px 10px',
  },

  '#chart .apexcharts-tooltip .text': {
    fontStyle: 'italic',
    fontSize: 'md',
    color: 'main.300',
  },

  '#chart .apexcharts-tooltip .bold': {
    fontWeight: 700,
    fontSize: 'lg',
    fontStyle: 'normal',
    marginX: '4px',
    color: 'main.300',
  },

  '#chart .apexcharts-tooltip .compare_box': {
    position: 'relative',
    display: 'flex',
    height: 'fit-content',
    flexDirection: 'column',
  },

  '#chart .apexcharts-tooltip .divider': {
    borderBottomWidth: '1px',
    borderColor: 'gray.200',
    height: '1px',
    width: '44',
    marginY: 1,
  },

  '#chart .apexcharts-tooltip .float': {
    position: 'absolute',
    fontWeight: 700,
    top: '2px',
    right: '2px',
  },
};
