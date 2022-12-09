import './NewPlace.css';
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from '../../shared/utils/Validatiors';

const NewPlace = () => {
  const errorText = "Please enter a valid title.";
  return <form className="place-form">
    <Input element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText={errorText} />
  </form>;
};

export default NewPlace;