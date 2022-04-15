import React from 'react';
import './Dinner.css';
import dinner1 from '../../../../images/dinner/dinner1.png';
import dinner2 from '../../../../images/dinner/dinner2.png';
import dinner3 from '../../../../images/dinner/dinner3.png';
import dinner4 from '../../../../images/dinner/dinner4.png';
import dinner5 from '../../../../images/dinner/dinner5.png';
import dinner6 from '../../../../images/dinner/dinner6.png';
import DinnerItem from '../DinnerItem/DinnerItem';

const Dinner = () => {
    const dinner = [
        { id: 1, img: dinner1, foodname: "Baket Chiken", description: "Healty and Tasty food", price: 10.99 },
        { id: 2, img: dinner2, foodname: "Lemony Salmon Piccata", description: "Healty and Tasty food", price: 11.99 },
        { id: 3, img: dinner3, foodname: "Garlic Butter Baked Salmon", description: "Healty and Tasty food", price: 7.99 },
        { id: 4, img: dinner4, foodname: "French Fries with Cheese", description: "Healty and Tasty food", price: 9.99 },
        { id: 5, img: dinner5, foodname: "Pork Tenderloin with Quinoa Pilaf", description: "Healty and Tasty food", price: 13.99 },
        { id: 6, img: dinner6, foodname: "Salmon with Grapefruit and Lentil Salad", description: "Healty and Tasty food", price: 10.99 },
    ]
    return (
        <div className='row g-4'>
            {
                dinner.map(dinnerfood => <DinnerItem
                    key={dinnerfood.id}
                    dinnerfood={dinnerfood}
                ></DinnerItem>)
            }
        </div>
    );
};

export default Dinner;