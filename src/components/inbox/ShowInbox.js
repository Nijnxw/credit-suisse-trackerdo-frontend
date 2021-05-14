
import CustomTable from "../commons/CustomTable/index";
import PageContainer from "../commons/PageContainer"

const ShowInbox = () => {
  return (
    <PageContainer className="ShowInbox" showSideBar={true}>
      <h1>Inbox</h1>
      <CustomTable title='All tasks' />
    </PageContainer>
  )
}

export default ShowInbox;
