import dotenv from 'dotenv';
// dependencies externs
import cluster from 'cluster';
import express, { json, urlencoded } from 'express';
import cors from 'cors';
import os from 'os';

// dependencies externs
import apiRouter from './routes/apiRoutes';

const app = express();

dotenv.config();

// middlewares
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors());

// numeros de cores
const numCpus = os.cpus().length;

if (cluster.isMaster) { // informa se é um worker ou o principal
    console.log(`Processo master ${process.pid} está rodando!`);
    for (let i = 0; i < numCpus; i++) {
        cluster.fork();

        // checar processos mortos (deads workers)
        cluster.on('exit', (worker) => { console.log(`Processo ${worker.process.pid} está inoperante`); })// criar um novo worker
    }
} else {
    // Estes workers podem compartilhar qualquer conexão TCP
    console.log(`Processo (worker) ${process.pid} iniciado!`);

    // routes
    app.use(`/api/${apiRouter.ClusterRoute.route}`, apiRouter.ClusterRoute.dir);

    const PORT = process.env.PORT;
    app.listen(PORT, console.log(`Server is runing on port ${PORT}`))
}