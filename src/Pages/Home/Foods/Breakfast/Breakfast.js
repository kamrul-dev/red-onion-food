import React from 'react';
import './Breakfast.css';
import breakfast1 from '../../../../images/breakfast/breakfast1.png'
import breakfast2 from '../../../../images/breakfast/breakfast2.png'
import breakfast3 from '../../../../images/breakfast/breakfast3.png'
import breakfast4 from '../../../../images/breakfast/breakfast4.png'
import breakfast5 from '../../../../images/breakfast/breakfast5.png'
import breakfast6 from '../../../../images/breakfast/breakfast6.png'
import BreakFastItem from '../BreakFastItem/BreakFastItem';

const Breakfast = () => {
    const breakfast = [
        { id: 1, img: breakfast1, foodname: "Eggs Benedict", description: "Healty and Tasty food", price: 6.99 },
        { id: 2, img: breakfast2, foodname: "Breakfast Sandwitch", description: "Healty and Tasty food", price: 6.99 },
        { id: 3, img: breakfast3, foodname: "Baket Chiken", description: "Healty and Tasty food", price: 6.99 },
        { id: 4, img: breakfast4, foodname: "Begel and Cream Cheese", description: "Healty and Tasty food", price: 6.99 },
        { id: 5, img: breakfast5, foodname: "Full Breakfast Fried Egg Toast Brunch", description: "Healty and Tasty food", price: 6.99 },
        { id: 6, img: breakfast6, foodname: "Toast Croissant Fried Egg", description: "Healty and Tasty food", price: 6.99 }
    ]
    return (
        <div className='row g-4'>
            {
                breakfast.map(breakfood => <BreakFastItem
                    key={breakfood.id}
                    breakfood={breakfood}
                ></BreakFastItem>)
            }
        </div>
    );
};

export default Breakfast;