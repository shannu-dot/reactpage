
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import House from './houses';


function App() {
  return (
    <Router>
    <div className="container">
      <Header subtitle="Providing houses all over world"/>

      <Switch>
      
      <Route path="/houses" component={House} />
      <Route path="/" component={FeaturedHouse} />
        
        </Switch>
    </div>

    </Router>
  );
}

export default App;
