import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SearchResult } from '../../../apis/search';

function Search() {
  const { productname } = useParams();

  console.log('Search word:', productname);
  const searchWord= productname
  const [filters, setFilters] = useState({
    CoffeeType: '',
    Caffeine: '1',
    Creator: '',
    Origin: '1',
    RoastingDegree: '',
    Discount: '',
  });
  const [page, setPage] = useState(1);



  
 SearchResult( searchWord, page, filters)




  return (
<>



</>
  );
}

export default Search;