import { useSession } from "next-auth/react";
import Image from "next/image";
import { FC, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Mumble, postMumble, UploadImage } from "../services/qwacker";

type NewMumbleProps = {
  addMumble: (mumble: Mumble) => void;
};

export const NewMumble: FC<NewMumbleProps> = ({ addMumble }) => {
  const { data: session } = useSession();

  const [text, setText] = useState("");
  const [file, setFile] = useState<UploadImage | null>(null);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [],
      "image/jpeg": [],
    },
    onDrop: (acceptedFiles) => {
      const newFile = acceptedFiles[0];
      if (!newFile) {
        return;
      }

      setFile(
        Object.assign(newFile, {
          preview: URL.createObjectURL(newFile),
        })
      );
    },
  });
  const [error, setError] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      addMumble(await postMumble(text, file, session?.accessToken));
      setText("");
      if (file) {
        URL.revokeObjectURL(file.preview);
        setFile(null);
      }
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Something went wrong!"
      );
    }
  };

  return (
    <>
      {error ? (
        <div className="bg-red-100 text-xs rounded-lg px-2 py-1 mb-2">
          {error}
        </div>
      ) : null}
      <form onSubmit={(event) => onSubmit(event)}>
        <textarea
          className="bg-gray-100 border border-indigo-400 px-2 py-1 w-full rounded-lg"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="col-span-2 h-40 border-4 border-dashed rounded">
          {file ? (
            <div className="w-full h-full relative overflow-hidden">
              <Image
                src={file.preview}
                alt={file.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ) : (
            <div
              className="w-full h-full p-2 cursor-pointer flex justify-center align-middle items-center"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <p className="text-center">
                Drag &amp; drop an image here, or click to select files
              </p>
            </div>
          )}
        </div>
        <button className="bg-indigo-400 px-2 py-1 rounded-lg mt-4">
          Submit
        </button>
      </form>
    </>
  );
};
