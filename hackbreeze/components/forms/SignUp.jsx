import React from "react";
import Link from "next/link";
import { Input } from "../UI/Input";
import Image from "next/image";
import { useFormik } from "formik";

function SignUpForm() {

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log("Form submitted", values);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required First Name";
    }
    if (!values.lastName) {
      errors.lastName = "Required Last Name";
    }
    if (!values.email) {
      errors.email = "Required Email";
    } else if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(values.email)) {
      errors.email = "Please Enter valid email";
    }
    if (!values.password) {
      errors.password = "Required Password";
    } else if (values.password.length < 8) {
      errors.password = "Password should be atleast 8 characters";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <>
      <div className="w-full min-h-screen flex md:flex-row flex-col-reverse justify-around items-center">
        <div className="w-full md:w-2/5 h-screen p-8">
          <form
            onSubmit={formik.handleSubmit}
            className="h-full flex flex-col justify-between"
          >
            <div>
              <h1 className="text-[32px] md:text-[40px] font-semibold">
                Create new account
              </h1>
              <h4>
                Already a member? <Link href="#">Login</Link>
              </h4>
            </div>
            <div>
              <p className="font-semibold">Name</p>
              <div className="flex justify-between flex-wrap">
              <div>
                <Input
                  width="18"
                  name="firstName"
                  placeholder="First name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <span className="text-red-500">
                    {formik.errors.firstName}
                  </span>
                )}
                </div>
                <div>
                <Input
                  width="18"
                  name="lastName"
                  placeholder="Last name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <span className="text-red-500">{formik.errors.lastName}</span>
                )}
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold">Email id</p>
              <Input
                width="full"
                name="email"
                placeholder="Enter your email ID"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <span className="text-red-500">{formik.errors.email}</span>
              )}
            </div>
            <div>
              <p className="font-semibold">Password</p>
              <Input
                type="password"
                name="password"
                width="full"
                placeholder="Enter a strong password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <span className="text-red-500">{formik.errors.password}</span>
              )}
            </div>
            <div>
              <p className="font-semibold">Upload image</p>
              <button
                type="button"
                className="w-24 bg-red-100 rounded-md p-4 text-center outline-none border-none"
              >
                ☁️
              </button>
            </div>
            <button
              type="submit"
              className="w-24 bg-fuchsia-800 rounded-full mt-4 mx-auto p-2 text-center text-white"
            >
              Create
            </button>
          </form>
        </div>
        <div className="w-4/5 md:w-1/3 h-96 relative">
          <Image fill={true} src="/static/Form.png" alt="SignUp Image" />
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
