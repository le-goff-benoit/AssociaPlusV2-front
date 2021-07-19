import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Box,
} from "@chakra-ui/react";
import React, { InputHTMLAttributes } from "react";
import { useField } from "Formik";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
};

export const InputField: React.FC<InputFieldProps> = (props) => {
  const [field, { error }] = useField(props);
  return (
    <Box mt={'10px'}>
      <FormControl isInvalid={!!error}>
        <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
        <Input
          {...field}
          id={field.name}
          placeholder={props.placeholder}
          type={props.type}
          required={props.required}
        />
      </FormControl>
    </Box>
  );
};
