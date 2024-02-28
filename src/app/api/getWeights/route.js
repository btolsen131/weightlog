import { NextResponse } from "next/server";
import {NextApiRequest, NextApiResponse} from "next";

export function GET(req, res){
  try {
    console.log("ppop")
      let data = [
        {
          "date": "2024-02-27",
          "value": 235
        },
        {
          "date": "2024-02-26",
          "value": 238
        },
        {
          "date": "2024-02-25",
          "value": 233
        },
        {
          "date": "2024-02-24",
          "value": 239
        },
        {
          "date": "2024-02-23",
          "value": 234
        }
      ];
      console.log(data);
      return NextResponse.json(data, {
        status: 200,
      });
  } catch (err){
     return NextResponse.json({error: "Internal Server Error"}, {status: 500});
  }
}
