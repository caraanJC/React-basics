import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
  const addMeetupHandler = (meetupData) => {
    fetch(
      'https://react-getting-started-dba01-default-rtdb.firebaseio.com/meetups',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
          'Access-Control-Allow-Headers':
            'append,delete,entries,foreach,get,has,keys,set,values,Authorization',
        },
      }
    )
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetupPage
