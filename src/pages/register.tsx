import React from "react";
import { Formik, Form } from "Formik";
import { Button } from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="name"
              type="text"
              label="Name"
              placeholder="Your name"
              required={true}
            ></InputField>
            <InputField
              name="email"
              type="emai"
              label="Email"
              placeholder="Your email"
              required={true}
            ></InputField>
            <InputField
              name="password"
              type="password"
              label="Password"
              placeholder="***"
              required={true}
            ></InputField>
            <Button mt={4} colorScheme="teal" type="submit" isLoading={isSubmitting}>
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
