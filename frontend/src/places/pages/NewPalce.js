import { useCallback, useReducer } from 'react';

import Button from '../../shared/components/FormElements/Button';
import './NewPlace.css';
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/utils/Validatiors';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if(inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      };
    default:
      return state;
  }
};

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    isValid: false
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId: id});
  },[]);

  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  const titleErrorText = "Please enter a valid title.";
  const descriptionErrorText = "Please enter a valid description (at least 5 characters).";
  const addressErrorText = "Please enter a valid address.";

  return <form className="place-form" onSubmit={placeSubmitHandler}>
    <Input
      id="title"
      element="input"
      type="text"
      label="Title"
      validators={[VALIDATOR_REQUIRE()]}
      errorText={titleErrorText}
      onInput={inputHandler}
    />
    <Input
      id="description"
      element="textarea"
      label="Description"
      validators={[VALIDATOR_MINLENGTH(5)]}
      errorText={descriptionErrorText}
      onInput={inputHandler}
    />
    <Input
      id="address"
      element="input"
      type="text"
      label="Address"
      validators={[VALIDATOR_REQUIRE()]}
      errorText={addressErrorText}
      onInput={inputHandler}
    />
    <Button type="submit" disabled={!formState.isValid}>
      ADD PLACE
    </Button>
  </form>;
};

export default NewPlace;