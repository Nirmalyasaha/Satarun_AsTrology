import { signUpMutation } from "@/api/functions/user.api";
import { SignUpTypes } from "@/interface/signUp.iterface";
import validationText from "@/json/messages/validationText";
import Wrapper from "@/layout/wrapper/Wrapper";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  full_name: yup.string().required(),
  email: yup
    .string()
    .trim()
    .email(validationText.error.email_format)
    .required(validationText.error.enter_email),
  password: yup.string().trim().required(validationText.error.enter_password),
  birth_year: yup.number().required(),
  birth_month: yup.number().required(),
  birth_date: yup.number().required(),
  birth_hour: yup.number().required(),
  birth_minute: yup.number().required(),
  birth_meridian: yup.string().required(),
  birth_place: yup.string().required(),
  current_location: yup.string().required(),
  lat: yup.number().required(),
  lon: yup.number().required()
});

export type SignUpSchema = yup.InferType<typeof schema>;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<SignUpTypes>({
    resolver: yupResolver(schema)
  });

  const { mutate, error } = useMutation({ mutationFn: signUpMutation });

  const onSubmit =(data: SignUpSchema) => {
    console.log(data);

    mutate( 
        {...data}, 
        {
            onSuccess:(res)=>{
                console.log (res)
            }
        }
        );
  };

  return (
    <Wrapper>
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <InputFieldCommon
          required
          type="text"
          label="Full Name"
          sx={{
            my: 1
          }}
          {...register("full_name")}
        />
        <InputFieldCommon
          required
          type="text"
          label="Email"
          sx={{
            my: 1
          }}
          {...register("email")}
        />
        <InputFieldCommon
          required
          type="number"
          label="Birth_year"
          sx={{
            my: 1
          }}
          {...register("birth_year")}
        />
        <InputFieldCommon
          required
          type="number"
          label="Birth_month"
          sx={{
            my: 1
          }}
          {...register("birth_month")}
        />
        <InputFieldCommon
          required
          type="number"
          label="Birth_date"
          sx={{
            my: 1
          }}
          {...register("birth_date")}
        />
        <InputFieldCommon
          required
          type="number"
          label="Birth_hour"
          sx={{
            my: 1
          }}
          {...register("birth_hour")}
        />
        <InputFieldCommon
          required
          type="number"
          label="Birth_minute"
          sx={{
            my: 1
          }}
          {...register("birth_minute")}
        />
        <InputFieldCommon
          required
          type="text"
          label="Birth_meridian"
          sx={{
            my: 1
          }}
          {...register("birth_meridian")}
        />
        <InputFieldCommon
          required
          type="text"
          label="Birth_place"
          sx={{
            my: 1
          }}
          {...register("birth_place")}
        />
        <InputFieldCommon
          required
          type="text"
          label="Current_location"
          sx={{
            my: 1
          }}
          {...register("current_location")}
        />
        <InputFieldCommon
          required
          type="password"
          label="Password"
          sx={{
            my: 1
          }}
          {...register("password")}
        />
        <InputFieldCommon
          required
          type="number"
          label="Lat"
          sx={{
            my: 1
          }}
          {...register("lat")}
        />
        <InputFieldCommon
          required
          type="number"
          label="lon"
          sx={{
            my: 1
          }}
          {...register("lon")}
        />
        <CustomButtonPrimary
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            margin: "auto"
          }}
        >
          <Typography>Register</Typography>
        </CustomButtonPrimary>
      </form>
      </>
    </Wrapper>
  );
}
