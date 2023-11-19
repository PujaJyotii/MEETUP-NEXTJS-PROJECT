

function MeetupDetails () {

    return <MeetupDetails 
    image='https://wallpapercave.com/wp/wp2752752.jpg'
    
    title='First meet'
    address='lonavla'
    description='Thist is First meetup' />
}

export async function getStaticPath() {
    return {
        fallback:false,
        path:[
            { params : {
                meetupId : 'm1'
            }},
            { params : {
                meetupId : 'm2'
            }},
        ]
    }
}

export async function getStaticProps (context) {
    const meetupId = context.params.meetupId
    return {
        props:{
            meetupData:{
                image:'https://wallpapercave.com/wp/wp2752752.jpg',
                id:meetupId,
    title:'First meet',
    address:'lonavla',
    description:'Thist is First meetup'
            }
        }
    }
}

export default MeetupDetails