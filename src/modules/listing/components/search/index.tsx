import { useState } from 'react';
import { InputWrapper, InputField, SearchButton, Result } from './styles';
import searchImg from '../../../../assets/search.png';
import deleteImg from '../../../../assets/delete.png';

type SearchProps = {
   placeholder: string;
};

const Search = ({ placeholder }: SearchProps) => {
   const [inputValue, setInputValue] = useState('');
   const [showResult, setShowResult] = useState(false);

   const handleSearchButtonClick = () => {
      setShowResult(true);
   };

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
   };

   const handleDeleteClick = () => {
      setInputValue('');
      setShowResult(false);
   };

   return (
      <section>
         <InputWrapper>
            <InputField
               placeholder={placeholder}
               value={inputValue}
               onChange={handleInputChange}
            />
            {showResult ? (
               <SearchButton type="button" onClick={handleDeleteClick}>
                  <img src={deleteImg} alt="Delete" />
               </SearchButton>
            ) : (
               <SearchButton type="button" onClick={handleSearchButtonClick}>
                  <img src={searchImg} alt="Search" />
               </SearchButton>
            )}
         </InputWrapper>
         {showResult && (
            <Result>
               <p>Exibindo resultados para "teste"</p>
               <span>1 Resultado encontrado</span>
            </Result>
         )}
      </section>
   );
};

export default Search;
