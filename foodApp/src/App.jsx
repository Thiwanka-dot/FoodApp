import { useState } from 'react'
import './App.css';
import Nav from './components/Nav'
import Search from './components/Search'
import FoodList from './components/FoodList'
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';
import FoodDetails from './components/FoodDetails';

function App() {
  const [foodData,setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");
  return (
    <div className="App">
      <Nav/>
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData}/>
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId}/>
        </InnerContainer>
      </Container>      
    </div>
  )
}

export default App
