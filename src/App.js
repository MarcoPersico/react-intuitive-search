import React from 'react';
import axios from 'axios';
import SearchBarContainer from './modules/SearchBarContainer';

const mocked = [
  {
    name: "Firdsadasdasst",
    id: 1,
  },
  {
    name: "Firsfdfsfsdft",
    id: 2,
  },
  {
    name: "cxzczc cxzc",
    id: 3,
  },
  {
    name: "dadasdccc",
    id: 4,
  },
  {
    name: "Firdsadasdasst",
    id: 5,
  },
  {
    name: "Firsfdfsfsdft",
    id: 6,
  },
  {
    name: "cxzczc cxzc",
    id: 7,
  },
  {
    name: "dadasdccc",
    id: 8,
  }
]

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  function getData(value) {
    setIsLoading(true);
    return axios.get('http://www.mocky.io/v2/5e756f52300000d488a5fa8f').finally(() => setIsLoading(false));
  }

  return (
    <div className="App">
      <SearchBarContainer async={true} onAsyncRequest={getData} options={mocked} isLoading={isLoading} />
    </div>
  );
}

export default App;
