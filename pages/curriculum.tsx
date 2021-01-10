// import CurriculumCard from 'components/CurriculumCard';
import PageTransition from 'components/PageTransition';

const CurriculumPage = () => {

  return (
    <PageTransition>
      <h2 className="text-3xl font-bold mb-10">My experiences</h2>

      <p>
        There is currently no card added on your experiences pages.<br />
        Try to add a Curriculum card now.
      </p>

      {/* <CurriculumCard
        company="Studio Zerance"
        image="images/curriculum/studio_zerance.png"
        description="Full-Stack Developer (Shopify applications)"
        url="https://studiozerance.fr/"
        startDate="11/20/2019"
      />

      <CurriculumCard
        company="École 42"
        image="images/curriculum/42.png"
        description="Digital technology architect"
        url="https://42.fr/"
        startDate="01/09/2018"
        endDate="01/15/2022"
      />

      <CurriculumCard
        company="Startup4Kids"
        image="images/curriculum/startup4kids.png"
        description="Educational supervisor"
        url="https://startupforkids.fr/"
      /> */}
    </PageTransition>
  )
}

export default CurriculumPage;