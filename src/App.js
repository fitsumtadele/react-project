import Button from "@restart/ui/esm/Button";
import Todo from './components/Todo';
import React from 'react';

function App() {
  return( <div>
          <h1>my todos</h1>
            <Todo text='learn react'/>
            <Todo text='master react'/>
            <Todo text='expert react'/>
           
        </div>);
}

export default App;
