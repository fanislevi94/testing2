import Link from "next/link";
import Image from "next/image";
function IndexItem(props) {
  const { items } = props;

  return (
    <ul>
      <div className="flex flex-wrap gap-10 pl-40 pt-10">
        {items.map((data) => (
          <div className="text-center" key={data.id}>
            <Image
              src={data.imageUrl}
              width={400}
              height={600}
              alt="Picture of the author"
            />
            <li key={data.id}>
              <Link href={"get/" + data.title}>
                <div className="pt-10 text-4xl text-white">{data.title}</div>
              </Link>
            </li>

            <div className="text-white word">{data.description}</div>
          </div>
        ))}
      </div>
    </ul>
  );
}
export default IndexItem;
