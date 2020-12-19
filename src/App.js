import React, {useState} from 'react';
import data from './data'
import List from './List';



const App = ()=>{
    const [people,setPeople] = useState(data)
    const clearListHandler = ()=>setPeople([])
    return(
        <main>
      <section className="container">
        <h3 style={{textAlign:'center'}}>{people.length} People you may know</h3>
        <List people={people} setPeople={setPeople}/>
        <button onClick={clearListHandler}>Clear list</button>
      </section>
    </main>
    )
}




export default App 