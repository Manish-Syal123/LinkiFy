import React, { useState } from "react";
import { useStoreContext } from "../../contextApi/ContextApi";
import { useForm } from "react-hook-form";
import TextField from "../TextField";
import { TbLoader2 } from "react-icons/tb";
import api from "../../api/api";
import toast from "react-hot-toast";

const CreateNewShorten = ({ setIsOpen, refetch }) => {
  const { token } = useStoreContext();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { originalUrl: "" }, mode: "onTouched" });

  const createShortUrlHandler = async (data) => {
    setLoading(true);
    try {
      const { data: res } = await api.post("/api/urls/shorten", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const shortenUrl = `${
        import.meta.env.VITE_REACT_SUBDOMAIN + "/s/" + `${res.shortUrl}`
      }`;
      navigator.clipboard.writeText(shortenUrl).then(() => {
        toast.success("Short Url Copied to Clipboard!", {
          position: "bottom-right",
          className: "mb-5",
          duration: 3000,
        });
      });

      // await refetch();
      refetch();
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Shorten Creation Failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h3 className="text-3xl font-bold text-center mb-2">
        Create New Short-Url!
      </h3>
      <form onSubmit={handleSubmit(createShortUrlHandler)}>
        <div className="mb-4">
          <TextField
            label="Enter URL"
            required
            id="originalUrl"
            placeholder="https://example.com"
            type="url"
            message="Url is required"
            register={register}
            className={"border-white placeholder:text-slate-300 text-white"}
            errors={errors}
          />
        </div>
        {/* BUTTONS */}
        <div className="flex gap-2">
          <button
            onClick={() => setIsOpen(false)}
            disabled={loading}
            className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
          >
            Nah, go back
          </button>
          <button
            disabled={loading}
            className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded flex items-center justify-center gap-3 cursor-pointer"
          >
            {loading ? (
              <>
                {" "}
                Loading... <TbLoader2 className="text-2xl animate-spin" />
              </>
            ) : (
              "Go for it!"
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateNewShorten;
