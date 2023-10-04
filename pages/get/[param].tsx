import { useRouter } from 'next/router'
export default function Params() {
    const router = useRouter()
    console.log(router.query);
    var param=router.query
    if(param!==undefined){
        return <div className="text-center">{param.param}</div>
    }
    
    

}