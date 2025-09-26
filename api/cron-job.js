// api/cron-job.js

import fetch from 'node-fetch';

export default async function (req, res) {
  console.log("Cron job acionado!");

  try {
    const response = await fetch("https://telegrambotptwikinews.jp90264.workers.dev/");
    const data = await response.json();
    console.log("Resposta do site externo:", data);
    res.status(200).json({ message: "Tarefa de cron executado com sucesso!" });
  } catch (error) {
    console.error("Erro na tarefa de cron:", error);
    res.status(500).json({ message: "Erro ao executar a tarefa de cron." });
  }
}
