import React from 'react'
import { Text, View } from 'react-native'
import DataTable, {COL_TYPES} from 'react-native-datatable-component'


const Table = () => {
  return (
    <DataTable
        data={[ 
          {
            Name: 'Joseph',
            email: 'Joanny_Carter@yahoo.com',
            salary: 57752,
            jobTitle: 'Customer Directives Architect',
            startDate: '2022-12-28T20:59:36.586Z',
          },
          {
            Name: 'Paula',
            email: 'Webster.Monahan68@yahoo.com',
            salary: 47029,
            jobTitle: 'Direct Configuration Agent',
            startDate: '2023-01-04T08:03:36.832Z',
          },
          {
            Name: 'Domenic',
            email: 'Roma_Nicolas7@hotmail.com',
            salary: 55602,
            jobTitle: 'Corporate Operations Planner',
            startDate: '2022-02-07T13:34:22.224Z',
           
          },
          {
            Name: 'Rey Runte',
            email: 'Perry.Ferry@yahoo.com',
            salary: 88782,
            jobTitle: 'Direct Optimization Manager',
            startDate: '2022-10-02T00:14:02.192Z',
          },
          {
            Name: 'Buck Mosciski',
            email: 'Alf_Lehner33@gmail.com',
            salary: 95101,
            jobTitle: 'Internal Mobility Orchestrator',
            startDate: '2022-11-14T10:56:33.026Z',
          },
          {
            Name: 'Johnson',
            email: 'Emerson42@gmail.com',
            salary: 96104,
            jobTitle: 'Lead Accounts Director',
            startDate: '2022-08-12T22:15:41.531Z',
          },
          {
            Name: 'Silas',
            email: 'Jane_Hoeger42@gmail.com',
            salary: 64532,
            jobTitle: 'International Operations Consultant',
            startDate: '2022-06-03T16:42:52.698Z',
          },
          {
            Name: 'Kailey',
            email: 'Bo_Brakus@hotmail.com',
            salary: 26096,
            jobTitle: 'Regional Web Planner',
            startDate: '2022-10-17T21:12:54.687Z',
          },
          {
            Name: 'Lilian',
            email: 'Karson2@gmail.com',
            salary: 72692,
            jobTitle: 'Central Implementation Orchestrator',
            startDate: '2022-09-13T11:55:16.045Z',
          },
          {
            Name: 'Joseph',
            email: 'Joanny_Carter@yahoo.com',
            salary: 57752,
            jobTitle: 'Customer Directives Architect',
            startDate: '2022-12-28T20:59:36.586Z',
          },
          {
            Name: 'Paula',
            email: 'Webster.Monahan68@yahoo.com',
            salary: 47029,
            jobTitle: 'Direct Configuration Agent',
            startDate: '2023-01-04T08:03:36.832Z',
          },
          {
            Name: 'Domenic',
            email: 'Roma_Nicolas7@hotmail.com',
            salary: 55602,
            jobTitle: 'Corporate Operations Planner',
            startDate: '2022-02-07T13:34:22.224Z',
           
          },
          {
            Name: 'Rey Runte',
            email: 'Perry.Ferry@yahoo.com',
            salary: 88782,
            jobTitle: 'Direct Optimization Manager',
            startDate: '2022-10-02T00:14:02.192Z',
          },
          {
            Name: 'Buck Mosciski',
            email: 'Alf_Lehner33@gmail.com',
            salary: 95101,
            jobTitle: 'Internal Mobility Orchestrator',
            startDate: '2022-11-14T10:56:33.026Z',
          },
          {
            Name: 'Johnson',
            email: 'Emerson42@gmail.com',
            salary: 96104,
            jobTitle: 'Lead Accounts Director',
            startDate: '2022-08-12T22:15:41.531Z',
          },
          {
            Name: 'Silas',
            email: 'Jane_Hoeger42@gmail.com',
            salary: 64532,
            jobTitle: 'International Operations Consultant',
            startDate: '2022-06-03T16:42:52.698Z',
          },
          {
            Name: 'Kailey',
            email: 'Bo_Brakus@hotmail.com',
            salary: 26096,
            jobTitle: 'Regional Web Planner',
            startDate: '2022-10-17T21:12:54.687Z',
          },
          {
            Name: 'Lilian',
            email: 'Karson2@gmail.com',
            salary: 72692,
            jobTitle: 'Central Implementation Orchestrator',
            startDate: '2022-09-13T11:55:16.045Z',
          },
          {
            Name: 'Joseph',
            email: 'Joanny_Carter@yahoo.com',
            salary: 57752,
            jobTitle: 'Customer Directives Architect',
            startDate: '2022-12-28T20:59:36.586Z',
          },
          {
            Name: 'Paula',
            email: 'Webster.Monahan68@yahoo.com',
            salary: 47029,
            jobTitle: 'Direct Configuration Agent',
            startDate: '2023-01-04T08:03:36.832Z',
          },
          {
            Name: 'Domenic',
            email: 'Roma_Nicolas7@hotmail.com',
            salary: 55602,
            jobTitle: 'Corporate Operations Planner',
            startDate: '2022-02-07T13:34:22.224Z',
           
          },
          {
            Name: 'Rey Runte',
            email: 'Perry.Ferry@yahoo.com',
            salary: 88782,
            jobTitle: 'Direct Optimization Manager',
            startDate: '2022-10-02T00:14:02.192Z',
          },
          {
            Name: 'Buck Mosciski',
            email: 'Alf_Lehner33@gmail.com',
            salary: 95101,
            jobTitle: 'Internal Mobility Orchestrator',
            startDate: '2022-11-14T10:56:33.026Z',
          },
          {
            Name: 'Johnson',
            email: 'Emerson42@gmail.com',
            salary: 96104,
            jobTitle: 'Lead Accounts Director',
            startDate: '2022-08-12T22:15:41.531Z',
          },
          {
            Name: 'Silas',
            email: 'Jane_Hoeger42@gmail.com',
            salary: 64532,
            jobTitle: 'International Operations Consultant',
            startDate: '2022-06-03T16:42:52.698Z',
          },
          {
            Name: 'Kailey',
            email: 'Bo_Brakus@hotmail.com',
            salary: 26096,
            jobTitle: 'Regional Web Planner',
            startDate: '2022-10-17T21:12:54.687Z',
          },
          {
            Name: 'Lilian',
            email: 'Karson2@gmail.com',
            salary: 72692,
            jobTitle: 'Central Implementation Orchestrator',
            startDate: '2022-09-13T11:55:16.045Z',
          },
          {
            Name: 'Joseph',
            email: 'Joanny_Carter@yahoo.com',
            salary: 57752,
            jobTitle: 'Customer Directives Architect',
            startDate: '2022-12-28T20:59:36.586Z',
          },
          {
            Name: 'Paula',
            email: 'Webster.Monahan68@yahoo.com',
            salary: 47029,
            jobTitle: 'Direct Configuration Agent',
            startDate: '2023-01-04T08:03:36.832Z',
          },
          {
            Name: 'Domenic',
            email: 'Roma_Nicolas7@hotmail.com',
            salary: 55602,
            jobTitle: 'Corporate Operations Planner',
            startDate: '2022-02-07T13:34:22.224Z',
           
          },
          {
            Name: 'Rey Runte',
            email: 'Perry.Ferry@yahoo.com',
            salary: 88782,
            jobTitle: 'Direct Optimization Manager',
            startDate: '2022-10-02T00:14:02.192Z',
          },
          {
            Name: 'Buck Mosciski',
            email: 'Alf_Lehner33@gmail.com',
            salary: 95101,
            jobTitle: 'Internal Mobility Orchestrator',
            startDate: '2022-11-14T10:56:33.026Z',
          },
          {
            Name: 'Johnson',
            email: 'Emerson42@gmail.com',
            salary: 96104,
            jobTitle: 'Lead Accounts Director',
            startDate: '2022-08-12T22:15:41.531Z',
          },
          {
            Name: 'Silas',
            email: 'Jane_Hoeger42@gmail.com',
            salary: 64532,
            jobTitle: 'International Operations Consultant',
            startDate: '2022-06-03T16:42:52.698Z',
          },
          {
            Name: 'Kailey',
            email: 'Bo_Brakus@hotmail.com',
            salary: 26096,
            jobTitle: 'Regional Web Planner',
            startDate: '2022-10-17T21:12:54.687Z',
          },
          {
            Name: 'Lilian',
            email: 'Karson2@gmail.com',
            salary: 72692,
            jobTitle: 'Central Implementation Orchestrator',
            startDate: '2022-09-13T11:55:16.045Z',
          },
          {
            Name: 'Joseph',
            email: 'Joanny_Carter@yahoo.com',
            salary: 57752,
            jobTitle: 'Customer Directives Architect',
            startDate: '2022-12-28T20:59:36.586Z',
          },
          {
            Name: 'Paula',
            email: 'Webster.Monahan68@yahoo.com',
            salary: 47029,
            jobTitle: 'Direct Configuration Agent',
            startDate: '2023-01-04T08:03:36.832Z',
          },
          {
            Name: 'Domenic',
            email: 'Roma_Nicolas7@hotmail.com',
            salary: 55602,
            jobTitle: 'Corporate Operations Planner',
            startDate: '2022-02-07T13:34:22.224Z',
           
          },
          {
            Name: 'Rey Runte',
            email: 'Perry.Ferry@yahoo.com',
            salary: 88782,
            jobTitle: 'Direct Optimization Manager',
            startDate: '2022-10-02T00:14:02.192Z',
          },
          {
            Name: 'Buck Mosciski',
            email: 'Alf_Lehner33@gmail.com',
            salary: 95101,
            jobTitle: 'Internal Mobility Orchestrator',
            startDate: '2022-11-14T10:56:33.026Z',
          },
          {
            Name: 'Johnson',
            email: 'Emerson42@gmail.com',
            salary: 96104,
            jobTitle: 'Lead Accounts Director',
            startDate: '2022-08-12T22:15:41.531Z',
          },
          {
            Name: 'Silas',
            email: 'Jane_Hoeger42@gmail.com',
            salary: 64532,
            jobTitle: 'International Operations Consultant',
            startDate: '2022-06-03T16:42:52.698Z',
          },
          {
            Name: 'Kailey',
            email: 'Bo_Brakus@hotmail.com',
            salary: 26096,
            jobTitle: 'Regional Web Planner',
            startDate: '2022-10-17T21:12:54.687Z',
          },
          {
            Name: 'Lilian',
            email: 'Karson2@gmail.com',
            salary: 72692,
            jobTitle: 'Central Implementation Orchestrator',
            startDate: '2022-09-13T11:55:16.045Z',
          },
        ]}
        colNames={['Name', 'email', 'salary', 'jobTitle', 'startDate']}
        colSettings={[
          { name: 'Name', type: COL_TYPES.STRING, width: '20%' }, 
          { name: 'email', type: COL_TYPES.STRING, width: '30%' }, 
          {name: 'salary', type: COL_TYPES.INT, width: '10%'},
          {name: 'jobTitle', type: COL_TYPES.STRING, width: '20%'},
          {name: 'startDate', type: COL_TYPES.STRING, width: '20%'}
        ]}
        noOfPages={2}
        backgroundColor={'rgba(23,2,4,0.2)'}
        headerLabelStyle={{ color: '#FF0000', fontSize: 12 }}
    />
);
}

export default Table