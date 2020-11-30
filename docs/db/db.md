Table user {
  id int [not null, primary key]
  name varchar(63) [not null]
  password char(40) [note: 'SHA1(password+salt)']
  score int
  status char(1) [note: 'p-player, d-developer']
  progress int
  }
  
Table replicas {
  id int [not null, primary key]
  replicas varchar(512)
  setting int [ref: > setting.id]
}

Table responses {
  id int [not null, primary key]
  response varchar(512)
  cost int
  replicasID int [ref: > replicas.id]
  nextReplica int [ref: > replicas.id]
  activity char(1) [note: 'a-active, p-passive']
}

Table setting {
  id int [not null, primary key]
  location varchar(63)
  character varchar(63)
  npc varchar(63)
}