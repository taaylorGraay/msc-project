import React from "react";
import { connect } from "react-redux";
import { fetchRentalById } from 'actions';
import RentalInfo from 'components/rental/RentalInfo';

import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class RentalDetail extends React.Component {
  componentDidMount() {
    const { id } = this.props.router.params;
    this.props.dispatch(fetchRentalById(id));
  }

  render() {
    const { rental, isFetching } = this.props;
    if (isFetching) { return null; }
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              <img src={rental.image} alt={rental.title} />
            </div>
            <div className="col-md-6">
              {/* <!-- TODO: Display rental map --> */}
              <img src={rental.image} alt={rental.title} />
            </div>
          </div>
        </div>

        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
            <RentalInfo rental={rental} />
              </div>
            <div className="col-md-4"> BOOKING</div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({rental}) => 
  ({ rental: rental.item, isFetching: rental.isFetching })

const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(RentalDetailWithRouter);