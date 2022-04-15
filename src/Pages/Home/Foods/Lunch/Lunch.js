import React from 'react';
import './Lunch.css';
import lunch1 from '../../../../images/lunch/lunch1.png';
import lunch2 from '../../../../images/lunch/lunch2.png';
import lunch3 from '../../../../images/lunch/lunch3.png';
import lunch4 from '../../../../images/lunch/lunch4.png';
import lunch5 from '../../../../images/lunch/lunch5.png';
import lunch6 from '../../../../images/lunch/lunch6.png';
import LunchItem from '../LunchItem/LunchItem';

const Lunch = () => {
    const lunch = [
        { id: 1, img: lunch1, foodname: "Beef Steak", description: "Healty and Tasty food", price: 16.99 },
        { id: 2, img: lunch2, foodname: "Honey-Soy-Glazed Salmon with Peppers", description: "Healty and Tasty food", price: 8.99 },
        { id: 3, img: lunch3, foodname: "Tarragon-Rubbed-Salmon", description: "Healty and Tasty food", price: 7.99 },
        { id: 4, img: lunch4, foodname: "Indian Lunch", description: "Healty and Tasty food", price: 9.99 },
        { id: 5, img: lunch5, foodname: "Fried Chicken Bento", description: "Healty and Tasty food", price: 9.99 },
        { id: 6, img: lunch6, foodname: "Healthy Meal Plan", description: "Healty and Tasty food", price: 24.99 }
    ]
    return (
        <div className='row g-4'>
            {
                lunch.map(lunchfood => <LunchItem
                    key={lunchfood.id}
                    lunchfood={lunchfood}
                ></LunchItem>)
            }
        </div>
    );
};

export default Lunch;