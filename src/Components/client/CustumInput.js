import React, { Component } from 'react';

export default class CustumInput extends Component {

    render() {
        const { input: { value, onChange } } = this.props;
        return (
          
            <div class="form-group">
                <input
                name = {this.props.name}
                id = {this.props.id}
                placeholder = {this.props.placeholder}
                type = {this.props.type}
                value = {value}
                onChange = {onChange}
                
                />
            </div>
        );
    }
}

