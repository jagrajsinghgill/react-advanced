import { useState } from "react";
import "./assets/styles.css";
import { CustomModal } from "./components/CustomModal";
import { DialogModal } from "./components/DialogModal";

function App() {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [isDialogModalOpen, setIsDialogModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsCustomModalOpen(true)}>
        Show Custom Modal
      </button>
      <br />
      <button onClick={() => setIsDialogModalOpen(true)}>
        Show Dialog Modal
      </button>
      <CustomModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
      >
        <p>
          This is a <strong>CUSTOM</strong> modal
        </p>
        <button onClick={() => setIsCustomModalOpen(false)}>Close</button>
      </CustomModal>

      <DialogModal
        isOpen={isDialogModalOpen}
        onClose={() => setIsDialogModalOpen(false)}
      >
        <p>
          This is a <strong>DIALOG</strong> modal
        </p>
        <button onClick={() => setIsDialogModalOpen(false)}>Close</button>
      </DialogModal>
    </div>
  );
}
export default App;
