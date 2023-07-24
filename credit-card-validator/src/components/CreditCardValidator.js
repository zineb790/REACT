import React, { useState } from "react";
import LuhnAlgorithm from "./LuhnAlgorithm";


  function CreditCardValidator() {
   
    const [creditCardNumber, setCreditCardNumber] = useState('');
    
      const [isValid, setIsValid] = useState(false);
    
      

        const handleChange = (e) =>{
            const inputCreditCardNumber = e.target.value.replace(/\s/g, '');

          setCreditCardNumber(inputCreditCardNumber);

            setIsValid(LuhnAlgorithm(inputCreditCardNumber));
           
    };
    
      
    return (
      
      <div>
        {/* <LuhnAlgorithm/> */}
                <input type="text" value={creditCardNumber} onChange={handleChange} placeholder="Enter Credit Card Number" />
        
        <div>{isValid ? 'Valid Credit Card' : 'Invalid Credit Card'}</div>
            
        </div>

    );
    
};
export default CreditCardValidator;