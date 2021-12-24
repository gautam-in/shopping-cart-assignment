import Footer from '../components/atoms/footer/footer';
import PageHeader from '../components/molecules/pageHeader/pageHeader';
import MainRoutes from '../navigation/mainRoutes';
function MainLayout() {
  return (
    <>
      <div className="row">
        <div>
          <PageHeader />
        </div>
      </div>
      <div style={{ marginTop: '14vh' }} className="container-lg">
        <div className="row">
          <MainRoutes />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
