import React, { Component } from "react";
import Cloudy from "../Uploads/Cloudy.png";
import Rain from "../Uploads/Rain.png";
import Sunny from "../Uploads/Sunny.png";
import Dropdown from "react-dropdown";
import { connect } from "react-redux";
import { getResultByCityAction } from "../Redux/Action";
const DropDownOption = ["Chicago", "Boston", "New York"];

export class WeatherTodayUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "Select City"
    };
  }
  onSelectChange = value => {
    this.setState({ selectedOption: value.value });
  };
  getData = async () => {
    await this.props.getResultByCityAction(this.state.selectedOption);
    this.setState({ selectedOption: this.state.selectedOption });
  };
  render() {
    return (
      <div className="Back">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 ">
              <div className="row">
                <div className="col-lg-12">
                  <img src={Cloudy} className="img-fluid" alt="#"></img>

                  <img src={Rain} className="img-fluid" alt="#"></img>

                  <img src={Sunny} className="img-fluid" alt="#"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div
                className="card mt-5 bg-transparent border-white"
                style={{ width: "20rem" }}
              >
                <div className="card-body">
                  <span>
                    <Dropdown
                      className="btn btn-block btn-dark"
                      options={DropDownOption}
                      value={this.state.selectedOption}
                      onChange={this.onSelectChange}
                    ></Dropdown>
                  </span>
                  <button
                    className="btn btn-outline-light mt-3"
                    onClick={this.getData}
                  >
                    Know Weather
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 "></div>

          <div className="row">
            <div className="col-lg-4"></div>
            {!this.props.WeatherDataBind ? null : (
              <div className="col-lg-4 ">
                <div
                  className="card bg-transparent mt-5 border-0"
                  style={{ width: "20rem" }}
                >
                  <div className="card-body">
                    <h1 className="ColorText">
                      {this.props.WeatherDataBind.sys.country}
                    </h1>
                    <h3 className="ColorText">
                      {this.props.WeatherDataBind.name}{" "}
                    </h3>
                    {this.props.WeatherDataBind.weather.map(item => (
                      <React.Fragment>
                        <h4 className="ColorText" key={item.id}>Weather: {item.main}</h4>
                      </React.Fragment>
                      
                    ))}
                    <h4 className="ColorText">
                      Temperature: {this.props.WeatherDataBind.main.temp} °F
                    </h4>
                    <h4 className="ColorText">
                      Humidity: {this.props.WeatherDataBind.main.humidity} %
                    </h4>
                    <h4 className="ColorText">
                      Wind: {this.props.WeatherDataBind.wind.speed} km/h
                    </h4>
                  </div>
                </div>
              </div>
            )}

            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  debugger
  console.log(state);
  return {
    WeatherDataBind: state.WeatherData
  };
};
export default connect(mapStateToProps, { getResultByCityAction })(
  WeatherTodayUI
);
