// import { useContext, React} from 'react'
// import {CounterContext} from '../context/CounterContext'
import ChangeCounter from '../components/ChangeCounter'

// 4 - Refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext'

// 5 - Context complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const Home = () => {
  // const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext();

  // 5 - Context complexo
  const {colorContext} = useTitleColorContext();
  
  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - Alterando context */}
      <ChangeCounter/>
    </div>
  )
}

export default Home