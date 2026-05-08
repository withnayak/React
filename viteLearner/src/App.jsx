
import Card from './components/card'
const App = () => {
  return (
    <div className='parent'>
      < Card user='Sid Nayak' img='https://i.pinimg.com/474x/51/6c/56/516c5679edcd78a42920b7c2849908c3.jpg'/>
      <Card user='Siddharth' img='https://i.pinimg.com/736x/c3/89/ce/c389ceac6373ccc7f0b9694a58eedfa4.jpg' />
     <Card user='Ayush Kumar' img='https://i.pinimg.com/1200x/0c/6f/e8/0c6fe80e89b3810f669c88940ad9e5a1.jpg'/>
    </div>
  )
}

export default App