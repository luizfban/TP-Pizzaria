module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },

      status: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ['PENDING', 'PROCESSING', 'COMPLETED', 'PAID'],
        defaultValue: 'PENDING',
      },

      customer_id: {
        type: Sequelize.INTEGER,
        references: { model: 'customers', key: 'id' },
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('orders');
  },
};
