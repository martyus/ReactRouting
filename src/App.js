import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import AllDepartments from './components/AllDepartments';
import Counter from './components/Counter';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import DepartmentDetail from './components/DepartmentDetail';

function App() {

  return (
    <BrowserRouter>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand to="/">React App with Router</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">Departments</Nav.Link>
              <Nav.Link as={NavLink} to="/welcome">Welcome</Nav.Link>
              <Nav.Link as={NavLink} to="/counter">Counter</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>


      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/department/:id" element={<DepartmentDetail />} />
        <Route path="/" exact element={<AllDepartments />} />
      </Routes>




    </BrowserRouter>
  );
}

export default App;
