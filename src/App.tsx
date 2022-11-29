import { useState } from 'react';
import { Area, Header, Container } from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar o pão na padaria', done: false },
    { id: 2, name: 'Comprar um bolo na padaria', done: false }
  ]);

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>
        {list.map((item, index) =>(
          <ListItem 
            key={index}
            item={item}
          />
        ))}
      </Area>
    </Container>
  );
}

export default App;