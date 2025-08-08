export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        TEST LAYOUT 2
      <body>{children}</body>
    </html>
  );
}
