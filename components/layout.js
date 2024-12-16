import Link from 'next/link';

const Layout = ({ children }) => (
  <div>
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link href="/">Home</Link> | 
      <Link href="/api-data">API Data</Link> | 
      <Link href="/form">Form</Link>
    </nav>
    <main>{children}</main>
  </div>
);

export default Layout;
