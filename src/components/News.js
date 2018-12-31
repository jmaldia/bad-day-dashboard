import React from 'react'

const News = (props) => {
    // const news = [
    //     {headline: 'Trump vs Mueller', preview: 'This is the preview for your first news item'},
    //     {headline: 'RIP George H W Bush', preview: 'This is the preview for your second news item'},
    //     {headline: 'It\'s Sunny in California', preview: 'This is the preview for your third news item'},
    //     {headline: 'Lakers sweep the Bulls', preview: 'This is the preview for your fourth news item'}
    // ];

    return (
        
                <div style={styles.container} className="News">
                    <h3>News for you</h3>
                    {
                        props.news.map((article, index) => {
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