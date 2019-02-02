import React from 'react'

const News = (props) => {
    return (
        
                <div style={styles.container} className="News">
                    <h3>News for you</h3>
                    {
                        props.news.filter((article, index) => index < 5).map((article, index) => {
                            return (
                                <div key={index}>
                                    <img src={article.urlToImage} alt='Contact' width="300"></img>
                                    <a href={article.url} target="_blank" rel="noopener noreferrer"><h4>{article.title}</h4></a>
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
        width: '100%',
        padding: 20,
        // margin: 40,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: '#000',
        borderColor: '#cecece',
        borderWidth: 1,
        backgroundColor: '#eee',
        overflow: 'scroll'
    }
};

export default News;