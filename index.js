//import { useEffect, useState } from 'react';

function App(){
    const [quote, setQuote] = React.useState({})

    React.useEffect(()=>{
      getQuote();
    },[]);
  
    const getQuote = () =>{
      fetch('https://api.quotable.io/random')
      .then((response) => {
        return response.json();
      })
      .then((data) =>{
        setQuote({
          text: data.content,
          author: data.author
        });
      });
    };
   
    return(
        <div className="App">
            <div className="container">
            <div className="row py-5 mx-2">
                <div className="col-md-8 offset-md-2">
                <wrapper id="quote-box">
                    <div className="card">
                    <div className="card-body">
                        <h5 id="text" className="card-title">{quote.text}</h5>
                        <p id="author" className="card-text text-end">- {quote.author}</p>
                    </div>
                    <div className="d-flex justify-content-evenly my-2">
                        <button className="btn btn-success" id="new-quote" onClick={getQuote}>New Quote</button>
                        <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + quote.text} id="tweet-quote" className="btn btn-primary">Tweet this Quote!</a>
                    </div>
                    </div>
                </wrapper>
                </div>
            </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('app'))