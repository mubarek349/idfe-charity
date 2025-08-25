import AdminLayout from '@/components/AdminLayout';

export const metadata = {
  title: 'Admin Panel - IDFE Charity',
  description: 'Admin panel for managing IDFE Charity website content',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AdminLayout>
      {children}
    </AdminLayout>
  )
}