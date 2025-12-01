import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import { ProductDetailsCont } from "../index.js";
import DialogTitle from "@mui/material/DialogTitle";
import { GiCrossMark } from "react-icons/gi";
import { useContext } from "react";
import StoreContext from "../context/storeContext/store.js";
function PaperComponent(props) {
  const nodeRef = React.useRef(null);
  return (
    <Draggable
      nodeRef={nodeRef}
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} ref={nodeRef} />
    </Draggable>
  );
}

const Model = () => {
  const {
    openProductDeatilsModel,
    handleCloseProductDeatilsModel,
  } = useContext(StoreContext);

  return (
    <>
      <Dialog
        open={openProductDeatilsModel}
        className="relative " 
        onClose={handleCloseProductDeatilsModel}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        maxWidth={false}
        PaperProps={{
          sx: {
            width: "80vw",
            height: "80vh",
            maxWidth: "80vw",
            maxHeight: "80vh",
            overflow: "hidden",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <DialogTitle
          id="draggable-dialog-title"
          style={{ cursor: "move", padding: "4px 10px" }}
        />

        <button
          onClick={handleCloseProductDeatilsModel}
          className=" absolute top-5 right-6 cursor-pointer text-[#ff5252] "
        >
          <GiCrossMark size={20} />
        </button>

        <DialogContent
          sx={{
            padding: 0,
            margin: 0,
            overflow: "auto",
            bgcolor: "#fafafa",
          }}
        >
          <div className="w-full h-full p-2">
            <ProductDetailsCont inModal={true} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Model;
