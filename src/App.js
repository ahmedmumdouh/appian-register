import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegistrationSection from "./components/RegistrationSection";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Header/> */}
          <Route path="/" component={RegistrationSection} exact />
          {/* <Route path="/" component={HomeScreen} exact />
          <Route path="/search" component={SearchScreen} exact />
          <Route path="/category" component={Category} exact />
          <Route path="/admin" component={AdminScreen} exact />
          <Route path="/UnAuthAccess" component={UnAuthAccess} exact />
          <Route path="/authors" component={AuthorList} exact />
          <Route path="/books" component={BookList} exact />
          <Route path="/authorsDetails/:id" component={AuthorDetails} exact />
          <Route path="/booksDetails/:id" component={BookDetails} exact />
          <Route component={My404Component} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
