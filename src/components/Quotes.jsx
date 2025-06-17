
import { useState, useEffect } from 'react';
import axios from 'axios';

const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
    const [currentQuote, setCurrentQuote] = useState([]);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
                setQuotes(response.data.quotes);

                const randomIndex = Math.floor(Math.random() * response.data.quotes.length);
                setCurrentQuote(response.data.quotes[randomIndex]);
            } catch (error) {
                console.error("Eror fetching quotes: ", error);
            }
        };

        fetchQuote();
    }, []);

    const getRandomQuote = () => {
        if (quotes.length === 0) return;

        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
    }

    return (
        <div>
            {currentQuote && (
                <div style={{ marginBottom: '20px' }}>
                    <blockquote style={{ fontStyle: 'italic', fontSize: '1.2rem' }}>
                        “{currentQuote.quote}”
                    </blockquote>
                    <p>— {currentQuote.author}</p>
                </div>
            )}

            <button className="btn btn-primary" onClick={getRandomQuote}>Generate</button>
        </div>
    );
}

export default Quotes;