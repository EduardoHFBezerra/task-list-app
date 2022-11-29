import { useState } from 'react';
import { Area, Header, Container } from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar o pão na padaria', done: false },
    { id: 2, name: 'Comprar um bolo na padaria', done: false }
  ]);

  const handleAddText = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>

        <AddArea
          onEnter={handleAddText}
        />

        {list.map((item, index) =>(
          <ListItem 
            key={index}
            item={item}
            onChange={handleTaskChange}
          />
        ))}
      </Area>
    </Container>
  );
}

export default App;