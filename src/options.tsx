const options = {
  locales: {
    label: 'BCP 47 Language Tag',
    type: 'labelbox',
    value: 'en-US',
  },
  hourCycle: {
    label: 'Hour Cycle',
    type: 'dropdown',
    value: 'h12',
    items: ['h11', 'h12', 'h23', 'h24'],
  },
  hour: {
    label: 'Hour Format',
    type: 'dropdown',
    value: 'numeric',
    items: ['hidden', 'numeric', '2-digit'],
  },
  minute: {
    label: 'Minute Format',
    type: 'dropdown',
    value: 'numeric',
    items: ['hidden', 'numeric', '2-digit'],
  },
  second: {
    label: 'Second Format',
    type: 'dropdown',
    value: 'numeric',
    items: ['hidden', 'numeric', '2-digit'],
  },
  year: {
    label: 'Year Format',
    type: 'dropdown',
    value: 'numeric',
    items: ['hidden', 'numeric', '2-digit'],
  },
  month: {
    label: 'Month Format',
    type: 'dropdown',
    value: 'numeric',
    items: ['hidden', 'numeric', '2-digit', 'long', 'short'],
  },
  day: {
    label: 'Day Format',
    type: 'dropdown',
    value: 'numeric',
    items: ['hidden', 'numeric', '2-digit'],
  },
};

export default options;
