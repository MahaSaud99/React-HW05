const CryptoCard = ({index , currencyName , currencyImg , currencyPrice , currencyRank })=>{

return(
<div key={index} className="card" style={{width: 18+'rem'}}>
     <h5 className="card-title"style={{color:"black"}}>{currencyRank}</h5>
     <img src={currencyImg} className="rounded mx-auto d-block mt-2" width="200rem" height="200rem" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"style={{color:"black"}}>{currencyName}</h5>
    <p className="card-text" style={{color:"black"}}>{currencyPrice}</p>
  </div>
</div>
    );
}
export default CryptoCard;