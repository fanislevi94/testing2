import api from "../services/api";
import Link from "next/link";
export default function Get(props:any) {
    const { allDatas } = props;
    return (
        <ul> 
            <div className="text-center">Τα δεδομένα είναι</div>
            {allDatas.map((data:any) => (
                <div className="text-center" key={data.id}><li key={data.id}><Link href={"get/"+data.name}>{data.name}</Link></li></div>
            ))}
        </ul>
    );
}
export async function getStaticProps() {
    const data=await api.get('http://localhost:3000/api/get');
    console.log("get static")
    return {
        props: { allDatas: data.users },
    };
}