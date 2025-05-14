import './App.css'

const user = {
  name: 'Tom Seidel',
  pic: 'https://tomseidel.com/assets/pictures/tom.jpg',
  size: '300px'
};



export default function App() {
  return (
    <>
      <h1>{user.name}</h1>
      <img className="avatar" src={user.pic} alt={user.name} style={{width: user.size}} />
    </>
  )
}