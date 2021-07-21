import React from "react";
import { Formik, Form } from "Formik";
import { Button } from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { useMutation } from "urql";
import { useRegisterMutation, UserError } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const [, register] = useRegisterMutation();
  const router = useRouter()
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register(values);
          if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data?.register.errors))
          }
          else if (response.data?.register.user) {
            router.push('/', {})
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="name"
              type="text"
              label="Name"
              placeholder="Your name"
              required={false}
            ></InputField>
            <InputField
              name="email"
              type="emai"
              label="Email"
              placeholder="Your email"
              required={false}
            ></InputField>
            <InputField
              name="password"
              type="password"
              label="Password"
              placeholder="***"
              required={false}
            ></InputField>
            <Button
              mt={4}
              colorScheme="red"
              type="submit"
              isLoading={isSubmitting}
            >
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
