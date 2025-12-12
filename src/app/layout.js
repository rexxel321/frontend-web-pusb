import { Helmet } from "react-helmet";

export default function RootLayout({ children }) {
  return (
    <>
      <Helmet>
        <title>PUSB 2025</title>
        <meta name="description" content="PUSB 2025" />
      </Helmet>
      <div className="root-layout">{children}</div>
    </>
  );
}
