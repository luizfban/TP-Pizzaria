module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('products', 'price');
    await queryInterface.createTable('product_prices', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      product_id: {
        type: Sequelize.INTEGER,
        references: { model: 'products', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
      },

      size: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('products', 'price', {
      type: Sequelize.FLOAT,
    });
    await queryInterface.dropTable('product_prices');
  },
};
