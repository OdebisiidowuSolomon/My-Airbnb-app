import { Listing, Reservation, User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string;
};

export type SafeListing = Omit<
  Listing,
  "createdAt"
> & {
  createdAt: string;
};

export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate" | 'Listing'
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  Listing: Listing
};

// Listing: SafeListing