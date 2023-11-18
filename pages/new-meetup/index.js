function NewMeetUpPage()
{
    const addMeetupHandler = (enteredMeetUpdata) => {
      console.log(enteredMeetUpdata)
    }

    return <NewMeetUpPage onAddMeetup={addMeetupHandler} />
}

export default NewMeetUpPage