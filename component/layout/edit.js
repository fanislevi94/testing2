import Link from "next/link";
import Image from "next/image";
import $ from "jquery";
import { useState } from "react";
function EditItem(props) {
  const { items } = props;

  const [isOpen, setIsOpen] = useState(false);
  var all = 0;
  const handleClick = (value) => {
    console.log("click value" + value);
    // setIsOpen((isOpen) => !isOpen);
    if (!isOpen) {
      all = 1;
      setIsOpen((isOpen) => !isOpen);
      var editableText = $("<textarea />").val("DESCRIPTION...");
      $("#" + value).replaceWith(editableText);
    } else {
      alert("saved");
      window.location.href = process.env.uriEdit;
    }
  };

  const handleClickSec = (value) => {
    var editableText = $("<textarea />").val("DESCRIPTION...");
    $("#" + value).replaceWith(editableText);
  };
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
            {console.log("data.id======>" + data.id)}
            <div className="text-white word " id={data.id}>
              {data.description}
              <div className="editClass"></div>
            </div>
            <div id={data.id}>
              <button
                onClick={(e) => handleClick(data.id)}
                className="bg-zinc-950"
              >
                EDIT/SAVE
              </button>
            </div>
          </div>
        ))}
      </div>
    </ul>
  );
}
export default EditItem;
