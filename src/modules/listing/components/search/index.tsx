import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { InputWrapper, InputField, SearchButton, Result } from './styles';
import searchImg from '../../../../assets/search.png';
import deleteImg from '../../../../assets/delete.png';

type SearchProps = {
   placeholder: string;
   onSearch: (searchTerm: string) => void;
};

const Search = ({ placeholder, onSearch }: SearchProps) => {
   const navigate = useNavigate();
   const params = useParams();
   const [inputValue, setInputValue] = useState('');
   const [showResult, setShowResult] = useState(false);
   const [hasSearched, setHasSearched] = useState(false);
   const [searchClicked, setSearchClicked] = useState(false);

   useEffect(() => {
      const { search } = params;
      if (search) {
         setInputValue(search);
         setShowResult(true);
         setHasSearched(true);
         setSearchClicked(true);
      }
   }, [params]);

   const handleSearchButtonClick = () => {
      if (inputValue.trim() !== '') {
         setShowResult(true);
         setHasSearched(true);
         setSearchClicked(true);
         onSearch(inputValue.trim());
         navigate(`?search=${encodeURIComponent(inputValue.trim())}`);
      } else {
         setInputValue('');
         setShowResult(false);
         setHasSearched(false);
         setSearchClicked(false);
         onSearch('');
         navigate('/');
      }
   };

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      setShowResult(false);
      setHasSearched(false);
      setSearchClicked(false);
   };

   const handleDeleteClick = () => {
      setInputValue('');
      setShowResult(false);
      setHasSearched(false);
      setSearchClicked(false);
      onSearch('');
      navigate('/');
   };

   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
         handleSearchButtonClick();
      }
   };

   return (
      <section>
         <InputWrapper>
            <InputField
               placeholder={placeholder}
               value={inputValue}
               onChange={handleInputChange}
               onKeyPress={handleKeyPress}
            />
            {!searchClicked && (
               <SearchButton type="button" onClick={handleSearchButtonClick}>
                  <img src={searchImg} alt="Search" />
               </SearchButton>
            )}
            {hasSearched && inputValue !== '' && (
               <SearchButton type="button" onClick={handleDeleteClick}>
                  <img src={deleteImg} alt="Delete" />
               </SearchButton>
            )}
         </InputWrapper>
         {showResult && (
            <Result>
               <p>Exibindo resultados para "{inputValue}"</p>
            </Result>
         )}
      </section>
   );
};

export default Search;

