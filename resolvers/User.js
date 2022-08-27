const { perfis } = require('../data/db');

module.exports = {
  salary(user) {
    return user.salary_real;
  },
  perfil(user) {
    const seletedPerfil = perfis.filter((p) => p.id === user.perfil_id);
    return seletedPerfil ? seletedPerfil[0] : null;
  },
};
