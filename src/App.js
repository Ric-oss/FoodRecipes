import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Recipe from './components/recipe';
import Header from './components/Header.js'

function App() {
  const [lists, setlist] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(()=>{
    console.log("useeffect");
    setdata()
  },[query])

  const getdata = (e) => {
    setSearch(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault();
    console.log("submit")
    setQuery(search)
    console.log("before cleaning search")
    setSearch("")

  }


  const setdata = () => {
    console.log("fetching data from apis")
    // this.setState({ query: this.state.search })
    const App_id = 'cdaaf1d1'
    const App_key = '5f3035d5705cae5677366736fd53fff1'
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}`)
      .then(res => {
        return res.json();
      }).then(data => {
        setlist(data.hits);
      })
  }





  return (
    <>
    <div className="header">
      <Header value={search} getdata={getdata} submit={submit}/>
      </div>
      
        <div className="recipe">

          {lists.map((recipe) => {
            return (
              <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />

            )
          })
          }
        </div>
    </>
  )

}

export default App;
