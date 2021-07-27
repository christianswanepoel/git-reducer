import React, { useReducer } from "react";
import { Form } from "react-bootstrap";

const reducerUname = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      console.log("CHANGE");
      return {
        val: action.val,
        isvalid: true,
      };
    case "INPUT_BLUR":
      console.log("BLUR");
      return {
        val: state.val,
        isvalid: state.val.includes("@"),
      };
    default:
      return { state };
  }
};

function App() {
  const [stateUname, dispatchUname] = useReducer(reducerUname, {
    val: "",
    isvalid: true,
  });

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            id="uname"
            className={stateUname.isvalid ? "valid" : "notvalid"}
            value={stateUname.val}
            onBlur={() => dispatchUname({ type: "INPUT_BLUR" })}
            onChange={(event) =>
              dispatchUname({ type: "INPUT_CHANGE", val: event.target.value })
            }
          />
        </Form.Group>
      </Form>
    </>
  );
}

export default App;
