import ClientOnly from '../components/ClientOnly'
import EmptyState from '../components/EmptyState'

import getCurrentUser from '../actions/getCurrentUser'
import getReservations from '../actions/getReservations'
import ReservationsClient from './ReservationsClient'

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="Unauthorized"
          subtitle="Please login to access this page"
        />
      </ClientOnly>
    )
  }

  const reservations = await getReservations({ userId: currentUser.id })

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No trips found."
          subtitle="Looks like you have not reserved any trips yet."
        />
      </ClientOnly>
    )
  }
  return (
    <ClientOnly>
      <ReservationsClient/>
    </ClientOnly>
  )
}

export default ReservationsPage
