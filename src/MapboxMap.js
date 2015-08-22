var React = require('react');
const d3 = require('d3');
const _ = require('lodash')
const rStore = require('./reduxStore')

var MapboxMap = React.createClass({
  propTypes: {
    latitude: React.PropTypes.number.isRequired,
    longitude: React.PropTypes.number.isRequired
  },


  componentDidMount: function(argument) {
    var props = this.props;
    const self = this

    var mapId = props.mapId || props.src || "mapbox.streets";

    var options = {};
    var ownProps = ['mapId', 'onMapCreated'];
    for (var k in props) {
      if (props.hasOwnProperty(k) && ownProps.indexOf(k) === -1) {
        options[k] = props[k];
      }
    }
    L.mapbox.accessToken = 'pk.eyJ1IjoibGVsYW5kbGVlIiwiYSI6IlF6YXRwcUUifQ.lOwg0AiYU4PwgX4bFgZvAw';
    var map = L.mapbox.map(this.getDOMNode(), mapId, options);

    L.mapbox.featureLayer({
      type: 'Feature',
      geometry: {
          type: 'Point',
          coordinates: [this.props.longitude, this.props.latitude]
      },
      properties: {
          title: 'Center Location',
          description: '1718 14th St NW, Washington, DC',
          'marker-size': 'large',
          'marker-color': '#BE9A6B',
          'marker-symbol': 'cafe'
      }
    }).addTo(map);

    const heatMap = (coordinates) => {
      const heatSettings = {
        radius: 20, 
        opacity: 1,
        gradient: {0.4: 'aqua', 0.65: 'orange', 1: 'maroon'},
        max: 1,
        minOpacity: .3
      }
      var heat = L.heatLayer(coordinates, heatSettings).addTo(map)
    }

    d3.csv("./src/data/data_for_web.csv", function(error, data) {
      var category_list = []
      const heatCoordinates = _.map(data, (loc) => [parseFloat(loc.latitude), parseFloat(loc.longitude)]);
      const geojson = _.map(data, (loc) => {
        var categories = loc.categories.split("'")
        _.forEach(categories, (cat) => {
          if(!_.includes(category_list, cat)){
            category_list.push(cat)
          }
        })
        return {
          "type": "Feature",
          "geometry": {
            "coordinates": [loc.longitude,loc.latitude],
            "type": "Point"
          },
          "properties": {
            "title": loc.name,
            "marker-color": "#1087bf",
            "marker-size": "small",
            "marker-symbol": "harbor",
            "other": loc
          }
        }
      });

      console.log(category_list)

      console.log(geojson)
      /*var markers = L.mapbox.featureLayer()
        .setGeoJSON(geojson)
        .addTo(map);*/
      
      /*L.mapbox.featureLayer().setGeoJSON(geojson).addTo(map).on('ready', function(e) {
        console.log('e', e)
        var clusterGroup = new L.MarkerClusterGroup({
          iconCreateFunction: function(cluster) {
            console.log('cluster', cluster)
            return L.mapbox.marker.icon({
              'marker-symbol': cluster.getChildCount(),
              'marker-color': '#422'
            });
          }
        });
        e.target.eachLayer(function(layer) {
            clusterGroup.addLayer(layer);
        });
        map.addLayer(clusterGroup);
      });*/

      heatMap(heatCoordinates)      
    });

    if (this.props.onMapCreated) {
      this.props.onMapCreated(map, L);
    }
  },

  shouldComponentUpdate(prevProps, prevState) {
    console.log('s', prevProps, prevState)
  },

  componentDidUpdate() {
    console.log(this.props.latitude, this.props.longitude, this.props. center)
  },

  render: function() {
    var mapStyle = {
      width: '74%',
      height: '90%',
      float: 'right',
      border: '2px solid wheat'
    };

    return (
      <div style={mapStyle}></div>
    );
  }
});

module.exports = MapboxMap;