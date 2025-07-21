import { User, UserAPI } from "./userTypes";

function toUser(userAPI: UserAPI): User {
  return {
    id: userAPI.id,
    email: userAPI.email,
    firstName: userAPI.first_name,
    lastName: userAPI.last_name,
    profilePicture: userAPI.profile_picture,
  };
}

export const userAdapter = {
  toUser,
};
