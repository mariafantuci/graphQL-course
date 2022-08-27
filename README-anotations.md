# types

! it means the return can't be null

# types written

All the types must be written in Capitalize

Array(6).fill(0).map((e, i) => i + 3)
Array(6).fill(0).map(() => parseInt(Math.random() \* 60 + 1));

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

Comandos
rs refaz o reload no servidor (npm start) quando não estiver monitorando


# playground localhost:4000
query {
  ola
  currentTime
  horaAtual
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
  perfis{
    id
    name
  }
  perfil(id: 2){
    name
   id
}
  users {
   name
   id
   email
   perfil {
     name
      id
    }
  }
  
  usuarioPorId(id: 3){
    ...usuarioCompleto
  }
  users{
   ...usuarioCompleto
  }
}

fragment usuarioCompleto on User {
  id
  name
  age
  salary
  vip
  perfil {
    name
    id
  }
}
