import React from 'react'
import { withRoomConsumer } from '../Context'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import Loading from './Loading';

export function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />
    }

    return (<>
        <RoomsFilter rooms={rooms} />
        <RoomsList rooms={sortedRooms} />
    </>)
}

export default withRoomConsumer(RoomContainer);


// import React from 'react'
// import { RoomConsumer } from '../Context'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList'
// import Loading from './Loading';

// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const { loading, sortedRooms, rooms } = value;
//                     if (loading) {
//                         return <Loading />
//                     }

//                     return (<div>
//                         Hello from Rooms Container
//                         <RoomsFilter rooms={rooms} />
//                         <RoomsList rooms={sortedRooms} />
//                     </div>)
//                 }
//             }
//         </RoomConsumer>

//     )
// }
