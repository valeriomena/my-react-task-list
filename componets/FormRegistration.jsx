import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { DataTask } from '../componets/ContexTask';
import { nanoid } from 'nanoid';

const FormRegistration = () => {
  const { register, handleSubmit ,formState: { errors }, watch } = useForm({
    mode: "onChange"
  });
  const password = watch("password");
  const { dataUsers, setDataUsers } = useContext(DataTask);
  const onSubmit = (data) => {
    const newData = {
      id: nanoid(),
      ...data
    };

    console.log(newData);
    setDataUsers([...dataUsers, newData]);
    console.log(dataUsers);
  };

  return (
    <div className="FormTask">
    <form className='registro' onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className='box'
          id="name"
          name="name"
          placeholder='Nombre usuario'
          {...register("name", { required: "name is required" })}
              aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && (
            <span className="error" role="alert">
              {errors.name.message}
            </span>
          )}
        <input
          type="email"
          className='box'
          id="email"
          name="email"
          placeholder='Correo electronico'
          {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "email is invalid",
                },
              })}
              aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
            <span className="error" role="alert">
              {errors.email.message}
            </span>
          )}
          <input
          type="text"
          className='box'
          id="position"
          name="position"
          placeholder='Cargo'
        />
        {errors.position && <span className="error">{errors.position}</span>}
          <input
          type="tel"
          className='box'
          id="phone"
          name="phone"
          placeholder='telefono'
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
        <input
              type="password"
              className='box'
              placeholder="Password"
              {...register("password", {
                required: "password is required",
                minLength: { value: 6, message: "password is too short" },
              })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && (
            <span className="error" role="alert">
              {errors.password.message}
            </span>
          )}
        <input
              type="password"
              className='box'
              placeholder="Password check"
              {...register("passwordCheck", {
                validate: (value) =>
                  value === password || "passwords do not match",
              })}
              aria-invalid={errors.passwordCheck ? "true" : "false"}
            />
          {errors.passwordCheck && (
            <span className="error" role="alert">
              {errors.passwordCheck.message}
            </span>
          )}
            
      <button className='buttonform' type="submit" disabled={Object.keys(errors).length > 0}>
          <span>
            <FontAwesomeIcon icon={faListCheck} />
          </span>
      </button>
      </form>
      </div>
  );
};

export default FormRegistration;
