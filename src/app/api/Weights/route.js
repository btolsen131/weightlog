import { NextResponse } from "next/server";
import prisma from '../../prisma';

export async function GET(req, res){
  try {
      let data = await prisma.weights.findMany({
        orderBy: {
          date: 'asc'
        }
      });

      return NextResponse.json(data, {
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
