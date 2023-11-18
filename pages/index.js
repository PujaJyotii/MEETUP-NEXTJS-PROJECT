import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS=[
    {
        id:'m1',
        title:'First Meetup',
        image:'https://wallpapercave.com/wp/wp2752752.jpg',
        address:'Lokandwala',
         description:'This is first meetup'
    },
    {
        id:'m2',
        title:'Second Meetup',
        image:'https://wallpapercave.com/wp/wp2752752.jpg',
        address:'Lokandwala',
       
        description:'This is second meetup'
    },
    {
        id:'m3',
        title:'Third Meetup',
        image:'https://wallpapercave.com/wp/wp2752752.jpg',
        address:'Lokandwala',
       
        description:'This is third meetup'
    },
]

function HomePage ()

{
return <MeetupList meetup={DUMMY_MEETUPS} />
}
export default HomePage