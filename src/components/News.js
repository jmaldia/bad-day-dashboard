import React from 'react'

const News = (props) => {
    const news = [
        {headline: 'Trump vs Mueller', preview: 'This is the preview for your first news item'},
        {headline: 'RIP George H W Bush', preview: 'This is the preview for your second news item'},
        {headline: 'It\'s Sunny in California', preview: 'This is the preview for your third news item'},
        {headline: 'Lakers sweep the Bulls', preview: 'This is the preview for your fourth news item'}
    ];

    return (
        
                <div style={styles} className="News">
                    <h2>News for you</h2>
                    {
                        news.map((item) => {
                            return (
                                <div>
                                    <img src='#' alt='Contact'></img>
                                    <h3>{item.headline}</h3>
                                    <p>{item.preview}</p>
                                </div>
                            )
                        })
                    }
                </div>
    );
};

const styles = {
    
};

export default News;