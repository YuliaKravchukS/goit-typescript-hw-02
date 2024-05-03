import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'


const SearchBar = ({onSearch}) => {
 
    const handleSubmit=(e)=> {
        e.preventDefault();
        const searchForm = e.target.elements.searchForm.value;
        if(searchForm.trim() === '') {
          
          return toast.error('Please enter search term!')
        }
        onSearch(searchForm);
        e.target.reset()
      }
  
  return (
    
    <header className={css.header}>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      name="searchForm"
      className={css.inputSearch}
     
    />
    <button className={css.btnSearch} type="submit">Search</button>
  </form>
  <Toaster  position="top-center"  reverseOrder={true} />
</header>



  )
}

export default SearchBar