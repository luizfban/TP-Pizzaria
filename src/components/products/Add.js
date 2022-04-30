import { Button, Card, Form, Input, Select } from "antd";
import styled from "styled-components";

const options = [
  { value: "Queijo" },
  { value: "Molho de tomate" },
  { value: "Pepperoni" },
  { value: "Calabresa" },
  { value: "Azeitona" },
  { value: "Cebola" },
  { value: "Frango" },
  { value: "Catupiry" },
  { value: "Carne seca" },
  { value: "Chocolate" },
  { value: "Morango" },
];

const AddProducts = ({ form, onSubmit }) => (
  <CardWrapper>
    <Form layout="vertical" form={form} onFinish={onSubmit} size="large">
      <Form.Item
        label="Nome"
        name="name"
        rules={[{ required: true, message: "Digite o nome da pizza!" }]}
      >
        <Input
          onChange={(e) => form.setFieldsValue({ name: e.target.value })}
        />
      </Form.Item>

      <Form.Item label="Ingredientes" name="ingredients">
        <Select
          mode="multiple"
          placeholder="Selecione os ingredientes"
          allowClear
          showArrow
          style={{ width: "100%" }}
          options={options}
        />
      </Form.Item>

      <Form.Item
        label="Preço"
        name="price"
        rules={[{ required: true, message: "Digite o preço!" }]}
      >
        <Input
          type="number"
          onChange={(e) => form.setFieldsValue({ price: e.target.value })}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "100%", marginTop: "16px" }}
        >
          Cadastrar
        </Button>
      </Form.Item>
    </Form>
  </CardWrapper>
);

const CardWrapper = styled(Card)`
  .ant-form-large .ant-form-item-label > label {
    height: auto;
  }
`;

export default AddProducts;
