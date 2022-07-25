import { useState } from 'react'
import './App.css'
import Quotes from './Components/Quotes'
import quotes from './json/quotes.json'
import colors from './utils/colors'

function App() {
  const getRandomElement = arr => {
    const quoteRandom = Math.floor(Math.random() * arr.length)
    return arr[quoteRandom]
  }

  const quotesRandom = getRandomElement(quotes)
  const colorsRandom = getRandomElement(colors)

  const [randomQuote, setRandomQuote] = useState(quotesRandom)
  const [randomColor, setRandomColor] = useState(colorsRandom)

  const fontStyle= {
      backgroundColor: randomColor
  }

  const getRandomAll =() => {
    const quotesRandom = getRandomElement(quotes)
    const colorsRandom = getRandomElement(colors)
    setRandomQuote(quotesRandom)
    setRandomColor(colorsRandom)
  }

  return (
    <div className="App" style={fontStyle}>
      <Quotes 
      randomColor={randomColor} 
      randomQuote={randomQuote}
      getRandomAll={getRandomAll}/>
    </div>
  )
}

export default App
