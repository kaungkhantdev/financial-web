import Header from '../layouts/Header';

const MainLayout = ({ children }: { children: React.ReactNode }) =>  {
  return (
    <div className="">
        {/* Header */}
        <Header />
    
        {children}
    </div>
  );
}

export default MainLayout;