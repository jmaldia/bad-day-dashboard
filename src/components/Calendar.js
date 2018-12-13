import React from 'react'

const Calendar = (props) => {
    return (
        <div style={styles.container}>
            <h3>Agenda</h3>
            <div>
                <div>
                    <h4>Agenda 1</h4>
                    <p>Details</p>
                </div>
                <div>
                    <h4>Agenda 2</h4>
                    <p>Details</p>
                </div>
                <div>
                    <h4>Agenda 3</h4>
                    <p>Details</p>
                </div>
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

export default Calendar;