import "./index.css";
import {useState, useEffect} from "react"
import service from "./service"


const App = () => {
  const [quotes, setQuotes]=useState([])
  const [newQuote, setNewQuote]=useState("")
  const [dailyQuote, setDailyQuote] = useState("jonne")

  useEffect(() => {
    service.getAll().then(initialData => {
      setQuotes(initialData)
      updateDailyQuote()
    })
  })

  const addQuote = event => {
    event.preventDefault()
    let quot = newQuote
    service
      .create(quot)
      .then(quot => {
        setQuotes(quotes.concat(quot))
      })
    
    setNewQuote("")
  }

  const handleQuoteChange = event => {
    setNewQuote(event.target.value)
  }

  const updateDailyQuote = () => {
    let oikea = (service.getNewQuote()).then((response) => {
      setDailyQuote(response.data)
    })
  
  }

    return (
    <div className="container">
      <center>
        <h1>Quote of the day</h1>
        <p>"{dailyQuote}"</p>
        <form className="jari" onSubmit={addQuote}>
          <input className="kari" value={newQuote} onChange={handleQuoteChange}/>
          <div></div>
          <button className="juki" type="submit">add your thoughts</button>
        </form>
      </center>
    </div>
  )
}

export default App
