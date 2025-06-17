import 'bootstrap/dist/css/bootstrap.min.css';
import Quotes from "./components/Quotes";

const App = () => {
  return (
    <div className='d-flex flex-column justify-content-center mt-5 align-items-center'>
      <h2>InspireDaily</h2>
      <p>One Quote, with Every Click</p>
      <Quotes />
    
    </div>
  );
}

export default App;







