export type CreateUser = {
  username: string;
  email: string;
  password: string;
};

export type ValidateUserDetails = {
  username: string;
  password: string;
};

export type ValidateCreateHotel = {
  name: string;
  location: string;
  isPopular: boolean;
  description: string;
  price: number;
};

export type ValidateCreateOrder = {
  start_date: Date;
  end_date: Date;
  hotelId: number;
  user: any;
};
