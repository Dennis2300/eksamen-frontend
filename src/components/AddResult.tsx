import { useForm } from "react-hook-form";

interface formData {
  resultType: "DISTANCE" | "TIME" | "POINTS";
  date: Date;
  result: number;
}

export default function AddResult() {
  const { register, handleSubmit } = useForm<formData>();

  const onSubmit = (data: formData) => {
    try {
      console.log(data, "data from form submitted");

      fetch("http://localhost:8080/api/results/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("Error adding result:", error);
    }
};
    return (
      <div className="text-center text-4xl">
        <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-7">
            <label>Result Type:</label>
            <br />
            <select
              {...register("resultType", {
                required: "Result type is required",
              })}
            >
              <option value="DISTANCE">Distance</option>
              <option value="TIME">Time</option>
              <option value="POINTS">Points</option>
            </select>
          </div>

          <div className="mt-7">
            <label>Date:</label>
            <br />
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
            />
          </div>

          <div className="mt-7">
            <label>Result:</label>
            <br />
            <input
              type="number"
              {...register("result", {
                required: "Result is required",
                valueAsNumber: true,
                min: { value: 0, message: "Result must be greater than 0" },
              })}
            />
          </div>

          <div className="mt-7">
            <button type="submit">Add Result</button>
          </div>
        </form>
      </div>
    );
}
