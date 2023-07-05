import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addTaskToServer } from "../slices/tasksSlice";
import {useDispatch} from 'react-redux'

const AddTask = () => {

    const dispatch = useDispatch()

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')


    const addTask = (e) => {
        e.preventDefault()
        console.log({title,description})
        dispatch(addTaskToServer({title,description}))
        setTitle('')
        setDescription('')
    }
  return (
    <section className="my-5">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter PassengerName,No of Seats,Prices:</Form.Label>
        <Form.Control type="text" placeholder="Enter Name Seat Price" value={title}
         onChange={(e) => setTitle(e.target.value)}/>
      </Form.Group>

      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter the Sleeper or AC Compartment:</Form.Label>
        <Form.Control type="text" placeholder="Enter your choice" value={description}
        onChange={(e) => setDescription(e.target.value)}/>
      </Form.Group>
      <div className="text-end">
        <Button variant="primary" type="submit" onClick={(e) =>addTask(e)}>
          SUBMIT
        </Button>
      </div>
    </Form>
    </section>
  );
};

export default AddTask;
