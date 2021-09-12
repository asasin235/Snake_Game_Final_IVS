import './App.css';
import Snake from './Snake/Snake'
import  Navbar  from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'


function App() {
  
  return (
    < >
     <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="./snake_logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
     Snake Game
      </Navbar.Brand>
    </Container>
  </Navbar>
    <div className="App">

       <Snake 
        snakeColor="#248ec2"
        fruitColor="#1d355e"
        backgroundColor="#ebebeb"
        />
    </div>
    <div className="fixed-bottom">  
            <Navbar color="dark" dark>
                <Container>
                    <Navbar.Brand>Made using React and bootstrap by Aatif Rashid</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    </>
    
  );
}

export default App;
