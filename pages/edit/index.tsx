import Image from "next/image";
import api from "../services/api";
import Link from "next/link";
import EditItem from "../../component/layout/edit";

export default function Home(props: any) {
  const { allDatas } = props;

  return (
    <div>
<<<<<<< HEAD
      <div className="w-1/2 mx-auto text-center pl-40 pt-10 ">
=======
      <div className="w-1/6 mx-auto text-center pt-10 ">
>>>>>>> 72502b3 (set commit)
        <Image
          src="/fanis.jpg"
          width={900}
          height={900}
          alt="Picture of the author"
          className="image"
        />
      </div>
      <div className="text-5xl text-center ">Hi, I'm Fanis</div>
      <div className="text-1xl text-center pb-5">
        Hi, I'm a passionate web developer and here is my blog
      </div>
      <div className="bg-stone-500">
        <div className="text-5xl text-center pt-10 text-white">My projects</div>
        <EditItem items={allDatas} />

        {/*<ul>
          <div className="flex flex-wrap gap-10 pl-40 pt-10">
            {allDatas.map((data: any) => (
              <div className="text-center" key={data.id}>
                <Image
                  src={data.imageUrl}
                  width={400}
                  height={600}
                  alt="Picture of the author"
                />
                <li key={data.id}>
                  <Link href={"get/" + data.title}>
                    <div className="pt-10 text-4xl text-white">
                      {data.title}
                    </div>
                  </Link>
                </li>

                <div className="text-white word">{data.description}</div>
              </div>
            ))}
          </div>
            </ul>*/}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await api.get(process.env.customKey);
  return {
    props: { allDatas: data.projects },
  };
}
