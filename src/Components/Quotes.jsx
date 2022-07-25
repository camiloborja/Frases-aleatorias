import React from 'react'

const Quotes = ({randomColor, randomQuote, getRandomAll}) => {

    const quoteStyle ={
        color: randomColor
    }
    const backgroundStyle ={
        backgroundColor : randomColor
    }

  return (
    <div className='card' style={quoteStyle}>
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
        <div className="quote">
            <i className='bx bxs-quote-alt-left logo__grid'></i>
            <span className='quote_random'>{randomQuote.quote}</span>
        </div>

        <span className='author'>{randomQuote.author}</span>
        <div className="button">
        <button onClick={getRandomAll} style={backgroundStyle}>&#62;</button>
        </div>
    </div>
  )
}

export default Quotes