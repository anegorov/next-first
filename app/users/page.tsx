import React from 'react'
import UserTable from './UserTable'
import Link from 'next/link';

interface Props {
  searchParams: {sortOrder: string};
}

const UsersPage = async ({searchParams: {sortOrder}}: Props) => {
  return (
    <>
    <div>UsersPage sorted by {sortOrder}</div>
    <Link href="/users/new" className='btn btn-primary'>New User</Link>
    <UserTable sortOrder={sortOrder}/>
    </>
  )
}

export default UsersPage