import { NextResponse } from "next/server";
import prisma from '../../prisma';

export async function GET(req, res){
  try {
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
      let dataa = await prisma.weights.findMany();
      return NextResponse.json(dataa, {
        status: 200,
      });
  } catch (err){
     return NextResponse.json({error: "Internal Server Error Getting Weights"}, {status: 500});
  }
}

export async function POST(req,res){
  try{
    const { datetime, weight} = await req.json();

    console.log(datetime, weight)

    var date = new Date(datetime);

    try {
    const newWeight = await prisma.weights.create({
      data: {
        date,
        weight
      }
    });
  } catch (err){
    console.log(err);
  }

    return res.status(200).end();
  } catch (err){
    return NextResponse.json({error: "Internal Server Error Adding Weight"}, {status: 500});
  }
}
