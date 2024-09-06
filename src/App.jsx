import Header from './components/Header'
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import googleDocsImage from './assets/google-docs.png';
import lucidChartImage from './assets/lucid-chart.png';

function App() {
  return (
    <>
      <div>
        <Header />
        <div className='container w-50'>
          <Card link="https://docs.google.com/document/d/1Fk6zWD9JaQrEUuH8L0rKb6vefR5U-CJcpryDXvt9WpE/edit?usp=sharing"
                image={googleDocsImage}
                title="System Requirements Specification" 
                description="Contains the technical specifications for the development of Project-F" />
          <Card link="https://docs.google.com/document/d/1Nm-mvPGWs8J-Ix8Q4puBz45T9bDDMydSNTC_ACXE-B8/edit?usp=sharing"
                image={googleDocsImage}
                title="Work Breakdown Schedule" 
                description="Contains the Software development phases of the project" />
          <Card link="https://docs.google.com/document/d/1_iXyDLjla3o6VT8yEQvVuxVVdmYgi2KzsQH7Z_Eqkew/edit?usp=sharing"
                image={googleDocsImage}
                title="Use Cases"
                description="Contains the Use Cases when a user uses the app" 
                isNew={true}/>
          <Card link="https://lucid.app/lucidchart/8d854aeb-2766-4d04-a44a-3a6a778d2ee6/edit?viewport_loc=-402%2C-308%2C2709%2C1317%2C0_0&invitationId=inv_7ff35a0b-dcdf-401c-bacd-0457e563c0a6"
                image={lucidChartImage}
                title="BudgetWise Charts"
                description="Contains the website navigation sequence/flow visualization. Contains the Data Model of the Application." 
                isNew={true} />
        </div>
      </div>
      
    </>
  );
}

export default App;
