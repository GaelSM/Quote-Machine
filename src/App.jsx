import { getQuote } from './services/useFetch'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const [click, setClick] = useState(false)

  useEffect(() => {
    async function fetchQuote(){
      const {content, author} = await getQuote()
      setQuote(content)
      setAuthor(author)
    }
    fetchQuote()
  }, [click])

  const handleClick = () => setClick(!click)

  return (
    <main id="quote-box">
      <h1 id="text"> ❝ {quote} ❞ </h1>
      <p id="author"> - {author} - </p>
      <div className="footer">
        <a href={`https://twitter.com/intent/tweet?text=${quote}`} id="tweet-quote" target='blank'> Tweet </a>
        <button id="new-quote" onClick={handleClick}> New Quote </button>
      </div>
    </main>
  )
}

export default App