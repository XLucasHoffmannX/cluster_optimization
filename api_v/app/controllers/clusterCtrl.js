import cluster from 'cluster';

export const Cluster = async (req, res)=>{
    try {   
       const worker = cluster.worker.id;
       res.json({
           worker_actual: process.pid,
           worker_id: worker 
        });
    } catch (err) { return res.status(500).json({ msg: err.message })  }
}