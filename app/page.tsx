import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "@/app/components/EmptyState";
import React from "react";
import getListings, { IListingsParams } from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = ({ searchParams }: HomeProps) => {
  const [listings, setListings] = React.useState<any[]>([]);
  const [currentUser, setCurrentUser] = React.useState<any>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const listingsData = await getListings(searchParams);
      const currentUserData = await getCurrentUser();
      setListings(listingsData);
      setCurrentUser(currentUserData);
    };

    fetchData();
  }, [searchParams]);

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {listings.map((listing: any) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.userId}
              data={listing}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
};

export async function getStaticProps() {
  const query: IListingsParams = {}; // Add your desired query parameters here
  const listings = await getListings(query);
  const currentUser = await getCurrentUser();

  return {
    props: {
      searchParams: query,
      listings,
      currentUser,
    },
  };
}

export default Home;

// Home.getInitialProps = async ({ query }: { query: IListingsParams }) => {
//   const listings = await getListings(query);
//   const currentUser = await getCurrentUser();
//   return { searchParams: query, listings, currentUser };
// };

// export default Home;

