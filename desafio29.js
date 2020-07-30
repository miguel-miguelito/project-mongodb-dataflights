use dataFlights;

db.resumoVoos.insertOne({
  empresa: "GOL",
  totalVoosDomesticos: db.voos.find({
      "empresa.nome": "GOL",
      natureza: "Doméstica"
    }).count()
});
