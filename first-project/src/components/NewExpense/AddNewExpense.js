import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';


const AddNewExpense = (props) => {
    const [AddOption, setAddOption] = useState(false)
    const getFormData = (formData) => {
        props.onSaveExpenseData(formData)
    }
    const AddOptionSwitch = () => {
        if (AddOption) {
            setAddOption(false)
        } else {
            setAddOption(true)
        }
    }
    if (AddOption) {
        return <div className="add-new-expense">
        <ExpenseForm  onSaveExpenseData={getFormData} AddOptSwitch={AddOptionSwitch}></ExpenseForm>
        </div>
    } else {
        return <div className="add-new-expense">
            <button onClick={AddOptionSwitch}>Add New Expense</button>
        </div>
    }

    
}

export default AddNewExpense