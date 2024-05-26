const express = require("express");
const path = require("path");
const multer = require("multer");
const router = express.Router();
const ArrivalDestination = require('./classes/ArrivalDestination');
const EdgeDiary = require('./classes/EdgeDiary');
const RouteToFactory = require('./classes/RouteToFactory');
const RouteBackFactory = require('./classes/RouteBackFactory');
const ConnectionDatabase = require('./classes/ConnectionDatabase');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "index.html"));
});

router.post("/registrar", upload.none(), async (req, res) => {
  const db = new ConnectionDatabase();

  try {
    await db.connect();
    await db.beginTransaction();

    const formData = req.body;

    console.log('Dados recebidos:', formData);

    const edgeDiary = new EdgeDiary({
      travelDate: formData.dataViagem1,
      start: formData.inicio1,
      driver: formData.motorista1,
      warehouse: formData.deposito1,
      factory: formData.fabrica1,
      horse: formData.cavalo1,
      cart: formData.carreta1,
    });

    const routeToFactory = new RouteToFactory({
      stop1Type: formData.parada1_p2,
      stop1Start: formData.inicio1_p2,
      stop1End: formData.fim1_p2,
      stop2Type: formData.parada2_p2,
      stop2Start: formData.inicio2_p2,
      stop2End: formData.fim2_p2,
      stop3Type: formData.parada3_p2,
      stop3Start: formData.inicio3_p2,
      stop3End: formData.fim3_p2,
      stop4Type: formData.parada4_p2,
      stop4Start: formData.inicio4_p2,
      stop4End: formData.fim4_p2
    });

    const arrival = new ArrivalDestination({
      mealType: formData.refeicao3,
      mealStart: formData.inicio1_p3,
      mealEnd: formData.fim1_p3,
      waitingTimeType: formData.tempoEspera3,
      waitingTimeStart: formData.inicio2_p3,
      waitingTimeEnd: formData.fim2_p3,
      tripClosureRetorno: formData.retorno3,
      tripClosureHour: formData.hora3,
      tripId: formData.idViagem3,
    });

    const routeBackFactory = new RouteBackFactory({
      stop1Type: formData.parada1_p4,
      stop1Start: formData.inicio1_p4,
      stop1End: formData.fim1_p4,
      stop2Type: formData.parada2_p4,
      stop2Start: formData.inicio2_p4,
      stop2End: formData.fim2_p4,
      stop3Type: formData.parada3_p4,
      stop3Start: formData.inicio3_p4,
      stop3End: formData.fim3_p4,
      stop4Type: formData.parada4_p4,
      stop4Start: formData.inicio4_p4,
      stop4End: formData.fim4_p4
    });

    await arrival.insertDataArrivalDestination(db);
    await edgeDiary.insertDataEdgeDiary(db, formData.idViagem3);
    await routeToFactory.insertDataToFactory(db, formData.idViagem3);
    await routeBackFactory.insertDataBackFactory(db, formData.idViagem3);

    await db.commit();

    console.log("Dados inseridos com sucesso!");
    res.status(200).send("Submissão do formulário bem-sucedida");
} catch (error) {
    await db.rollback();
    console.error("Erro ao registrar os dados:", error);
    res.status(500).send("Ocorreu um erro ao processar a solicitação.");
} finally {
    await db.close();
}
});

module.exports = router;
