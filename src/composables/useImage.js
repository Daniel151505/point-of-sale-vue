import { uid } from "uid";
import { useFirebaseStorage } from "vuefire";
import {
  ref as StorageRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/database";

export default function useImage() {
  const storage = useFirebaseStorage();

  const onFileChange = (e) => {
    const file = e.target.files[0];
    const filename = uid() + ".jpg";
    const sRef = StorageRef(storage, "/products/" + filename);

    // Upload file
    const uploadTask = uploadBytesResumable(sRef, file);

    uploadTask.on(
      "state_changed",
      () => {},
      (error) => {
        console.log(error);
      },
      () => {
        // Upload is complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
        });
      }
    );
  };

  return {
    onFileChange,
  };
}
