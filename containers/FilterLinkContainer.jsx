import React, {Component} from 'react';
import { connect } from 'react-redux';

import style from '../styles/App.css';
import FilterLink from '../components/FilterLink';
import { VisibilityFilters } from '../actions/VisibilityFilters';

class FilterLinkContainer extends Component {

    render () {
        return (
            <div className="text-center">
                <FilterLink filter={VisibilityFilters.SHOW_ALL}>
                    All
                </FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
                    Active
                </FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
                    Completed
                </FilterLink>
            </div>
        );
    }

}

export default (FilterLinkContainer);