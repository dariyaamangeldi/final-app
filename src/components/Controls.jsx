import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Search } from './Search';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    const regionValue = region?.value || '';
    onSearch(search, regionValue);

  }, [search]);

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
    </Wrapper>
  );
};
