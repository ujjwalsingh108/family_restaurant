
import React from 'react';
import Menu from './MenuComponent';
import DishDetail from "./DishdetailComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

import { DISHES } from '../Shared/dishes';
import { COMMENTS } from '../Shared/comments';
import { LEADERS } from '../Shared/leaders';
import { PROMOTIONS } from '../Shared/promotions';


class Main extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  render(){
      const HomePage = () => {
          return(
            <Home 
            dish={this.state.dishes.filter((dish) => dish.featured)[0]}

            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}

            leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
          );
      }

    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.state.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId, 10))[0]}
        
        comments={this.state.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId, 10))}
        />
      );
    }

    return(
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/aboutus' component={() => <About leaders = {this.state.leaders} />} />
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;


/** 
 * Acting as a psuedo component for App.js component.
 * 
 * It is not doing any rendering of the views
 * 
 * Acting as a container component
 * 
 * 
 * We import 'Switch' from react-router-dom. After that we enclose within Switch, the couple of routes.
 * 
 * path="/menu/:dishId"  --> Here ':dishId' is called route-parameters.  
 * 
 */
