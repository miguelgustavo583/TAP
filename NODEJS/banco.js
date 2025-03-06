const { Sequelize } = require("sequelize");
 

const sequelize = new Sequelize('exemplo', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
}) 

sequelize.authenticate().then(function(){
    console.log('Conectado com Sucesso');

}).catch(function(erro){
    console.log('Falha ao se conectar: ' +erro);
})

const Agendamentos = sequelize.define('agendamentos', {
    nome: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    telefone: {
      type: Sequelize.STRING
    },
    cpf: {
      type: Sequelize.STRING
    },
    data: {
      type: Sequelize.STRING
    },
    hora: {
      type: Sequelize.STRING
    }
  });
  
// Agendamentos.sync({ force: true })

Agendamentos.create({
    nome: 'Miguel Gustavo',
    email: 'miguel.campos@fatec.sp.gov.br',
    telefone: '11958244235',
    cpf: '12345678909',
    data: '2020-12-25',
    hora: '20:00'
  });
  