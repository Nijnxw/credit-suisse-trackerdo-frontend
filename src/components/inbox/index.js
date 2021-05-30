
import CustomTable from "../commons/CustomTable/index";
import PageContainer from "../commons/PageContainer"

const Inbox = () => {
  return (
    <PageContainer className="Inbox" showSideBar={true}>
      <h1>Inbox</h1>
      <CustomTable title='All tasks' />
    </PageContainer>
  )
}

export default Inbox;
