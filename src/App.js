import { useState , useEffect } from 'react';
import './App.css';
import CryptoCard from './component/CryptoCard';
import CryproList from './component/CryptoList';
import Header from './component/Header';
import SearchBar from './component/SearchBar';
import Spinner from './component/Spinner';

function App() {
  const [currencyList, setCurrencyList] = useState([])
  const [currencyImg , setCurrencyImg]=useState('')
  const [currencyName , setCurrencyName]=useState('')
  const [currencyPrice, setCurrencyPrice]=useState('')
  const [currencyRank , setCurrencyRank]=useState('')
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState(false);
  const [topCurrency , setTopCurrency]=useState([]);



  // ------fetch all data------
  useEffect(() => {
    const fetchCurrencyData = async () => {
      const request = await fetch('https://api.coinstats.app/public/v1/coins');
      const data = await request.json();

      let top=data.coins.slice(0,10);
      setTopCurrency(top)    
      const currencyMap = data.coins.map((currency) => {
        return {
          value: currency.id,
          label: currency.name,
        };
      });
      setCurrencyList(currencyMap);
      setLoading(false);
    };
    fetchCurrencyData();
  }, []);
  

  // ------fetch selected currency-------
  const onSelect = async (option) => {
    setLoading(true);
    const request = await fetch('https://api.coinstats.app/public/v1/coins/'+ option.value);
    const data = await request.json();
          setCurrencyName(option.label);
          setCurrencyImg(data.coin.icon);
          setCurrencyPrice(data.coin.price);
          setCurrencyRank(data.coin.rank)
          setLoading(false);
          setDisplay(true);
  };


  return (
    <div className="App">
      <header className="App-header">
      {loading ? (
        <Spinner />
      ) : (
        <>
       <Header/>

       <SearchBar currencyList={currencyList} onSelect={onSelect}/>

       { display? <CryptoCard currencyName={currencyName} currencyImg={currencyImg} currencyPrice={currencyPrice} currencyRank={currencyRank}/> :
       <>
        <p style={{color:"black"}}>Top 10 Crypto Currency</p>
        <CryproList topCurrency={topCurrency}/>
         </>
        }
       </>
      )
      }
      </header>
    </div>
  );
}

export default App;
