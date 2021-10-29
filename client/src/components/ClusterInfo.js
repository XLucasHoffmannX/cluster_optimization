import { useState, useEffect } from 'react';
import axios from 'axios';

const ClusterInfo = () => {
    const [cluster, setCluster] = useState();
    useEffect(() => {
        const getWorker = async () => {
            try {
                const res = await axios.get('/cluster');
                setTimeout(()=>{
                    setCluster(res.data)
                }, 800)
            } catch (err) { alert(err) }
        }
        getWorker();
    }, [])
    return (
        <>
            {
                cluster ?
                    <span>
                        Você se encontra no processo:{cluster.worker_actual} 
                        <br />
                        <br />
                        ID desse processo: {cluster.worker_id}
                    </span>
                        :
                    <span>Aguarde enquanto as resquests ocorrem...</span>
            }
        </>
    )
}

export default ClusterInfo;