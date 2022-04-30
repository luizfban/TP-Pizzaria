import { Button, Card, Form, Input, Select } from "antd";
import styled from "styled-components";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const options = [
  { value: "Queijo" },
  { value: "Molho de tomate" },
  { value: "Pepperoni" },
  { value: "Azeitona" },
  { value: "Catupiry" },
  { value: "Carne seca" },
  { value: "Chocolate" },
  { value: "Morango" },
  { value: "Alho frito" },
  { value: "Aliche" },
  { value: "Alho e salsinha" },
  { value: "Presunto" },
  { value: "Ervilhas" },
  { value: "Mussarela" },
  { value: "Bacon" },
  { value: "Pimentão" },
  { value: "Atum" },
  { value: "Cebola" },
  { value: "Calabresa" },
  { value: "Catupiry salpicado" },
  { value: "Parmesão" },
  { value: "Catupiry" },
  { value: "Champignon" },
  { value: "Salsinha" },
  { value: "Escarola temperada com alho aliche" },
  { value: "Peito de frango desfiado" },
  { value: "Lombo" },
  { value: "Manjericão" },
  { value: "Milho verde" },
  { value: "Molho de tomate" },
  { value: "Rodelas de tomate" },
  { value: "Ovos" },
  { value: "Provolone" },
];

const size = ["Pequena", "Média", "Grande", "Família"];

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

      <Form.List
        name="prices"
        rules={[
          {
            validator: async (_, products) => {
              if (!products || products.length < 1) {
                return Promise.reject(
                  new Error("Adicione pelo menos um tamanho")
                );
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <div key={field.key} style={{ marginBottom: "16px" }}>
                <Form.Item name={[index, "size"]} noStyle>
                  <Select
                    placeholder="Tamanho"
                    style={{ width: "45%", marginRight: "16px" }}
                  >
                    {size.map((s, index) => (
                      <Select.Option key={index} value={index}>
                        {s}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item name={[index, "price"]} noStyle>
                  <Input placeholder="Preço" style={{ width: "45%" }} />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </div>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
              >
                Adicionar Tamanho
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>

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
