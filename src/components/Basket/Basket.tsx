import { useFormik } from "formik";
import * as Yup from "yup";

import Select from "./parts/Form/parts/Select/Select";
import InputField from "./parts/Form/parts/InputField/InputField";
import { Form, Input, Label, Button } from "./parts/Form/Form.styles";
import Map from "./parts/Map/Map";
import Header from "./parts/Header/Header";
import Products from '../../features/products/Products';

const Basket = () => {
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
      address: Yup.string().required("Поле обязательно к заполнению"),
      name: Yup.string().required("Поле обязательно к заполнению"),
      phone: Yup.string()
        .matches(
          /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
          "Номер телефона введён в некорректном формате"
        )
        .required("Поле обязательно к заполнению"),
      email: Yup.string()
        .email("Email введён в некорректном формате")
        .required("Поле обязательно к заполнению"),
      package: Yup.string().required("Выберите тип упаковки"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Header />
      <InputField data-role="address">
        <Input
          id="address"
          name="address"
          placeholder="Адрес"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.address}
          hasError={!!(formik.touched.address && formik.errors.address)}
        />
        <Label
          htmlFor="name"
          isActive={formik.touched.address}
          hasError={!!(formik.touched.address && formik.errors.address)}
        >
          {!!(formik.touched.address && formik.errors.address)
            ? formik.errors.address
            : "Адрес"}
        </Label>
      </InputField>

      <InputField data-role="name">
        <Input
          id="name"
          name="name"
          placeholder="Ваше Имя"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          hasError={!!(formik.touched.name && !!formik.errors.name)}
        />
        <Label
          htmlFor="name"
          isActive={formik.touched.name}
          hasError={!!(formik.touched.name && formik.errors.name)}
        >
          {!!(formik.touched.name && formik.errors.name)
            ? formik.errors.name
            : "Ваше Имя"}
        </Label>
      </InputField>

      <InputField data-role="phone">
        <Input
          id="phone"
          name="phone"
          placeholder="Ваш Телефон"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phone}
          hasError={!!(formik.touched.phone && formik.errors.email)}
        />
        <Label
          htmlFor="name"
          isActive={formik.touched.phone}
          hasError={!!(formik.touched.phone && formik.errors.email)}
        >
          {!!(formik.touched.phone && formik.errors.phone)
            ? formik.errors.phone
            : "Ваш Телефон"}
        </Label>
      </InputField>

      <InputField data-role="email">
        <Input
          id="email"
          name="email"
          type="text"
          placeholder="Ваш Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          hasError={!!(formik.touched.email && formik.errors.email)}
        />
        <Label
          htmlFor="email"
          isActive={formik.touched.email}
          hasError={!!(formik.touched.email && formik.errors.email)}
        >
          {!!(formik.touched.email && formik.errors.email)
            ? formik.errors.email
            : "Ваш Email"}
        </Label>
      </InputField>

      <InputField data-role="package">
        <Select
          onChange={(value) => formik.setFieldValue("package", value)}
          value={formik.values.package}
          hasError={!!(formik.touched.package && formik.errors.package)}
        />
        <Label
          as="span"
          isActive={formik.touched.package}
          hasError={!!(formik.touched.package && formik.errors.package)}
        >
          {!!(formik.touched.package && formik.errors.package)
            ? formik.errors.package
            : "Тип упаковки"}
        </Label>
      </InputField>

      <InputField data-role="comment">
        <Input
          id="comment"
          name="comment"
          placeholder="Введите комментарий"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.comment}
        />
        <Label htmlFor="comment" isActive={formik.touched.comment}>
          Введите комментарий
        </Label>
      </InputField>

      <Products />

      <Button type="submit">Купить</Button>

      <Map />
    </Form>
  );
};

export default Basket;
