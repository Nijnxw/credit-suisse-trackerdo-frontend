import CustomTable from "../commons/CustomTable/index"
import PageContainer from "../commons/PageContainer"

const Today = () => {
  return (
    <PageContainer className="Today" showSideBar={true}>
      <h1>Today</h1>
      <CustomTable title='Overdued' />
      <CustomTable title="Today's Task" />
    </PageContainer>
  )
}

export default Today
