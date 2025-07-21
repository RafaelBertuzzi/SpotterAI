export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
}

export interface UserAPI {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  profile_picture: string;
}

export interface UpdateProfileRequest {
  firstName: string;
  lastName: string;
  profilePicture?: string;
}
