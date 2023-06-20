import { getCurrentUser } from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import getReservations from "../actions/getReservations";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import FavoriteClient from "./FavoriteClient";

export default async function page() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  const listings = await getFavoriteListings();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoriteClient
        listings={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
