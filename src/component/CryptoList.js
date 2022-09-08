import CryptoCard from "./CryptoCard";

const CryproList = ({topCurrency}) =>{
    const currencyMap= topCurrency.map((currency , index) =>(
        <div className="col-sm-3 mt-3">
       <CryptoCard index={index} currencyName={currency.name} currencyImg={currency.icon} currencyPrice={currency.price} currencyRank={currency.rank} />
       </div>
    ))

return(
    <div className="row m-5">
        {currencyMap}
    </div>
);
}
export default CryproList;