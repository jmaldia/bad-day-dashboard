import React from 'react'

const News = (props) => {
    return (
        
                <div style={styles.container} className="News">
                    <h3>News for you</h3>
                    {
                        props.news.filter((article, index) => index < 5).map((article, index) => {
                            return (
                                <div key={index}>
                                    <img src='#' alt='Contact'></img>
                                    <h4>{article.title}</h4>
                                    <p>{article.description}</p>
                                </div>
                            )
                        })
                    }
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

export default News;