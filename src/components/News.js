import React from 'react'

const News = (props) => {
    const news = [
        {headline: 'Trump vs Mueller', preview: 'This is the preview for your first news item'},
        {headline: 'RIP George H W Bush', preview: 'This is the preview for your second news item'},
        {headline: 'It\'s Sunny in California', preview: 'This is the preview for your third news item'},
        {headline: 'Lakers sweep the Bulls', preview: 'This is the preview for your fourth news item'}
    ];

    return (
        
                <div style={styles.container} className="News">
                    <h3>News for you</h3>
                    {
                        news.map((item) => {
                            return (
                                <div>
                                    <img src='#' alt='Contact'></img>
                                    <h4>{item.headline}</h4>
                                    <p>{item.preview}</p>
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