import { connect } from 'react-redux';
import { fetchAirConditioners, fetchAirConditionersSuccess, fetchAirConditionersFailure } from '../actions/airConditioners';
import AirConditionerList from '../components/IndexPage';

const mapStateToProps = state => ({
  airConditionerList: state.airCondittioners.airConditionerList
})

const mapDispatchToProps = dispatch => ({
  fetchAirConditioners: () => {
      dispatch(fetchAirConditioners()).then((response) => {
            !response.error ? dispatch(fetchAirConditionersSuccess(response.payload.data)) : dispatch(fetchAirConditionersFailure(response.payload.data));
      });
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AirConditionerList);
