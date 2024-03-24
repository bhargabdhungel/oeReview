import axios from "axios";
import toast from "react-hot-toast";
export default function SemesterReset() {
  return (
    <>
      <div className="flex flex-col items-center w-full justify-center gap-12 h-[80vh]">
        <h1 className="text-white text-4xl text-center mb-4 w-4/">
          This Action is Irreversible
        </h1>
        <button
          className="bg-red-600 text-4xl  text-white p-4 rounded-md m-2 text-center"
          onClick={async () => {
            try {
              const link =
                import.meta.env.VITE_REVIEWLINK +
                "/admin/deleteAllUsersSubjects";
              const token = localStorage.getItem("token");

              await axios.delete(link, {
                headers: {
                  Authorization: token,
                },
              });

              toast.success("Semester Reset of All Students Successful");
            } catch (e) {
              console.log(e);
              toast.error("Semester Reset of All Students Failed");
            }
          }}
        >
          Semester Reset of All Students
        </button>
      </div>
    </>
  );
}
