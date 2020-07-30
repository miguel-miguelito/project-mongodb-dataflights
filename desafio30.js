use dataFlights;

db.resumoVoos.insertOne({
  empresa: "AZUL",
  totalVoosDomesticos: db.voos.find({
      "empresa.nome": "AZUL",
      natureza: "Doméstica"
    }).count()
});
