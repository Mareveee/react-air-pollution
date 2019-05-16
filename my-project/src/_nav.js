export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'dashboard',

    },
    {
      title: true,
      name: 'Data',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Data',
      url: '/data/data',
      icon:'icon-speedometer'
    },
    {
      name: 'Predicted',
      url: '/data/AQI',
      icon:'icon-pie-chart'
    },
    {
      name: 'Historical Data',
      url: '/Data/Historical',
      icon:'icon-layers'
    },
  ],
};
