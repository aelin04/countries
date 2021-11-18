

import Button from '../ui/button/button'
import Input from '../ui/input/input'

export default function AddTodo( { inpData, setInpData, addTask }) {
    return (
        <>
            <Input 
            inpData = {inpData}
            setInpData = {setInpData}/>
            <Button
            onClick ={addTask}
            >Add</Button>
        </>
    )
}

