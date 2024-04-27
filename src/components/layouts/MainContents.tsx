export default function MainContents({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mainFrame">
      { children }
    </div>
  )
}