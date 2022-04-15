import React from 'react';
import { Card } from 'react-bootstrap';

const LunchItem = ({ lunchfood }) => {
    const { img, foodname, description, price } = lunchfood;
    return (
        <div className="col-md-6 col-lg-4">
            <div className='d-flex justify-content-center'>
                <Card className='food-card' style={{ width: '18rem', border: 'none' }}>
                    <Card.Img className='ps-5 pe-5 pt-4' variant="top" src={img} />
                    <Card.Body className='text-center' >
                        <Card.Title>{foodname}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            <h4>${price}</h4>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default LunchItem;