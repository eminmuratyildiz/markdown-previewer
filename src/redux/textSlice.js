import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "data",
  initialState: {
    textCurrent: "",
    textUser: "",
    help: `Heading
=======
    
Sub-heading
-----------
    
### Another deeper heading
    
Paragraphs are separated by a blank line.
    
Leave 2 spaces at the end of a line to do a line break
    
Text attributes *italic*, **bold**, \`monospace\`, ~~strikethrough~~ .
    
Shopping list:
    
  * apples
  * oranges
  * pears
    
Numbered list:
    
  1. apples
  2. oranges
  3. pears
    
The rain---not the reign---in Spain.
    
*[Herman Fassett](https://freecodecamp.com/hermanfassett)*`,
    showHelp: false,
  },
  reducers: {
    changeText: (state, action) => {
      state.textCurrent = action.payload;
      state.textUser = action.payload;
    },
    changeHelp: (state) => {
      state.showHelp = !state.showHelp;
      if (state.showHelp === true) {
        state.textCurrent = state.help;
      } else {
        state.textCurrent = state.textUser;
      }
    },
  },
});

export default textSlice.reducer;
export const { changeText, changeHelp } = textSlice.actions;
