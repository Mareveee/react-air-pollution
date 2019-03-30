export default {
    items: [
      {
        name: 'Dashboard',
        url: '/dashboardad',
        icon: 'icon-speedometer',
  
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
        name: 'Predict',
        url: '/data/AQIad',
      },
      {
        name: 'Historical Data',
        url: '/Data/Historicalad',
      },
      {
        title: true,
        name: 'Setting',
        wrapper: {            // optional wrapper object
          element: '',        // required valid HTML5 element tag
          attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
        },
        class: ''             // optional class names space delimited list for title item ex: "text-center"
      },
      {
        name: 'Network Server',
        url: '/NetworkServerad',
      },
      
    ],
  };
  