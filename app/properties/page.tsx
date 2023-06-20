import { getCurrentUser } from "../actions/getCurrentUser";
import getListings from "../actions/getListings";
import getReservations from "../actions/getReservations";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import PropertyClient from "./PropertyClient";

export default async function page() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No properties found"
          subtitle="Looks like you have no properties"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertyClient
        listings={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
