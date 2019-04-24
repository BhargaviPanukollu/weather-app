import React from 'react';
import '../styles/Error.css';

class Error extends React.Component {
    render() {
        return (
            <div className="error-container">
                <label>We're sorry!</label>
                <p>Forecast for selected city is not available, Please check back later.</p>
            </div>
        );
    }
}

export default Error;