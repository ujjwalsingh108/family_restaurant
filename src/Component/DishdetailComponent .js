import React from "react";
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
class DishDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dishlist: this.props.dish,
            commentslist: this.props.comments
        }
    }

    renderDish(dish){
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    // renderComment(remark){
    //     <ListGroup key={remark.id}>
    //         <ListGroupItem>
    //             <ListGroupItemText>
    //                 {remark.comment}
    //             </ListGroupItemText>
    //             <ListGroupItem>
    //                 {remark.author}
    //                 {remark.date}
    //             </ListGroupItem>
    //         </ListGroupItem>
    //     </ListGroup>
    // }

    render(){
        return(
            <>
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.dishlist)}
                </div>
                {/* <div className="col-12 col-md-5 m-1">
                    {this.renderComment(this.state.commentslist)}
                </div> */}
            </>
        );
    }
}

export default DishDetail;