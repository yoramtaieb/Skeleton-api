module.exports = (repositories) => {
  const user_service = {
    getAll: async (data) => {
      return repositories.user.getAll();
    },
    register: async (data) => {
      return repositories.user.register(data);
    },
    getById: async (id) => {
      const rows = await user.getById(id);
      return rows[0];
    },
  };

  return user_service;
};
