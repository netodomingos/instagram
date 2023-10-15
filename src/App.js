import './App.css';
import Card from './components/CardFeed/Card';

import Stories from './components/Stories/Stories';

import { gerarNumeroRandomico } from './utils/randomNumber';

function App() {   

  const user = {
    id: 1,
    username: 'usuario1',
    profileImage: `https://picsum.photos/${gerarNumeroRandomico()}`,
    viewed: false,
  };

  const cardData = {
    user,
    imageUrl: `https://picsum.photos/${gerarNumeroRandomico()}`,
    likes: 42,
    comments: [
      { id: 1, user: 'flt_123', comment: 'mto massa' },
      { id: 2, user: 'usr_14', comment: 'gostei mto' },
      { id: 3, user: 'gemerson', comment: 'achei ruim' },
      { id: 4, user: 'sla', comment: 'horroroso' }
    ],
    publishAt: '2 d'
  };


  return (
    <div className="App">
     <Stories />
     <Card {...cardData}/>
    </div>
  );
}

export default App;
