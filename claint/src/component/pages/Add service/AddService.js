import React from "react";
import useTitleHooks from "../../../Hooks/useTitleHooks";

const AddService = () => {
  useTitleHooks('Add Services')
  const getServiceInfo = (event) => {
    event.preventDefault();
    const form = event.target;
    const service_name = form.service.value;
    const image = form.image.value;
    const description = form.description.value;
    const rating = parseInt(form.rating.value);
    const price = parseInt(form.price.value);
    const services = {
      service_name,
      image,
      description,
      rating,
      price,
    };

    fetch("https://assignment-server-mauve.vercel.app", {
    // fetch("https://assignment-server-mauve.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));

    form.reset();
  };

  return (
    <div className="w-10/12 m-auto">
      <h2 className="text-5xl text-center text-blue-900 my-5">
        {" "}
        Add services{" "}
      </h2>

      <form onSubmit={getServiceInfo} className="card grid grid-cols-2">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">service name</span>
            </label>
            <input
              type="text"
              placeholder="text"
              className="input input-bordered"
              name="service"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">image</span>
            </label>
            <input
              type="text"
              placeholder="set image URL"
              className="input input-bordered"
              required
              name="image"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">description</span>
            </label>
            <textarea
              name="description"
              id=""
              cols="10"
              style={{
                border: "2px solid #ccc",
                padding: "10px",
                outline: "none",
                borderRadius: "10px",
              }}
              placeholder="description"
              rows="5"
            ></textarea>
          </div>
        </div>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">rating</span>
            </label>
            <input
              type="number"
              placeholder="rating"
              className="input input-bordered"
              required
              name="rating"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">price</span>
            </label>
            <input
              type="number"
              placeholder="price"
              className="input input-bordered"
              required
              name="price"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Service</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddService;
