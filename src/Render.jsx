import Card from "./components/Card"
import React from 'react';


export default function Render() {

const Records = [
    {
      "id": 1,
      "name": "Code to Care Challenge 2021" ,
      "organisation": "Philips" ,
      "mode": "Online" ,
      "deadLine": "12/21/21",
      "fees": 200,
      "size": "2-4",
      "organiser":"Sanjith.K",
      "number":"1234567890",
      "overview":"The standard Lorem Ipsum passage, used since the 1500s Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure doled quia consequuntur magni dolores eos qui ratione voluptatem bore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? But I must explain to you how all this mistaken idea of denouncing pleasu",
      "src":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7237.707879526451!2d77.6000707816855!3d12.967551671304989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1680b68d65fb%3A0x2f03f7526c070b5!2sNagarjuna%20Restaurant%20-%20Residency%20Road!5e0!3m2!1sen!2sin!4v1705491436718!5m2!1sen!2sin"
    },
      {
        "id": 2,
        "name": "Central India's Largest Hackathon '24" ,
        "organisation": "NIT, Bhopal" ,
        "mode": "Offline" ,
        "deadLine": "12/21/21",
        "fees": "FREE",
        "size": "1-2",
        "organiser":"Metro Boomin",
        "number":"0987654321",
        "overview":"The standard Lorem Ipsum passage, used since the 1500s Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure doled quia consequuntur magni dolores eos qui ratione voluptatem bore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? But I must explain to you how all this mistaken idea of denouncing pleasu",
        "src":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7237.707879526451!2d77.6000707816855!3d12.967551671304989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1680b68d65fb%3A0x2f03f7526c070b5!2sNagarjuna%20Restaurant%20-%20Residency%20Road!5e0!3m2!1sen!2sin!4v1705491436718!5m2!1sen!2sin"
      },
      {
        "id": 3,
        "name": "AI BioInnovate Challenges" ,
        "organisation": "IIT Jodhpur" ,
        "mode": "Offline" ,
        "deadLine": "12/21/21",
        "fees": 400,
        "size": "4-5",
        "organiser":"J Cole",
        "number":"1122334455",
        "overview":"The standard Lorem Ipsum passage, used since the 1500s Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure doled quia consequuntur magni dolores eos qui ratione voluptatem bore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? But I must explain to you how all this mistaken idea of denouncing pleasu",
        "src":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7237.707879526451!2d77.6000707816855!3d12.967551671304989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1680b68d65fb%3A0x2f03f7526c070b5!2sNagarjuna%20Restaurant%20-%20Residency%20Road!5e0!3m2!1sen!2sin!4v1705491436718!5m2!1sen!2sin"
      }
    ]
    


return (
  <div className="flex flex-col">
  

  { Records && Records.map( record => {
      return ( 
              <Card key ={record.id} name={record.name} organisation={record.organisation} mode={record.mode} deadline={record.deadLine} fees={record.fees} size={record.size} overview={record.overview} organiser={record.organiser} number={record.number} src={record.src}/>
      )

  })}

  
</div>
)}