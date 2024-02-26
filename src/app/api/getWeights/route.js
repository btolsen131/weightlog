export async function GET(req, res){
  try {
      let data = [
          {
            "date": "2024-02-17",
            "value": 235
          },
          {
            "date": "2024-02-18",
            "value": 238
          },
          {
            "date": "2024-02-19",
            "value": 233
          },
          {
            "date": "2024-02-20",
            "value": 231
          },
          {
            "date": "2024-02-21",
            "value": 237
          },
          {
            "date": "2024-02-22",
            "value": 239
          },
          {
            "date": "2024-02-23",
            "value": 234
          }
        ];
        console.log(data);
      return Response.status(200).json(data);
  } catch (err){
      return Response.status(500).json({msg: `Something went wrong ${err}`});
  }
}
