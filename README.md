# types
! it means the return can't be null

# types written
All the types must be written in Capitalize 

Array(6).fill(0).map((e, i) => i + 3)
Array(6).fill(0).map(() => parseInt(Math.random() * 60 + 1));

O scalar ID é uma string

exemples.js (server)
query {
  #ola
  #currentTime
  #horaAtual
  logUser {
    id
  }
  featuredProduct{
    discountPrice
  }
  numerosMegaSena
  users{
    name
  }
  usuarioPorId(id: 3){
    name
    id
    email
  }
  perfil{
    id
    
  }
}

# fragment
é como se fossem mini funções para serem reaproveitadas, se comparadas ao banco de dados, seria como se fosse as procedures