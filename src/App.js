import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
const [people, setPeople] = useState(data); // data as default, send array to people state

  return <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>  {/* get the array length from data.js */}
      <List people={people} />   {/* sending people prop to List component */}
      <button onClick = {()=> setPeople([])}>Clear all</button>  {/* clear people by assign empty array [] using setPeople */}
    </section>
  </main>
}
export default App;
