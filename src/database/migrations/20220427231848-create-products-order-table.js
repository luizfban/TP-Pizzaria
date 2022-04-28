module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('order_products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      order_id: {
        type: Sequelize.INTEGER,
        references: { model: 'orders', key: 'id' },
        allowNull: false,
      },

      product_id: {
        type: Sequelize.INTEGER,
        references: { model: 'products', key: 'id' },
        allowNull: false,
      },

      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('order_products');
  },
};
