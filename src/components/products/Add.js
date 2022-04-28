import { Form, Input, Select } from "antd";

const AddProducts = ({
  form,
  onSubmit,
  value = ["Queijo", "Molho de tomate"],
}) => (
  <Form layout="vertical" form={form} onFinish={onSubmit} size="large">
    <Form.Item label="Nome" name="name">
      <Input onChange={(e) => form.setFieldsValue({ name: e.target.value })} />
    </Form.Item>
    <Form.Item label="Ingredientes" name="ingredients">
      <Select
        mode="multiple"
        placeholder="Selecione os ingredientes"
        allowClear
        filterOption={false}
        value={value}
        onChange={(e) => form.setFieldsValue({ ingredients: e.target.value })}
      >
        <Select.Option key="1" value="azeitona">
          Azeitona
        </Select.Option>
        <Select.Option key="2" value="queijo">
          Queijo
        </Select.Option>
        <Select.Option key="3" value="molho de tomate">
          Molho de tomate
        </Select.Option>
      </Select>
    </Form.Item>
  </Form>
);

export default AddProducts;
