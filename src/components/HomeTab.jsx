"use client"
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const HomeTab = () => {

  return (
    <Tabs>
      <TabList>
        <Tab>English</Tab>
        <Tab>Franch</Tab>
        <Tab>Korean</Tab>
        <Tab>Spanish</Tab>
      </TabList>

      <TabPanel>

      </TabPanel>
      <TabPanel>
        <h2>This is Korian content</h2>
      </TabPanel>
    </Tabs>
  )
}

export default HomeTab