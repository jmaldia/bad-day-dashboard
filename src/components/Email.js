import React from 'react'

const Email = (props) => {
    const emails = [
        {subject: 'Your important email 1', preview: 'This is the preview for your first email'},
        {subject: 'Your important email 2', preview: 'This is the preview for your second email'},
        {subject: 'Your important email 3', preview: 'This is the preview for your third email'},
        {subject: 'Your important email 4', preview: 'This is the preview for your fourth email'}
    ]
    return (
        
                <div style={styles} className="Email">
                    {
                        emails.map((email) => {
                            return (
                                <div>
                                    <img src='#' alt='Contact'></img>
                                    <h3>{email.subject}</h3>
                                    <p>{email.preview}</p>
                                </div>
                            )
                        })
                    }
                </div>
    );
};

const styles = {
    
};

export default Email;