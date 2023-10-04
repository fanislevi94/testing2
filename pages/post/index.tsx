import api from "../services/api";
export default function Post() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("val 1 " + e.target.title.value);
    console.log("val 3 " + e.target.description.value);
    api.post(
      {
        imageUrl: "/srcode.jpg",
        title: e.target.title.value,
        description: e.target.description.value,
      },
      "api/post"
    );
  };
  return (
    <div className="text-center">
      <form onSubmit={handleSubmit}>
        <div className="pt-6 ">
          <label>
            Title:
            <input type="text" id="title" className="shadow-md bg-slate-100" />
          </label>
        </div>

        <div className="pt-6 ">
          <label>
            Enter your Description:
            <textarea id="description" className="shadow-md bg-slate-100" />
          </label>
        </div>

        <button type="submit" id="submitForm" className="mt-6 bg-slate-100">
          {" "}
          Υποβολή
        </button>
      </form>
    </div>
  );
}
