import React from 'react';

const Weather
 = (props) => {
    return (
        <div style={styles.container}>
            <h3>Weather</h3>
            <h4>It's {props.temp} degrees</h4>
            <div className="Weather-forecast">
            </div>
        </div>
    );
};

const styles = {
    container: {
        width: 600,
        padding: 20,
        margin: 40,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth: 1
    }
};

export default Weather
;