var React = require('react');
const Actions = require('./Actions')
var Select = require('react-select');
const store = require('./reduxStore')
const categories_list = store.getState().categories_list


var sidebar = React.createClass({
  propTypes: {
    width: React.PropTypes.number,
    latitude: React.PropTypes.number,
    longitude: React.PropTypes.number
  },

  componentDidMount() {

  },

  getInitialState() {
    return {
      latitude: this.props.latitude,
      longitude: this.props.longitude
    };
  },
  setLatitude(e) {
    store.dispatch({ 
      type: 'LATITUDE', 
      payload:{
        value:parseFloat(e.target.value) 
      }
    });
    this.setState({
      latitude: parseFloat(e.target.value)
    });
    this.props.latitude = parseFloat(e.target.value)
  },
  setLongitude(e) {
    const value = parseFloat(e.target.value) 
    console.log(value)
    store.dispatch({ 
      type: 'LONGITUDE', 
      payload:{
        value
      }
    });
    this.setState({
      longitude: parseFloat(e.target.value)
    });
    this.props.longitude = parseFloat(e.target.value)
  },
  dailyHours(e) {
    store.dispatch({ type: 'HOUR', value:parseFloat(e.target.value) });
  },

  componentDidUpdate(){
    console.log(this.props.latitude, this.props.longitude)
  },

  render() {
    const sidebarStyle = {
      width: '25%',
      float: 'left',
      border: '2px dashed black'
    }
    var count = -1
    var options = _.map(categories_list, (l) => {
      count++
      return {label:l, value: count}
    })

    const priceList = ['<10 Dollars', '10-25 Dollars', '24-45 Dollars', '+45 Dollars']
    count = -1
    const prices = _.map(priceList, (l) => {
      count++
      return {label:l, value: count}
    })

    function logChange(val) {
      console.log("Selected: " + val);
    }

    function addCategories(selection) {
      selection = selection.split(',')
      selection = _.map(selection, (index) =>{
        return categories_list[parseInt(index)]
      })
      console.log(selection)
      store.dispatch({
        type: 'SET_CATEGORIES',
        value: selection
      })
    }

    return (
      <div style={sidebarStyle}>
        <b> Latitude: </b> <input type="number" value={this.props.latitude} onChange={this.setLatitude}/>
        <b> Longitude: </b> <input type="number" value={this.props.longitude} onChange={this.setLongitude}/>
        <b>Classification: </b>
        <Select
          name="form-field-name"
          value="1"
          options={options}
          multi={true}
          onChange={addCategories}/>
        <b>Hours Open:</b>
        <div> Monday: <input type="number" value={this.props.monday} onChange={this.dailyHours}/> </div>
        <div> Tuesday: <input type="number" value={this.props.tuesday} onChange={this.dailyHours}/> </div>
        <div> Wednesday: <input type="number" value={this.props.Wednesday} onChange={this.dailyHours}/> </div>
        <div> Thursday: <input type="number" value={this.props.Thursday} onChange={this.dailyHours}/> </div>
        <div> Friday: <input type="number" value={this.props.Friday} onChange={this.dailyHours}/> </div>
        <div> Saturday: <input type="number" value={this.props.Saturday} onChange={this.dailyHours}/> </div>
        <div> Sunday: <input type="number" value={this.props.Sunday} onChange={this.dailyHours}/> </div>
        <b>Price Range: </b>
        <Select
          name="form-field-name"
          value="1"
          options={prices}
          onChange={logChange}/>
      </div>
    );
  }
});

module.exports = sidebar;