import api from "../services/api";
function Contact() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("val 1 " + e.target.name.value);
    console.log("val 2 " + e.target.email.value);
    api.post(
      { name: e.target.name.value, email: e.target.email.value },
      "api/contact"
    );
  };

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit}>
        <div className="pt-6 ">
          <label>
            Enter your name:
            <input type="text" id="name" className="shadow-md bg-slate-100" />
          </label>
        </div>
        <div className="pt-6 ">
          <label>
            Enter your email:
            <input type="email" id="email" className="shadow-md bg-slate-100" />
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
export default Contact;
