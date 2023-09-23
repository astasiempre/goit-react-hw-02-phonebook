import React, { Component } from 'react';

class Filter extends Component {

    render() {
        const { filter, onFilterChange } = this.props;
        return (
            <div>
                <label>
                    <span>Filter contacts by name:</span>
                    <input
                        onChange={(e) => onFilterChange(e.target.value)}
                        value={filter}
                        type="text"
                    />
                </label>
            </div>
        );
    }
}

    
  



export default Filter;