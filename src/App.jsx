import Header from './components/Header'
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import googleDocsImage from './assets/google-docs.png';
import sheetsImage from './assets/sheets.png';
import lucidChartImage from './assets/lucid-chart.png';
import figmaImage from './assets/figma.png';

function App() {
  return (
    <>
      <div>
        <Header />
        <div className='container'>
          <div className='row'>
          <Card link="https://docs.google.com/document/d/1Fk6zWD9JaQrEUuH8L0rKb6vefR5U-CJcpryDXvt9WpE/edit?usp=sharing"
                image={googleDocsImage}
                title="System Requirements Specification" 
                description="Contains the technical specifications for the development of BudgetWise" />
           <Card link="https://docs.google.com/spreadsheets/d/1yLY64DChl9_X5Tp0LCWfnCJAuU21_TazHUePEAN4uJM/edit?usp=sharing"
                image={sheetsImage}
                title="BudgetWise Progress Tracker" 
                description="Progress Tracker for the different phases of Web Development" 
                isNew={true}/>
          <Card link="https://www.figma.com/design/oRpLUJfoDUdCsek3rIrzeo/Untitled?node-id=0-1&t=iL0Vxb3MFYVV6hFS-1"
                image={figmaImage}
                title="BudgetWise Design" 
                description="Contains the UI/UX Files for the Website design." />
          <Card link="https://docs.google.com/document/d/1_iXyDLjla3o6VT8yEQvVuxVVdmYgi2KzsQH7Z_Eqkew/edit?usp=sharing"
                image={googleDocsImage}
                title="Use Cases"
                description="Contains the Use Cases when a user uses the app" />
          <Card link="https://lucid.app/lucidchart/8d854aeb-2766-4d04-a44a-3a6a778d2ee6/edit?viewport_loc=-402%2C-308%2C2709%2C1317%2C0_0&invitationId=inv_7ff35a0b-dcdf-401c-bacd-0457e563c0a6"
                image={lucidChartImage}
                title="BudgetWise Charts"
                description="Contains the website navigation sequence/flow visualization. Contains the Data Model of the Application." />
          <Card link="https://docs.google.com/document/d/1CPRiZR5Z8LfA_Vo6PlnnDbkO0DknSK7umS62zthsI1k/edit?usp=sharing"
                image={googleDocsImage}
                title="Notification Alerts"
                description="Contains a table for all the possible messages or advisory in the application using Machine Learning" />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
