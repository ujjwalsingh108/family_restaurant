import React from "react";
import {
   Card, 
   CardImg, 
   CardText, 
   CardBody, 
   CardTitle, 
   Breadcrumb, 
   BreadcrumbItem
} from "reactstrap";
import {Link} from 'react-router-dom';

function RenderDish({dish}) {
      if (dish != null) {
         return (
            <div className="col-12 col-md-5 m-1">
               <Card>
                  <CardImg top width="100%" src={dish.image} alt={dish.name} />
                  <CardBody>
                     <CardTitle>{dish.name}</CardTitle>
                     <CardText>{dish.description}</CardText>
                  </CardBody>
               </Card>
            </div>
         );
      } else {
         return <div></div>;
      }
   }

function RenderComments({comments}) {
      if (comments != null) {
         const listComment = comments.map((comment) => {
            return (
               <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>
                     --{comment.author},&nbsp;
                     {new Date(comment.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                     })}
                  </p>
               </li>
            );
         });

        return (
            <div className="col-12 col-md-5 m-1">
               <h4>Comments</h4>
               <ul className="list-unstyled">
                   {listComment}
                </ul>
            </div>
         );
        }
        else {
         return <div></div>;
        }
    }

const DishDetail = (props) => {
      const dish = props.dish;
      const comment = props.comments;
      if (dish != null) {
         return (
            <div className="container">
               <div className="row">
                  <Breadcrumb>
                  <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                  <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                  <h3>{dish.name}</h3>
                  <hr />
                  </div>
               </div>
               <div className="row">
                  <RenderDish dish={dish} />
                  <RenderComments comments={comment} />
               </div>
            </div>
         );
      } else {
         return <div></div>;
      }
   }

export default DishDetail;

/** &nbsp; is called non-breaking space, which means that two words can be written without going into the next line, having only a single space */


/** 
 * To install font-awesome in the react application 
 * npm install font-awesome --save
 * 
 * To add social media applications inside our website  -- install bootstrap-social
 * 
 * npm install bootstrap-social --save
 * 
 * We pass the attribute name and attribute value in the form of 'props'. props is basically an object. So to access the passed parameter inside the function, we'd use 'props.attribute_name'
 */