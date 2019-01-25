import React from 'react'

const Email = (props) => {
    const emails = [
        {subject: 'Your important email 1', preview: 'This is the preview for your first email'},
        {subject: 'Your important email 2', preview: 'This is the preview for your second email'},
        {subject: 'Your important email 3', preview: 'This is the preview for your third email'},
        {subject: 'Your important email 4', preview: 'This is the preview for your fourth email'}
    ]
    return (
        
                <div style={styles.container} className="Email">
                    <h3>Emails</h3>
                    {
                        emails.map((email, index) => {
                            return (
                                <div key={index}>
                                    <img src='#' alt='Contact'></img>
                                    <h4>{email.subject}</h4>
                                    <p>{email.preview}</p>
                                </div>
                            )
                        })
                    }
                </div>
    );
};

const styles = {
    container: {
        width: '100%',
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

export default Email;