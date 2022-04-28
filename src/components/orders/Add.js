import { Button, Card, Form, Input, Select } from "antd";
import styled from "styled-components";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const AddProducts = ({ form, onSubmit, products = [], isLoading }) => (
  <CardWrapper>
    <Form layout="vertical" form={form} onFinish={onSubmit} size="large">
      <Form.Item label="E-mail do cliente" name="customerEmail">
        <Input
          onChange={(e) =>
            form.setFieldsValue({ customerEmail: e.target.value })
          }
        />
      </Form.Item>

      <Form.List
        name="products"
        rules={[
          {
            validator: async (_, products) => {
              if (!products || products.length < 1) {
                return Promise.reject(
                  new Error("Adicione pelo menos um produto")
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
                <Form.Item name={[index, "id"]} noStyle>
                  <Select
                    placeholder="Produtos"
                    loading={isLoading}
                    style={{ width: "47%", marginRight: "16px" }}
                  >
                    {products.map((product, index) => (
                      <Select.Option key={index} value={product.id}>
                        {product.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item name={[index, "quantity"]} noStyle>
                  <Input placeholder="Quantidade" style={{ width: "47%" }} />
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
                Adicionar produto
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

  .dynamic-delete-button {
    position: relative;
    top: 4px;
    margin: 0 8px;
    color: #999;
    font-size: 24px;
    cursor: pointer;
    transition: all 0.3s;
  }
`;

export default AddProducts;
