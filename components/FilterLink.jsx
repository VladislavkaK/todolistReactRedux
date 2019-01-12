import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/VisibilityFilters';

class FilterLink extends React.Component {

    render () {

        let { onClick, active, children } = this.props;

        return (
            <button
                onClick={onClick}
                disabled={active}
                className="btn btn-primary"
                style={{
                    marginLeft: '4px',
                }}
                >
                {children}
            </button>
        );
    }

}

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visiblefilter
})
  
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterLink);