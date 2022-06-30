// export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJjYTdjNTFjZi1lNmIzLTQ0YzQtOTg3ZS03ZTExZDQ0Yjc3YzEiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY1NjUyMzM1MCwiZXhwIjoxNjU3MTI4MTUwfQ.CkCKPmowvIXg2z-cbcFYfI8TZKszc5vzPpktUTqVYqk"

// export const createMeeting = async ({ token }) => {
//   const res = await fetch(`https://api.videosdk.live/v1/meetings`, {
//     method: "POST",
//     headers: {
//       authorization: `${authToken}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ region: "sg001" }),
//   });

//   const { meetingId } = await res.json();
//   return meetingId;
// };