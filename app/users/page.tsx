import React from 'react'
import UserTable from './UserTable'

interface Props {
  searchParams: {sortOrder: string};
}

const UsersPage = async ({searchParams: {sortOrder}}: Props) => {
  return (
    <>
    <div>UsersPage sorted by {sortOrder}</div>
    <UserTable sortOrder={sortOrder}/>
    </>
  )
}

export default UsersPage