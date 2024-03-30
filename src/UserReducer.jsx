import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        uu.name = name;
        uu.email = email;
      }
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id != action.payload.id);
    },
    toggleStatus: (state, action) => {
      const uu = state.find((user) => user.id == action.payload.id);
      console.log(uu);

      if (uu) {
        uu.status = !uu.status;
      }
    },
  },
});

export default userSlice.reducer;
export const { addUser, updateUser, deleteUser, toggleStatus } =
  userSlice.actions;
