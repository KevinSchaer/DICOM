import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";

function Dropzone({ onUpload }) {
  const [errorMessage, setErrorMessage] = useState("");

  const onDropCallback = useCallback(
    async (acceptedFiles) => {
      if (acceptedFiles.length !== 1) {
        setErrorMessage("Please drop a single file.");
        return;
      }
      setErrorMessage("");

      try {
        const formData = new FormData();
        formData.append("file", acceptedFiles[0]);
        console.log(acceptedFiles[0]);
        const response = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        onUpload(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    [onUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onDropCallback,
    maxFiles: 1, // Restrict to one file
  });

  return (
    <Card sx={{ maxWidth: 400 }} variant="outlined">
      <CardContent>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <Typography variant="h6" component="p" gutterBottom>
            Drag and drop a file here, or click to select a file
          </Typography>
          {errorMessage && (
            <Typography variant="body2" component="p" color="error">
              {errorMessage}
            </Typography>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default Dropzone;
