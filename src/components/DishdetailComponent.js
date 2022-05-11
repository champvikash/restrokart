import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
            );
        } else {
            return(
                <div></div>
            );
        };  
    }

    renderComments(dish) {
        if (dish != null) {
            if (dish.comments != null) {
                const comments = dish.comments.map((comment) => {
                    const date = new Date(comment.date);
                    var dd = date.getDate();
                    if (dd < 10) {
                        dd = '0' + dd;
                    }
                    const displayDate = date.toLocaleString('en-us', { month: 'short' })
                        + " " + dd + ", " + date.getFullYear();
                    return(
                        <div key={comment.id}>
                            <CardText>
                                {comment.comment}
                            </CardText>
                            <CardText>
                                -- {comment.author}, {displayDate}
                            </CardText>
                            <br></br>
                        </div>
                    );
                });
                return(
                    <Card>
                        <h4>Comments</h4>
                        <br></br>
                        {comments}
                    </Card>
                )
                
            } else {
                return(
                    <div></div>
                );
            }
        } else {
            <div></div>
        }
        
    }

    render() {
        const dish = this.props.dish;
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(dish)}
                </div>
            </div>
        )
    }
}

export default DishDetail;