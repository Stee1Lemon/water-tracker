import {Label, Input, ErrorMessage} from "./FormInput.styled"

export const FormInput = ({ label = "", error, ...props }) => {
    console.log('FormInput error :>> ', error);
  return (
    <Label>
        {label}
        <Input {...props} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
    </Label>
  )
}

