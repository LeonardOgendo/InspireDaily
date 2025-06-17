import { useState, useEffect } from 'react';
import axios from 'axios';

const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
    const [currentQuote, setCurrentQuote] = useState(null);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
                setQuotes(response.data.quotes);
                const randomIndex = Math.floor(Math.random() * response.data.quotes.length);
                setCurrentQuote(response.data.quotes[randomIndex]);
            } catch (error) {
                console.error("Error fetching quotes: ", error);
            }
        };

        fetchQuote();
    }, []);

    const getRandomQuote = () => {
        if (quotes.length === 0) return;
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
    };

    return (
        <div id="quote-box" style={{ width: "500px" }} className='border rounded p-4'>
            {currentQuote && (
                <>
                    <blockquote id="text" style={{ fontStyle: 'italic', fontSize: '1.2rem' }}>
                        “{currentQuote.quote}”
                    </blockquote>
                    <p id="author">— {currentQuote.author}</p>
                </>
            )}

            <div className="d-flex justify-content-between mt-3">
                <a
                    id="tweet-quote"
                    className="btn btn-outline-info"
                    href={
                        currentQuote
                            ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                                `"${currentQuote.quote}" — ${currentQuote.author}`
                            )}`
                            : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Tweet
                </a>

                <button id="new-quote" className="btn btn-primary" onClick={getRandomQuote}>
                    Generate
                </button>
            </div>
        </div>
    );
};

export default Quotes;
