import Select from 'react-select'

const SearchBar = ({currencyList , onSelect})=>{
return(
    <div className='input-group mt-3 w-50 mx-auto pb-5'>
    <Select className='w-100 text-dark' onChange={onSelect} options={currencyList} />
    </div>
);
}
export default SearchBar;