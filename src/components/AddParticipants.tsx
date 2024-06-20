import { useForm } from "react-hook-form";

interface formData {
  firstName: string;
  lastName: string;
  age: number;
  gender: "MALE" | "FEMALE" | "OTHER";
  club: string;
}

export default function AddParticipants() {
  const { register, handleSubmit } = useForm<formData>();

  const onSubmit = (data: formData) => {
    try {
        console.log(data, 'data from form submitted');
        
        fetch("http://localhost:8080/api/participants/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            });
    } catch (error) {
        console.error("Error adding participant:", error);
    }
  };

  return (
    <div className="text-center text-4xl">
      <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-7">
          <label>Fornavn:</label>
          <br />
          <input
            {...register("firstName", { required: "First name is required" })}
          />{" "}
        </div>

        <div className="mt-7">
          <label>Last Name:</label>
          <br />
          <input
            {...register("lastName", { required: "Last name is required" })}
          />
        </div>

        <div className="mt-7">
          <label>Age:</label>
          <br />
          <input
            type="number"
            {...register("age", {
              required: "Age is required",
              valueAsNumber: true,
              min: { value: 1, message: "Age must be greater than 0" },
            })}
          />
        </div>

        <div className="mt-7">
          <label>Club:</label>
          <br />
          <input {...register("club", { required: "Club is required" })} />
        </div>

        <div className="mt-7">
          <label>Køn </label>
          <select {...register("gender", { required: "Gender is required" })}>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </select>
        </div>

        <button className="btn btn-primary mt-5" type="submit">Submit</button>
      </form>
    </div>
  );
}
