import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "../Select/Select";
import { Form, Input, Label, Button } from "./Form.styles";

const options = [
  { value: "1", label: "Package 1" },
  { value: "2", label: "Package 2" },
  { value: "3", label: "Package 3" },
  { value: "4", label: "Package 4" },
];
const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      address: "",
      name: "",
      phone: "",
      email: "",
      package: "",
      comment: "",
    },
    validationSchema: Yup.object({
      address: Yup.string().required("Required"),
      name: Yup.string().required("Required"),
      phone: Yup.string()
        .matches(
          /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
          "Phone number is not valid"
        )
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      package: Yup.string().required("Required"),
      comment: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Label htmlFor="name">Адрес</Label>
        <Input
          id="address"
          name="address"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.address}
        />
        {formik.errors.address ? (
          <div className="error">{formik.errors.address}</div>
        ) : null}

        <Label htmlFor="name">Ваше Имя</Label>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}

        <Label htmlFor="name">Ваш Телефон</Label>
        <Input
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        {formik.errors.phone ? (
          <div className="error">{formik.errors.phone}</div>
        ) : null}

        <Label htmlFor="email">Ваш Email</Label>
        <Input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}

        <Label htmlFor="package">Тип упаковки</Label>

        <Select
          onChange={(value) => formik.setFieldValue("package", value.value)}
          value={formik.values.package}
          options={options}
        />
        {formik.errors.package ? (
          <div className="error">{formik.errors.package}</div>
        ) : null}

        <Label htmlFor="comment">Введите комментарий</Label>
        <Input
          id="comment"
          name="comment"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.comment}
        />
        {formik.errors.comment ? (
          <div className="error">{formik.errors.comment}</div>
        ) : null}

        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
};

export default FormikForm;
