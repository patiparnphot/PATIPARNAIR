import AirConditionerComponent from '../components/AirConditionerComponent';
import { fetchAirConditioner, fetchAirConditionerSuccess, fetchAirConditionerFailure,
    deleteAirConditioner, deleteAirConditionerSuccess, deleteAirConditionerFailure } from '../actions/airConditioners';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAirConditioner: () => {
      dispatch(fetchAirConditioner(ownProps.id)).then((response) => {
        !response.error ? dispatch(fetchAirConditionerSuccess(response.payload.data)) : dispatch(fetchAirConditionerFailure(response.payload.data));
      });
    },
    deleteAirConditioner: () => {
      dispatch(deleteAirConditioner(ownProps.id)).then((response) => {
        !response.error ? dispatch(deleteAirConditionerSuccess(response.payload.data)) : dispatch(deleteAirConditionerFailure(response.payload.data));
      });
    }
  };
};


function mapStateToProps(state, ownProps) {
  return {
    activeAirConditioner: state.airConditioners.activeAirConditioner,
    deletedAirConditioner: state.airConditioners.deletedAirConditioner,
    airConditionerId: ownProps.id
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AirConditionerComponent);